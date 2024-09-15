"use client"
import React, { CSSProperties, useState } from "react"

import { useCompletion } from "ai/react"
import axios from "axios"
import SyncLoader from "react-spinners/SyncLoader"

import { File } from "@/interface/custom/folder-tree/folder-tree"
import { Content } from "@google/generative-ai"

import { Button } from "@/ui/button"
import { GenerateAuditInstructions } from "@/utils/prompt"
// Loader styles
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
}

type resp = [
  {
    [key: string]: string
  },
]

const Audit = ({ selectedFile }: { selectedFile: File | undefined }) => {
  const { complete } = useCompletion({
    api: "/api/audit",
  })

  const [text, setText] = useState<resp>()
  const [loading, setLoading] = useState(false)
  const [color] = useState("#ffffff")

  // Function to generate the vulnerability report
  const checkVulnerability = () => {
    setLoading(true)

    const payload: Content[] = [
      ...GenerateAuditInstructions(),
      {
        parts: [{ text: selectedFile!.content }],
        role: "user",
      },
    ]

    complete("", {
      body: {
        messages: payload,
      },
    })
      .then((newCompletion) => {
        const aiResponse = newCompletion || "There was an error with the AI response. Please try again."
        const cleanedResponse = aiResponse.replace(/```(\w+)?/g, "") // Remove code block formatting
        const parsedResponse = JSON.parse(cleanedResponse) // Parse JSON
        console.log("Cleaned response:", parsedResponse)
        setText(parsedResponse) // Store parsed JSON in state
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }

  console.log({ text })

  const downloadPDF = async () => {
    if (!text) return // No report to download

    try {
      const response = await axios.post(
        "/api/audit/download",
        { report: text, file: selectedFile?.name },
        {
          responseType: "blob", // Important for downloading binary files
        }
      )

      // Create a URL for the PDF blob
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute(
        "download",
        selectedFile?.name ? `${selectedFile.name.split(".sol")?.[0]}_audit_report.pdf` : "vulnerability-report.pdf"
      ) // Specify the filename
      document.body.appendChild(link)
      link.click() // Trigger the download
    } catch (error) {
      console.error("Error downloading PDF:", error)
    }
  }

  // Ensure a file is selected before rendering
  if (!selectedFile) return <div>Select A File</div>

  return (
    <div className="p-1">
      <SyncLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="mt-4"
      />
      {text && !loading && (
        <Button
          className="flex w-full items-center gap-2 bg-[#3c3c3c] px-4 py-2 text-center text-white transition-all"
          onClick={downloadPDF}
        >
          Download PDF
        </Button>
      )}
      {!loading && !text && (
        <Button
          className="flex w-full items-center gap-2 bg-[#3c3c3c] px-4 py-2 text-center text-white transition-all"
          onClick={checkVulnerability}
        >
          Generate Vulnerability Report
        </Button>
      )}

      {text && !loading && (
        <div className="mt-4">
          <h2 className="mb-4 text-left text-xl font-bold">Vulnerability Report</h2>
          <div className="flex flex-col gap-2 md:gap-3">
            {text.map((section, index) => (
              <div
                key={index}
                className="mb-6 flex flex-col gap-4"
              >
                {Object.keys(section).map((key) => (
                  <div
                    className=""
                    key={key}
                  >
                    <h3 className="mb-1 pl-1 text-lg font-semibold capitalize">{key.replace(/_/g, " ")}</h3>
                    <div className="bg-[#171616] p-2.5">
                      <p className="text-sm text-neutral-300">{section[key]}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Audit

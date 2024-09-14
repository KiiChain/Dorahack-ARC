"use client"
import React, { useState } from "react"

import Image from "next/image"

import clsx from "clsx"
import Slider, { Settings } from "react-slick"

import { createProject, init, templates } from "@/data/sample"

import { cn } from "@/lib/utils"
import { useIDE } from "@/providers/ide"
import { Button } from "@/ui/button"
import TextInput from "@/ui/text-input"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useCompletion } from "ai/react"
import { Content } from "@google/generative-ai"
import { GenerateCodeInstructions } from "@/utils/prompt"
import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"

const GettingStarted = () => {
  const { setRootDir } = useIDE()

  const [projectName, setProjectName] = useState("")
  const [projectDesc, setProjectDesc] = useState("")
  const [libraries, setLibraries] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [category, setCategory] = useState("Financial")
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState("")

  const { complete } = useCompletion({
    api: "/api/customize",
  });
  const [activePanel, setActivePanel] = useState<string | null>(null)

  const handlePanelClick = (panel: string) => {
    setActivePanel(panel === activePanel ? null : panel)
  }

  const handleProjectCreation = () => {
    // const librariesArray = libraries.split(",").map((lib) => lib.trim());
    console.log(`selected this `, selectedTemplate)
    let newProject
    if (selectedTemplate == null) {
      newProject = createProject(projectName, `empty`)
    } else {
      newProject = createProject(projectName, selectedTemplate)
    }
    setRootDir(newProject)
    // Handle the newly created project (save to state, localStorage, etc.)
    console.log("Created Project:", newProject)
  }
  const handleProjectCreationScratch = () => {
    let newProject = init
    newProject.dirs[0] = init;
    newProject.dirs[0].name = projectName
    setRootDir(newProject)
    console.log("Created Project:", newProject)
  }
  const handleProjectCreationAI = async () => {
    setLoading(true);
    const sampleUseCase = GenerateCodeInstructions({
      category: category || "Governance",
      contract_type: "",
      name: projectName || "DecentralizedVoting",
      token: "GOVT",
      description: projectDesc || "A decentralized voting system allowing token holders to cast votes on governance proposals.",
      prompt
    });

    const payload: Content[] = [
      sampleUseCase
    ];
    let code = ""
    complete("", {
      body: {
        messages: payload,
      },
    })
      .then((newCompletion) => {
        const aiResponse = newCompletion || "There was an error with the AI response. Please try again.";
        const cleanedResponse = aiResponse.replace(/```(\w+)?/g, ""); // Remove code block formatting
        console.log(cleanedResponse)
        code = cleanedResponse



        let newProject=init
        // @ts-ignore
        let newdir:Directory={}
        newdir.depth=1
        newdir.dirs=[]
        newdir.files=[]
        newdir.name = projectName
        newdir.id="contracts"
        newdir.parentId="0"
        newdir.type="directory"
        newProject.dirs.push(newdir)
    
        const file: File = {
          content: code,
          depth: 2,
          id: "contract1",
          name: "AIfile.sol",
          parentId: "contracts",
          type: "file"
        }
        newProject.files.push(file)
        setRootDir(newProject)
        // Handle the newly created project (save to state, localStorage, etc.)
        console.log("Created Project:", newProject)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
   
  }

  return (
    <>
      <div className="w-full">
        <h1 className="my-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-center text-3xl font-bold text-transparent">
          Kickstart Your Next Blockchain Project <br />
          On KiiChain
        </h1>

        <div className="mx-auto max-w-4xl space-y-6">
          {(activePanel === null || activePanel === "manual") && (
            <div className="meteor-effect rounded-lg border border-gray-600 bg-dark-3">
              <button
                className="w-full p-4 text-left font-semibold"
                onClick={() => handlePanelClick("manual")}
              >
                1. Start from Scratch
              </button>
              {activePanel === "manual" && (
                <div className="space-y-4 p-4">
                  <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    type="text"
                    placeholder="Project Name"
                    className="w-full rounded bg-zinc-800 p-2 text-white placeholder:text-neutral-500"
                  />
                  <select
                    onChange={(e) => setLibraries(e.target.value ?? "")}
                    className={clsx(
                      "w-full rounded bg-zinc-800 p-2 text-white placeholder:text-neutral-500",
                      libraries === null || libraries === "" ? "text-neutral-500" : "text-white"
                    )}
                  >
                    <option>Libraries</option>
                    <option value="openzeppelin">OpenZeppelin</option>
                  </select>
                  <textarea
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    cols={3}
                    placeholder="Project Description"
                    className="w-full rounded bg-zinc-800 p-2 text-white placeholder:text-neutral-500"
                  />
                  <Button
                    type="button"
                    variant="fill"
                    className="w-full"
                    onClick={handleProjectCreationScratch}
                  >
                    🚀 Create blank project
                  </Button>
                </div>
              )}
            </div>
          )}

          {(activePanel === null || activePanel === "template") && (
            <div className="meteor-effect rounded-lg border border-gray-600 bg-dark-3">
              <button
                className="w-full p-4 text-left font-semibold"
                onClick={() => handlePanelClick("template")}
              >
                2. Choose a Starter Template
              </button>
              {activePanel === "template" && (
                <div className="space-y-4 p-4">
                  <div className="slider-container">
                    <Slider
                      dots={true}
                      infinite={true}
                      speed={500}
                      slidesToShow={3}
                      centerMode
                      arrows={false}
                      draggable
                      easing="ease"
                      swipe
                    >
                      {Object.keys(templates).map((key: string) => {
                        const meta = templates[key]

                        return (
                          <div
                            key={key}
                            className={cn(
                              "!flex items-center justify-center",
                              selectedTemplate === key
                                ? "scale-100 border-[0.1px] border-gray-700"
                                : selectedTemplate === null
                                  ? "scale-88"
                                  : "scale-90",
                              "relative cursor-pointer rounded-lg transition-transform duration-200"
                            )}
                            onClick={() => {
                              setSelectedTemplate((prev) => (prev === key ? null : key))
                            }}
                          >
                            <div className="relative h-32 w-full rounded">
                              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 opacity-75 transition-opacity duration-300 hover:opacity-100">
                                <span className="font-bold text-white">{meta.name}</span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </Slider>
                  </div>
                  <Button
                    type="button"
                    variant="fill"
                    className="w-full"
                    onClick={handleProjectCreation}
                  >
                    🚀 Create blank project
                  </Button>
                </div>
              )}
            </div>
          )}

          {(activePanel === null || activePanel === "ai") && (
            <div className="meteor-effect rounded-lg border border-gray-600 bg-dark-3">
              <button
                className="w-full p-4 text-left font-semibold"
                onClick={() => handlePanelClick("ai")}
              >
                3. Generate via AI
              </button>
              {activePanel === "ai" && (
                <div className="space-y-4 p-4">
                  <input
                    type="text"
                    placeholder="Contract Name"
                    className="w-full rounded bg-zinc-800 p-2 text-white placeholder:text-neutral-500"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded bg-zinc-800 p-2 text-white"
                  >
                    <option value="">Select Category</option>
                    <option value="Financial">Financial</option>
                    <option value="Supply Chain">Supply Chain</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Governance">Governance</option>
                  </select>

                  <textarea
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    placeholder="Contract Description"
                    className="w-full rounded bg-zinc-800 p-2 text-white placeholder:text-neutral-500"
                  />
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Prompt"
                    className="w-full rounded bg-zinc-800 p-2 text-white placeholder:text-neutral-500"
                  />
                  <Button
                    type="button"
                    variant="fill"
                    className="w-full"
                    onClick={handleProjectCreationAI}
                    disabled={loading}
                  >
                    Generate code
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}


export default GettingStarted

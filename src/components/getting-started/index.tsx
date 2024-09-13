"use client"
import { createProject } from "@/data/sample"
import { useIDE } from "@/providers/ide"
import Image from "next/image"
import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import TextInput from "@/ui/text-input"

const templates = [
  {
    key: "Solidity Basic",
    label: "Solidity Starter Project",
    src: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with actual remote URL
  },
  {
    key: "ERC20 Token",
    label: "ERC20 Token Project",
    src: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with actual remote URL
  },
  {
    key: "NFT Marketplace1",
    label: "NFT Marketplace Project",
    src: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with actual remote URL
  },
  {
    key: "NFT Marketplace2",
    label: "NFT Marketplace Project",
    src: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with actual remote URL
  },
  {
    key: "NFT Marketplace3",
    label: "NFT Marketplace Project",
    src: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with actual remote URL
  },
  {
    key: "NFT Marketplace4",
    label: "NFT Marketplace Project",
    src: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with actual remote URL
  },
]

const GettingStarted = () => {
  const [projectName, setProjectName] = useState("")
  const [libraries, setLibraries] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const { setRootDir } = useIDE()
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

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center my-4">Kickstart Your Next Blockchain Project On KiiChain</h1>


      <h2 className="text-lg font-semibold">Start From Scratch</h2>
      <div className="mb-4">

        <label
          htmlFor="projectName"
          className=""
        >
          Project Name
        </label>
        <TextInput
          type="text"
          name="projectname"
          value={projectName}
          className="rounded-md bg-transparent"
          placeholder="Enter your project name"
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="libraries"
          className=""
        >
          Libraries to Import (Optional)
        </label>
        <TextInput
          type="text"
          name="libraries"
           id="libraries"
          value={libraries}
          className="rounded-md bg-transparent"
          placeholder="Enter libraries to import"
          onChange={(e) => setLibraries(e.target.value)}
          required
        />
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <h2 className="text-lg font-semibold">Starter Templates</h2>
      <div className="mb-4">
        {/* <label
          htmlFor="template"
          className="block text-sm font-medium text-gray-700"
        >
          Choose a template
        </label>
        <select
          id="template"
          name="template"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          value={selectedTemplate || ""}
          onChange={(e) => setSelectedTemplate(e.target.value || null)}
        >
          <option value="empty">None (Start Empty)</option>
          {templates.map((template) => (
            <option
              key={template.key}
              value={template.key}
            >
              {template.label}
            </option>
          ))}
        </select> */}

        <StarterTemplates templates={templates} selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
      </div>

      <div className="flex justify-center">
        <Button
          type="button"
          variant="fill"
          // className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleProjectCreation}
        >
          🚀 Create Your Project
        </Button>
      </div>
    </div>
  )
}
const StarterTemplates = ({ templates, selectedTemplate, setSelectedTemplate }:
  {
    templates: {
      key: string; label: string; src: string
    }[];
    setSelectedTemplate: React.Dispatch<React.SetStateAction<string | null>>;
    selectedTemplate: string | null
  }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {
            templates.map((temp) => {
              return (
                <div
                  className={cn("!flex items-center justify-center", selectedTemplate === temp.key && " scale-95  border-[0.1px] border-gray-700", "relative rounded-lg  cursor-pointer transition-transform duration-200 ")}
                  onClick={() => { setSelectedTemplate(temp.key) }}
                >

                  <Image alt={temp.key} src={temp.src} height={125} width={200} className="rounded-lg" />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </>
  )
}
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default GettingStarted

"use client"
import React, { useState } from "react"

import Image from "next/image"

import clsx from "clsx"
import Slider, { Settings } from "react-slick"

import { createProject, templates } from "@/data/sample"

import { cn } from "@/lib/utils"
import { useIDE } from "@/providers/ide"
import { Button } from "@/ui/button"
import TextInput from "@/ui/text-input"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const GettingStarted = () => {
  const { setRootDir } = useIDE()

  const [projectName, setProjectName] = useState("")
  const [projectDesc, setProjectDesc] = useState("")
  const [libraries, setLibraries] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

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
  const handleProjectCreationAI = async() => {
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
    <>
      <div className="w-full">
        <h1 className="my-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-center text-3xl font-bold text-transparent">
          Kickstart Your Next Blockchain Project <br />
          On KiiChain
        </h1>

        <div className="mx-auto max-w-4xl space-y-6">
          {/* Manual Section */}
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
                    onClick={handleProjectCreation}
                  >
                    🚀 Create blank project
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Template Section */}
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

          {/* AI Section */}
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
                  />
                  <select className="w-full rounded bg-zinc-800 p-2 text-white placeholder:text-neutral-500">
                    <option>Select Category</option>
                    <option>Financial</option>
                    <option>Supply Chain</option>
                    <option>Gaming</option>
                  </select>
                  <textarea
                    placeholder="Description"
                    className="w-full rounded bg-zinc-800 p-2 text-white placeholder:text-neutral-500"
                  />
                  <textarea
                    placeholder="Prompt"
                    className="w-full rounded bg-zinc-800 p-2 text-white placeholder:text-neutral-500"
                  />
                  <Button
                    type="button"
                    variant="fill"
                    className="w-full"
                    onClick={handleProjectCreationAI}
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


const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}
export default GettingStarted

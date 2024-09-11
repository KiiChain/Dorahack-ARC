"use client";
import { createProject } from "@/data/sample";
import { useIDE } from "@/providers/ide";
import React, { useState } from "react";

const templates = [
  { key: "Solidity Basic", label: "Solidity Starter Project" },
  { key: "ERC20 Token", label: "ERC20 Token Project" },
  { key: "NFT Marketplace", label: "NFT Marketplace Project" },
];

const GettingStarted = () => {
  const [projectName, setProjectName] = useState("");
  const [libraries, setLibraries] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
const {setRootDir}=useIDE()
  const handleProjectCreation = () => {
    // const librariesArray = libraries.split(",").map((lib) => lib.trim());
console.log(`selected this `,selectedTemplate)
let newProject 
if(selectedTemplate==null) {
newProject=createProject(projectName, `empty`);
}else{
  newProject=createProject(projectName, selectedTemplate);
}
    setRootDir(newProject)
    // Handle the newly created project (save to state, localStorage, etc.)
    console.log("Created Project:", newProject);
  };

  return (
    <div className="w-full">
      <h2>Getting Started</h2>
      <div className="flex flex-col gap-1">
        <p className="text-muted-foreground text-sm">
          Get started by initializing a new project or choose from a variety of prebuilt templates.
        </p>
      </div>

      <h2 className="text-lg font-semibold">Start Empty Project</h2>
      <div className="mb-4">
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="libraries" className="block text-sm font-medium text-gray-700">
          Libraries to Import (Optional)
        </label>
        <input
          type="text"
          id="libraries"
          name="libraries"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          placeholder="Enter libraries to import"
          value={libraries}
          onChange={(e) => setLibraries(e.target.value)}
        />
      </div>

      <h2 className="text-lg font-semibold">Starter Templates</h2>
      <div className="mb-4">
        <label htmlFor="template" className="block text-sm font-medium text-gray-700">
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
            <option key={template.key} value={template.key}>
              {template.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleProjectCreation}
        >
          Create Project
        </button>
      </div>
    </div>
  );
};

export default GettingStarted;

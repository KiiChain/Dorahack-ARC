import React from "react"

const NoFileSelected = () => {
  return (
    <div className="h-full w-full bg-[#1e1e1e] p-10 md:p-11">
      <div className="mt-5">
        <h1 className="text-3xl font-bold">ARC's AI-Powered Code Editor</h1>
        <h3 className="text-xl font-light italic">Revolutionizing the Way You Code</h3>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold">Key Features</h1>
        <ul className="mt-3 list-inside list-disc space-y-2">
          <li className="text-xl italic text-neutral-600">AI-driven code suggestions, just like Copilot</li>
          <li className="text-xl italic text-neutral-600">Seamless online code editing</li>
          <li className="text-xl italic text-neutral-600">
            All-in-one platform for Deployment, Compilation, & Security Auditing
          </li>
          <li className="text-xl italic text-neutral-600">Generate detailed code vulnerability reports</li>
        </ul>
      </div>
      <div className="mt-10 w-full max-w-md rounded-lg bg-[#3c3c3c] p-5 shadow-md">
        <h2 className="mb-3 text-2xl font-light">Select a file to open</h2>
        <p className="mb-5">You haven’t opened a file yet. Click a file on sidebar to start editing.</p>
      </div>
    </div>
  )
}

export default NoFileSelected

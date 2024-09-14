import React from "react"

const NoFileSelected = () => {
  return (
    <div className="p-10 md:p-11 h-full w-full bg-[#1e1e1e]">
      <div className="mt-5">
        <h1 className="text-3xl font-bold">ARC's AI-Powered Code Editor</h1>
        <h3 className="italic text-xl font-light">Revolutionizing the Way You Code</h3>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold">Key Features</h1>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li className="italic text-xl text-neutral-600">AI-driven code suggestions, just like Copilot</li>
          <li className="italic text-xl text-neutral-600">Seamless online code editing</li>
          <li className="italic text-xl text-neutral-600">All-in-one platform for Deployment, Compilation, & Security Auditing</li>
          <li className="italic text-xl text-neutral-600">Generate detailed code vulnerability reports</li>
        </ul>
      </div>
      <div className="mt-10 p-5 bg-[#3c3c3c] shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-light mb-3">Select a file to open</h2>
        <p className=" mb-5 ">
          You haven’t opened a file yet. Click a file on sidebar to start editing.
        </p>
        
      </div>

    </div>
  )
}

export default NoFileSelected

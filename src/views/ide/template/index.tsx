import React from "react"

const TemplateView = () => {
  return (
    <main className="min-h-screen px-10 py-10">
      {/* Welcome */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Project Creation Wizard</h1>
        <div className="text-muted-foreground text-sm">
          Get started by initializing a new project or choose from a variety of prebuilt templates
        </div>
      </div>

      {/* Start empty */}
      <div className="mt-8"></div>
      <h2 className="text-lg font-semibold">Start Empty Project</h2>
      <div className="mb-4">
        <label
          htmlFor="projectName"
          className="block text-sm font-medium text-gray-700"
        >
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          placeholder="Enter project name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="libraries"
          className="block text-sm font-medium text-gray-700"
        >
          Libraries to Import (Optional)
        </label>
        <input
          type="text"
          id="libraries"
          name="libraries"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          placeholder="Enter libraries to import"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          placeholder="Enter project description"
          required
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Project
        </button>
      </div>
    </main>
  )
}

export default TemplateView

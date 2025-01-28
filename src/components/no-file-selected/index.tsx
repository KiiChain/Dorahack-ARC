"use client"

import React from "react"
import { useTheme } from "@/providers/theme"

const NoFileSelected = () => {
  const { theme } = useTheme()

  return (
    <div
      className="h-full w-full p-10 pt-10 md:p-11"
      style={{ backgroundColor: theme.bgColor }}
    >
      <div className="mt-5">
        <h1
          className="text-3xl font-bold"
          style={{ color: theme.primaryTextColor }}
        >
          ARC's AI-Powered Code Editor
        </h1>
        <h3
          className="text-xl font-light italic"
          style={{ color: theme.secondaryTextColor }}
        >
          Revolutionizing the Way You Code
        </h3>
      </div>

      <div className="mt-8">
        <h1
          className="text-3xl font-bold"
          style={{ color: theme.primaryTextColor }}
        >
          Key Features
        </h1>
        <ul className="mt-3 list-inside list-disc space-y-2">
          <li
            className="text-xl italic"
            style={{ color: theme.secondaryTextColor }}
          >
            AI-driven code suggestions, just like Copilot
          </li>
          <li
            className="text-xl italic"
            style={{ color: theme.secondaryTextColor }}
          >
            Seamless online code editing
          </li>
          <li
            className="text-xl italic"
            style={{ color: theme.secondaryTextColor }}
          >
            All-in-one platform for Deployment, Compilation, & Security Auditing
          </li>
          <li
            className="text-xl italic"
            style={{ color: theme.secondaryTextColor }}
          >
            Generate detailed code vulnerability reports
          </li>
        </ul>
      </div>

      <div
        className="mt-10 w-full max-w-md rounded-lg p-5 shadow-md"
        style={{ backgroundColor: theme.boxColor }}
      >
        <h2
          className="mb-3 text-2xl font-light"
          style={{ color: theme.primaryTextColor }}
        >
          Select a file to open
        </h2>
        <p
          className="mb-5"
          style={{ color: theme.secondaryTextColor }}
        >
          You haven't opened a file yet. Click a file on sidebar to start editing.
        </p>
      </div>
    </div>
  )
}

export default NoFileSelected

// import fs from "fs"
// import path from "path"
const fs=require('fs')
const path=require('path')
// Define source and destination paths
const sourceDir = path.join(__dirname, "openzeppelin")
const destinationDir = path.join(__dirname, ".next", "openzeppelin")

// Create destination directory if it doesn't exist
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true })
}

// Function to copy files and directories from source to destination
const moveFolder = (src, dest) => {
  fs.readdirSync(src).forEach((file) => {
    const srcFile = path.join(src, file)
    const destFile = path.join(dest, file)

    // Check if the current file is a directory
    if (fs.lstatSync(srcFile).isDirectory()) {
      // Create the directory in the destination if it doesn't exist
      if (!fs.existsSync(destFile)) {
        fs.mkdirSync(destFile, { recursive: true })
      }
      // Recursively copy nested directories and files
      moveFolder(srcFile, destFile)
    } else {
      // If it's a file, copy it to the destination
      fs.copyFileSync(srcFile, destFile)
    }
  })
}

// Start the process of moving files
moveFolder(sourceDir, destinationDir)

console.log(`Files moved from ${sourceDir} to ${destinationDir}`)

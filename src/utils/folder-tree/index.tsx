import React, { useState } from "react"

import { Directory, File as CustomFile, FileTreeProps, SubTreeProps } from "@/interface/folder-tree/folder-tree"

import { cn } from "@/lib/utils"
import { sortDir, sortFile } from "@/ui/file-tree/file-utils"
import { getIcon } from "@/ui/icons"

export const FileTree = (props: FileTreeProps) => {
  return (
    <SubTree
      directory={props.rootDir}
      {...props}
    />
  )
}

const SubTree = (props: SubTreeProps) => {
  return (
    <div className="group">
      {props.directory.dirs.sort(sortDir).map((dir) => (
        <React.Fragment key={dir.id}>
          <DirDiv
            directory={dir}
            selectedFile={props.selectedFile}
            onSelect={props.onSelect}
            onAddFile={props.onAddFile}
            onAddFolder={props.onAddFolder}
            onDelete={props.onDelete}
            onRename={props.onRename}
          />
        </React.Fragment>
      ))}
      {props.directory.files.sort(sortFile).map((file) => (
        <React.Fragment key={file.id}>
          <FileDiv
            file={file}
            selectedFile={props.selectedFile}
            onClick={() => props.onSelect(file)}
            onAddFile={props.onAddFile}
            onAddFolder={props.onAddFolder}
            onDelete={() => props.onDelete(file)}
            onRename={(newName: string) => props.onRename(file, newName)}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

const FileDiv = ({
  file,
  icon,
  selectedFile,
  onClick,
  onDelete,
  onRename,
  onAddFile,
  onAddFolder,
}: {
  file: CustomFile | Directory
  icon?: string
  selectedFile: CustomFile | undefined
  onClick: () => void
  onDelete: () => void
  onRename: (newName: string) => void
  onAddFile: (parentDir: Directory) => void
  onAddFolder: (parentDir: Directory) => void
}) => {
  const isSelected = selectedFile && selectedFile.id === file.id
  const depth = file.depth
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState(file.name)

  const handleRename = () => {
    setIsEditing(false)
    onRename(newName)
  }

  return (
    <div
      onClick={onClick}
      style={{ paddingLeft: `${depth * 16}px` }}
      className={cn(
        "flex items-center hover:cursor-pointer hover:bg-[#242424]",
        isSelected ? "bg-[#242424]" : "bg-transparent"
      )}
    >
      <FileIcon
        name={icon}
        extension={file.name.split(".").pop() || ""}
      />
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onBlur={handleRename}
          className="bg-black text-white"
          onKeyDown={(e) => e.key === "Enter" && handleRename()}
          autoFocus
        />
      ) : (
        <span style={{ marginLeft: 1 }}>{file.name}</span>
      )}
      {file.type == 1 && (
        <div className="hidden group-hover:block">
          <button onClick={() => onAddFile(file as Directory)}>Add CustomFile</button>
          <button onClick={() => onAddFolder(file as Directory)}>Add Folder</button>
        </div>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation()
          setIsEditing(true)
        }}
      >
        Edit
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onDelete()
        }}
      >
        Delete
      </button>
    </div>
  )
}
const DirDiv: React.FC<SubTreeProps> = ({
  directory,
  selectedFile,
  onSelect,
  onAddFile,
  onAddFolder,
  onDelete,
  onRename,
}) => {
  let defaultOpen = false
  if (selectedFile) defaultOpen = isChildSelected(directory, selectedFile)
  const [open, setOpen] = useState(defaultOpen)

  return (
    <>
      <FileDiv
        file={directory}
        icon={open ? "openDirectory" : "closedDirectory"}
        selectedFile={selectedFile}
        onClick={() => setOpen(!open)}
        onDelete={() => onDelete(directory)}
        onRename={(newName: string) => onRename(directory, newName)}
        onAddFile={onAddFile}
        onAddFolder={onAddFolder}
      />
      {open ? (
        <div className="">
          <SubTree
            directory={directory}
            selectedFile={selectedFile}
            onSelect={onSelect}
            onAddFile={onAddFile}
            onAddFolder={onAddFolder}
            onDelete={onDelete}
            onRename={onRename}
          />
        </div>
      ) : null}
    </>
  )
}

const isChildSelected = (directory: Directory, selectedFile: CustomFile) => {
  let res: boolean = false

  function isChild(dir: Directory, file: CustomFile) {
    if (selectedFile.parentId === dir.id) {
      res = true
      return
    }
    if (selectedFile.parentId === "0") {
      res = false
      return
    }
    dir.dirs.forEach((item) => {
      isChild(item, file)
    })
  }

  isChild(directory, selectedFile)
  return res
}

const FileIcon = ({ extension, name }: { name?: string; extension?: string }) => {
  const icon = getIcon(extension || "", name || "")
  return <span className="flex aspect-square w-[32px] items-center justify-center">{icon}</span>
}

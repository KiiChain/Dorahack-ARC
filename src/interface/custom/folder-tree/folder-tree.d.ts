interface CommonProps {
  id: string
  type: "directory" | "file"
  name: string
  parentId: string | undefined
  depth: number
}

export interface File extends CommonProps {
  content: string
}

export interface Directory extends CommonProps {
  files: File[]
  dirs: Directory[]
}

interface CoreUtilsProps {
  selectedFile: File | undefined
  onSelect: (file: File) => void
  onAddFile: (parentDir: Directory) => void
  onAddFolder: (parentDir: Directory) => void
  onDelete: (fileOrDir: File | Directory) => void
  onRename: (fileOrDir: File | Directory, newName: string) => void
}
interface FileTreeProps extends CoreUtilsProps {
  rootDir: Directory
}

interface SubTreeProps extends CoreUtilsProps {
  directory: Directory
}
// interface FIleManageProps {

// }

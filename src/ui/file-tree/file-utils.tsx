import { Directory, File } from "@/interface/custom/folder-tree/folder-tree"

export enum Type {
  FILE,
  DIRECTORY,
  DUMMY,
}

// /**
//  *
//  * @param rootDir
//  * @param curDepth
//  */
// function getDepth(rootDir: Directory, curDepth: number) {
//   rootDir.files.forEach((file) => {
//     file.depth = curDepth + 1;
//   });
//   rootDir.dirs.forEach((dir) => {
//     dir.depth = curDepth + 1;
//     getDepth(dir, curDepth + 1);
//   });
// }

export function findFileByName(rootDir: Directory, filename: string): File | undefined {
  let targetFile: File | undefined = undefined

  function findFile(rootDir: Directory, filename: string) {
    rootDir.files.forEach((file) => {
      if (file.name === filename) {
        targetFile = file
        return
      }
    })
    rootDir.dirs.forEach((dir) => {
      findFile(dir, filename)
    })
  }

  findFile(rootDir, filename)
  return targetFile
}

export function sortDir(l: Directory, r: Directory) {
  return l.name.localeCompare(r.name)
}

export function sortFile(l: File, r: File) {
  return l.name.localeCompare(r.name)
}

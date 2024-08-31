import { Directory } from "@/interface/folder-tree/folder-tree"

export const init: Directory = {
  id: "0",
  name: "root",
  type: 1,
  depth: 0,
  dirs: [
    {
      id: "H1rMWpafrq",
      name: "public",
      parentId: "0",
      type: 1,
      depth: 1,
      dirs: [],
      files: [
        { id: "HkfgzTpfS9", name: "index.html", parentId: "H1rMWpafrq", type: 0, depth: 2, content: "vsfsdf\n" },
        {
          id: "HJNeGb6pfHq",
          name: "robots.txt",
          parentId: "H1rMWpafrq",
          type: 0,
          depth: 2,
          content: `# https://www.robotstxt.org/robotstxt.html\nUser-agent: *\nDisallow:\n`,
        },
      ],
    },
  ],
  files: [],
  parentId: "0",
}

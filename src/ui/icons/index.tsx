import React, { ReactNode } from "react"

import { AiFillFileText } from "react-icons/ai"
import { FaMarkdown } from "react-icons/fa"
import { FcFile, FcPicture } from "react-icons/fc"
import { MdDeleteOutline, MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"
import { SiCss3, SiHtml5, SiJavascript, SiJson, SiTypescript } from "react-icons/si"
import { SiSolidity } from "react-icons/si"
import { VscNewFile, VscNewFolder } from "react-icons/vsc"
import { VscEdit } from "react-icons/vsc"
export type ExtensionTypes =
  | "js"
  | "jsx"
  | "ts"
  | "tsx"
  | "css"
  | "json"
  | "html"
  | "png"
  | "jpg"
  | "ico"
  | "txt"
  | "closedDirectory"
  | "openDirectory"
  | "newFile"
  | "newFolder"
  | "delete"
  | "edit"
  | "sol"
function getIconHelper() {
  const cache = new Map<string, ReactNode>()
  cache.set("js", <SiJavascript color="#fbcb38" />)
  cache.set("jsx", <SiJavascript color="#fbcb38" />)
  cache.set("ts", <SiTypescript color="#378baa" />)
  cache.set("tsx", <SiTypescript color="#378baa" />)
  cache.set("css", <SiCss3 color="purple" />)
  cache.set("json", <SiJson color="#5656e6" />)
  cache.set("html", <SiHtml5 color="#e04e2c" />)
  cache.set("png", <FcPicture />)
  cache.set("jpg", <FcPicture />)
  cache.set("ico", <FcPicture />)
  cache.set("txt", <AiFillFileText color="white " />)
  cache.set("closedDirectory", <MdKeyboardArrowRight />)
  cache.set("openDirectory", <MdKeyboardArrowDown />)
  cache.set("newFile", <VscNewFile />)
  cache.set("newFolder", <VscNewFolder />)
  cache.set("delete", <MdDeleteOutline />)
  cache.set("edit", <VscEdit />)
  cache.set("sol", <SiSolidity />)
  cache.set("md", <FaMarkdown />)

  const func = (name: string, extension?: ExtensionTypes): ReactNode => {
    console.log("nem ", name)
    console.log("ext ", extension)

    if (extension) {
      if (cache.has(extension)) return cache.get(extension)
      else if (cache.has(name.split(".")[1])) return cache.get(name.split(".")[1])
      // else return <FcFile />
    }
    if (cache.has(name)) return cache.get(name)
    else if (cache.has(name.split(".")[1])) return cache.get(name.split(".")[1])

    return <FcFile />
  }
  return func
}

export const getIcon = getIconHelper()

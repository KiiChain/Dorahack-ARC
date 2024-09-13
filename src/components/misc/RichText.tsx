import React from "react"

import clsx from "clsx"

interface RichTextProps {
  content: IRichText
  overrideClass?: string
}

const tailwindClasses: Record<string, string> = {
  h1: "text-4xl font-bold my-4",
  h2: "text-3xl font-semibold my-3",
  h3: "text-2xl font-medium my-2",
  p: "my-4",
  ul: "list-disc pl-6 my-4",
  li: "my-2",
}

const RichText: React.FC<RichTextProps> = ({ content, overrideClass }) => {
  const Tag = content.tag as keyof JSX.IntrinsicElements
  const tailwindClass = clsx(overrideClass ? overrideClass : tailwindClasses[content.tag] || "", content.className)
  const combinedStyle = { ...content.style } as React.CSSProperties

  if (Tag === "ul") {
    return (
      <ul
        className={tailwindClass}
        style={combinedStyle}
      >
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </ul>
    )
  } else if (Tag === "li") {
    return (
      <li
        className={tailwindClass}
        style={combinedStyle}
      >
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </li>
    )
  } else {
    return (
      <Tag
        className={tailwindClass}
        style={combinedStyle}
      >
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </Tag>
    )
  }
}

export default RichText

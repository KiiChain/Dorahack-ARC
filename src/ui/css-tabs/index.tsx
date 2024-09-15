import React from "react"
import { CSSProperties, FocusEvent, PointerEvent, useEffect, useRef, useState } from "react"

import classNames from "classnames"

import { Button } from "../button"

type Tab = { label: string; id: string }

type Props = {
  selectedTabIndex: number
  tabs: (Tab | React.ReactNode)[]
  setSelectedTab: (input: number) => void
}

export const CSSTabs = ({ tabs, selectedTabIndex, setSelectedTab }: Props): JSX.Element => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>([])

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length))
  }, [tabs.length])

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null)

  const navRef = useRef<HTMLDivElement>(null)
  const navRect = navRef.current?.getBoundingClientRect()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect()

  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true)
  const isInitialRender = useRef(true)

  const onLeaveTabs = () => {
    setIsInitialHoveredElement(true)
    setHoveredTabIndex(null)
  }

  const onEnterTab = (e: PointerEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>, i: number) => {
    if (!e.target || !(e.target instanceof HTMLButtonElement)) return

    setHoveredTabIndex((prev) => {
      if (prev != null && prev !== i) {
        setIsInitialHoveredElement(false)
      }

      return i
    })
    setHoveredRect(e.target.getBoundingClientRect())
  }

  const onSelectTab = (i: number) => {
    setSelectedTab(i)
  }

  const hoverStyles: CSSProperties = { opacity: 0 }
  if (navRect && hoveredRect) {
    hoverStyles.transform = `translate3d(${hoveredRect.left - navRect.left}px,${hoveredRect.top - navRect.top}px,0px)`
    hoverStyles.width = hoveredRect.width
    hoverStyles.height = hoveredRect.height
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0
    hoverStyles.transition = isInitialHoveredElement
      ? `opacity 150ms`
      : `transform 150ms 0ms, opacity 150ms 0ms, width 150ms`
  }

  const selectStyles: CSSProperties = { opacity: 0 }
  if (navRect && selectedRect) {
    selectStyles.width = selectedRect.width * 0.8
    selectStyles.transform = `translateX(calc(${selectedRect.left - navRect.left}px + 10%))`
    selectStyles.opacity = 1
    selectStyles.transition = isInitialRender.current
      ? `opacity 150ms 150ms`
      : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`

    isInitialRender.current = false
  }

  return (
    <nav
      ref={navRef}
      className="no-scrollbar relative z-0 col-span-12 row-span-1 flex flex-shrink-0 items-center justify-center overflow-x-scroll rounded-lg bg-[#1e1e1e] py-2 md:gap-14 lg:gap-20"
      onPointerLeave={onLeaveTabs}
    >
      {tabs.map((item, i) => {
        if (!React.isValidElement(item)) {
          return (
            <Button
              key={i}
              className={classNames(
                "text-md relative z-20 flex h-8 cursor-pointer select-none items-center rounded-md bg-[#1c1c1c] px-4 text-sm font-bold transition-colors hover:text-black"
              )}
              // className=" hover:text-black"
              // variant="outline"

              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              ref={(el) => {
                buttonRefs[i] = el
              }}
              onPointerEnter={(e) => onEnterTab(e, i)}
              onFocus={(e) => onEnterTab(e, i)}
              onClick={() => onSelectTab(i)}
            >
              {(item as Tab).label}
            </Button>
          )
        } else {
          return item
        }
      })}
      <div
        className="absolute left-0 top-0 z-10 rounded-md bg-[#1e1e1e] transition-[width]"
        style={hoverStyles}
      />
      <div
        className={"absolute bottom-0 left-0 z-10 h-0.5 bg-[#1e1e1e]"}
        style={selectStyles}
      />
    </nav>
  )
}

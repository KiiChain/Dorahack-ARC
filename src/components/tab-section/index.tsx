"use client"
import React, { useEffect, useRef, useState } from "react"

import clsx from "clsx"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { FaArrowAltCircleRight } from "react-icons/fa"

// import Button from "../common/Button";
// import { useRouter } from "next/navigation"
import a from "./tab.module.css"

export default function TabButtons({
  tabNames,
  setActiveTab,
  activeTab,
  className,
  seperator = true,
  tabColors,
  activeTabColor,
}: {
  tabNames: Array<string | React.JSX.Element>
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>
  activeTab?: string
  className?: string
  seperator?: boolean
  tabColors?: string
  activeTabColor?: string
}) {
  const scrollref = useRef<HTMLUListElement>(null)
  const [scrollX, setscrollX] = useState<number>(0)
  const [scrolEnd, setscrolEnd] = useState<boolean>(false)
  //Slide click
  const slide = (shift: ITemporaryVariable) => {
    if (scrollref.current) {
      scrollref.current.scrollLeft += shift

      setscrollX(scrollX + shift)
      if (Math.floor(scrollref.current.scrollWidth - scrollref.current.scrollLeft) <= scrollref.current.offsetWidth) {
        setscrolEnd(true)
      } else {
        setscrolEnd(false)
      }
    }
  }

  const scrollCheck = () => {
    if (scrollref.current) {
      setscrollX(scrollref.current.scrollLeft)
      if (Math.floor(scrollref.current.scrollWidth - scrollref.current.scrollLeft) <= scrollref.current.offsetWidth) {
        setscrolEnd(true)
      } else {
        setscrolEnd(false)
      }
    }
  }
  useEffect(() => {
    scrollCheck()
  }, [])
  return (
    <>
      <div className={clsx("md:gap-15 flex w-full flex-row whitespace-nowrap text-xs sm:text-sm lg:gap-20", className)}>
        {scrollX !== 0 && (
          <button
            className={a.button}
            onClick={() => slide(-50)}
          >
            <FaArrowAltCircleLeft />
          </button>
        )}
        <ul
          ref={scrollref}
          onScroll={scrollCheck}
          className={clsx(a.App, "no-scrollbar")}
        >
          {tabNames?.map((tabName, index) => {
            const isString = typeof tabName === "string"
            // const isNode = React.isValidElement(tabName);
            if (isString) {
              return (
                <>
                  <li
                    onClick={() => {
                      if (setActiveTab) setActiveTab(tabName)
                    }}
                    // variant={router.pathname.endsWith("/jobs") ? "secondary" : "text"}
                    // className={clsx(
                    //   "px-[12px] sm:px-[25px] py-[10px] rounded-xl m-5",
                    //   activeTab === tabName && "bg-secondary"
                    // )}
                    className={clsx(
                      a.li,
                      tabColors,
                      "bg-user_interface_3",
                      activeTabColor && activeTab && activeTab === tabName && "!bg-secondary",
                      !activeTabColor && activeTab && activeTab === tabName && "rounded-lg !bg-secondary"
                    )}
                  >
                    {tabName}
                  </li>
                  {seperator && index === 1 && <span className="mx-5 my-auto h-[2rem] w-[2px] bg-secondary"></span>}
                </>
              )
            } else {
              return tabName
            }
          })}
        </ul>

        {!scrolEnd && (
          <button
            className={a.button}
            onClick={() => slide(50)}
          >
            <FaArrowAltCircleRight />
          </button>
        )}
      </div>
    </>
  )
}

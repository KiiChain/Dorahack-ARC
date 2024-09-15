"use client"

import { useEffect } from "react"

import { motion, stagger, useAnimate, useInView } from "framer-motion"

import { cn } from "@/lib/utils"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    }
  })

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      )
    }
  }, [isInView])

  const renderWords = () => {
    return (
      <motion.div
        ref={scope}
        className="inline"
      >
        {wordsArray.map((word, idx) => {
          return (
            <div
              key={`word-${idx}`}
              className="inline-block"
            >
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`hidden text-black opacity-0 dark:text-white`, word.className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </motion.div>
    )
  }
  return (
    <div className={cn("text-center text-xl italic", className)}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          // repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("inline-block h-4 w-[4px] rounded-sm bg-blue-500", cursorClassName)}
      ></motion.span>
    </div>
  )
}

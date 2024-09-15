"use client"

import React, { useState } from "react"

import clsx from "clsx"
import { motion } from "framer-motion"

interface TabsProps {
  tabs: {
    identifier: StringOrNumber
    name: string
    content: React.ReactNode
    meta?: string
  }[]
  defaultActiveTab?: StringOrNumber

  // Styling
  className?: string
  headerClassName?: string
  tabButtonClassName?: string
  activeTabButtonClassName?: string
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  className,
  headerClassName,
  tabButtonClassName,
  activeTabButtonClassName,
}) => {
  const [activeTab, setActiveTab] = useState<StringOrNumber>(defaultActiveTab ?? tabs[0].identifier)

  const handleTabClick = (identifier: StringOrNumber) => {
    setActiveTab(identifier)
  }

  return (
    <div className={clsx("w-full", className)}>
      {/* Tab Headers */}
      <div className={clsx("flex", headerClassName)}>
        {tabs.map((tab) => (
          <button
            key={tab.identifier}
            onClick={() => handleTabClick(tab.identifier)}
            className={clsx(
              `px-4 py-2 focus:outline-none`,
              tabButtonClassName,
              activeTab === tab.identifier && activeTabButtonClassName
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">
        {tabs.map(
          (tab) =>
            activeTab === tab.identifier && (
              <motion.div
                key={tab.identifier}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  )
}

export default Tabs

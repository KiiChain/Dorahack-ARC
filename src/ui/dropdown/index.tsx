"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
//import { FaChevronDown as ChevronDownIcon } from "react-icons/fa"
import { IconType } from "react-icons/lib"

interface DropdownItem {
  heading: string
  subheading: string
  icon?: IconType // Type for React icons
  onClick: () => void
}

interface DropdownProps {
  menuLabel: string
  menuItems: DropdownItem[]
}

// Generalized Dropdown Component with Heading, Subheading, and Icon in TypeScript
export default function Dropdown({ menuLabel, menuItems }: DropdownProps) {
  return (
    <div className="text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent px-3 py-1.5 text-sm/6 font-semibold text-white focus:outline-none">
          {menuLabel}
        </MenuButton>

        <MenuItems
          transition
          className="absolute w-80 origin-top-right rounded-lg border border-white/5 p-1 text-sm/6 text-white shadow-lg focus:outline-none"
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <button
                className="group flex w-full flex-wrap items-center rounded-lg px-3 py-2"
                onClick={item.onClick}
              >
                {item.icon && <item.icon className="h-6 w-6 text-white" />}
                <div className="overflow-wrap flex w-[85%] flex-col">
                  <div className="font-semibold text-white">{item.heading}</div>
                  <div className="text-wrap text-xs text-gray-400">{item.subheading}</div>
                </div>
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  )
}

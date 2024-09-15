// import Image from 'next/image';
import React from "react"

// import Logo from "@/app/assets/Logo.jpeg"
interface NavbarLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText: string
  links: NavbarLink[]
  bgColor?: string
  textColor?: string
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    // <nav className={`absolute top-0 z-10 w-full bg-transparent text-white`}>
    //   <div className="mx-auto w-11/12 px-4">
    //     <div className="flex h-16 items-center justify-between">
    //       {/* <Image
    //           priority
    //           width={1000}
    //           height={1000}
    //           src={Logo}
    //           alt={"Predictify AI"}
    //           quality={1}
    //           className={clsx("w-32 h-12 rounded-lg  object-cover object-top")}
    //         /> */}
    //       <span className={clsx("h-12 w-32 rounded-lg object-cover object-top")}>Logo</span>
    //       <div className={`flex space-x-4 ${textColor}`}>
    //         {links.map((link, index) => (
    //           <Link
    //             key={index}
    //             href={link.href}
    //           >
    //             {link.label}
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <></>
  )
}

export default Navbar

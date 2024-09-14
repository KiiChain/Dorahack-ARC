import { Button } from "@/ui/button"
import Image from "next/image"
import Link from "next/link"

type BlogContent = {
  image: string
  title: string
  description: string
  date: string
}
export const FollowerPointerCard = ({ blogContent }: { blogContent: BlogContent; className?: string }) => {
  return (
    <div className="group relative h-full w-72 overflow-hidden rounded-2xl bg-primary text-white transition duration-200 border-[0.1px] border-gray-600 backdrop-blur-3xl mx-auto">
      <div className="xl:aspect-w-16 xl:aspect-h-10 relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-primary">
        <Image
          src={blogContent.image}
          alt="thumbnail"
          height={2000}
          width={2000}
          className={`h-56 w-full transform object-cover transition duration-200 scale-95 rounded-2xl`}
        />
      </div>
      <div className="p-4">
        <h2 className="my-4 text-lg font-bold line-clamp-2">{blogContent.title}</h2>
        <h2 className="my-4 text-sm font-normal line-clamp-4">{blogContent.description}</h2>
        <div className="mt-10 flex flex-row items-center justify-between">
          <span className="text-sm">{blogContent.date}</span>
          <Link href={"/blog"} className="shadow-[0_0_0_3px_#000000_inset] px-2 py-1 bg-black border border-black dark:border-white dark:text-white text-black rounded-lg  transform  transition duration-400" >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

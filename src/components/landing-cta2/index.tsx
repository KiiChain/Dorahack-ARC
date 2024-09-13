import { Button } from "@/ui/button"
import Image from "next/image"

type BlogContent = {
  image: string
  title: string
  description: string
  date: string
}
export const FollowerPointerCard = ({ blogContent }: { blogContent: BlogContent; className?: string }) => {
  return (
    <div className="group relative h-full w-72 overflow-hidden rounded-2xl bg-primary text-white transition duration-200 border-[0.1px] border-gray-600 mx-auto">
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
        <h2 className="my-4 text-lg font-bold ">{blogContent.title}</h2>
        <h2 className="my-4 text-sm font-normal line-clamp-4">{blogContent.description}</h2>
        <div className="mt-10 flex flex-row items-center justify-between">
          <span className="text-sm">{blogContent.date}</span>
          <Button variant="outline" >
            Read More
          </Button>
        </div>
      </div>
    </div>
  )
}

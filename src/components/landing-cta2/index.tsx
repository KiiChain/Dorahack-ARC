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
    <div className="group relative mx-auto h-full w-72 overflow-hidden rounded-2xl border-[0.1px] border-gray-600 bg-primary text-white backdrop-blur-3xl transition duration-200">
      <div className="xl:aspect-w-16 xl:aspect-h-10 relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-primary">
        <Image
          src={blogContent.image}
          alt="thumbnail"
          height={2000}
          width={2000}
          className={`h-56 w-full scale-95 transform rounded-2xl object-cover transition duration-200`}
        />
      </div>
      <div className="p-4">
        <h2 className="my-4 line-clamp-2 text-lg font-bold">{blogContent.title}</h2>
        <h2 className="my-4 line-clamp-4 text-sm font-normal">{blogContent.description}</h2>
        <div className="mt-10 flex flex-row items-center justify-between">
          <span className="text-sm">{blogContent.date}</span>
          <Link
            href={"/blog"}
            className="duration-400 transform rounded-lg border border-black bg-black px-2 py-1 text-black shadow-[0_0_0_3px_#000000_inset] transition dark:border-white dark:text-white"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

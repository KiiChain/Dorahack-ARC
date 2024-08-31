import Image from "next/image"

type BlogContent = {
  image: string
  title: string
  description: string
  date: string
}
export const FollowerPointerCard = ({ blogContent }: { blogContent: BlogContent; className?: string }) => {
  return (
    <div>
      <div className="group relative h-full w-80 overflow-hidden rounded-2xl bg-primary text-white transition duration-200">
        <div className="xl:aspect-w-16 xl:aspect-h-10 relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-primary">
          <Image
            src={blogContent.image}
            alt="thumbnail"
            height={2000}
            width={2000}
            className={`h-56 w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl`}
          />
        </div>
        <div className="p-4">
          <h2 className="my-4 text-lg font-bold">{blogContent.title}</h2>
          <h2 className="my-4 text-sm font-normal">{blogContent.description}</h2>
          <div className="mt-10 flex flex-row items-center justify-between">
            <span className="text-sm">{blogContent.date}</span>
            <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

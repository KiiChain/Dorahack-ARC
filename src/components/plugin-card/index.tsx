import React from "react"

// Define the prop types for the component
type MeteorsCardProps = {
  title: string
  description: string
  logo: React.ReactNode
  meteorsCount?: number
  gradientFrom?: string
  gradientTo?: string
  onExploreClick?: () => void
}

export const PluginCard: React.FC<MeteorsCardProps> = ({
  title,
  description,
  logo,
  //   gradientFrom = "from-blue-500",
  //   gradientTo = "to-teal-500",
  onExploreClick,
}) => {
  return (
    <div className="relative w-full min-w-[24rem]">
      <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">{logo}</div>

        <h1 className="relative z-50 mb-4 text-xl font-bold text-white">{title}</h1>

        <div className="relative z-50 mb-4 text-base font-normal text-slate-500">{description}</div>

        <button
          className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300"
          onClick={onExploreClick}
        >
          Explore
        </button>

        {/* <Meteors number={meteorsCount} /> */}
      </div>
    </div>
  )
}

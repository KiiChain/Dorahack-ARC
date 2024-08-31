"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

const CTA3 = ({ items }: CarouselProps) => {
  return (
    <div className="relative w-full">
      <div className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20">
        <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

        <div
          className={cn(
            "flex flex-row justify-start gap-20 px-6",
            "mx-auto max-w-7xl" // remove max-w-4xl if you want the carousel to span the full width of its container
          )}
        >
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CTA3
// export const Card = ({
//   card,
//   index,
//   layout = false,
// }: {
//   card: Card;
//   index: number;
//   layout?: boolean;
// }) => {
//   const [open, setOpen] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <>

//       <motion.div
//         layoutId={layout ? `card-${card.title}` : undefined}
//         onClick={handleOpen}
//         className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
//       >
//         <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
//         <div className="relative z-40 p-8">
//           <motion.p
//             layoutId={layout ? `category-${card.category}` : undefined}
//             className="text-white text-sm md:text-base font-medium font-sans text-left"
//           >
//             {card.category}
//           </motion.p>
//           <motion.p
//             layoutId={layout ? `title-${card.title}` : undefined}
//             className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
//           >
//             {card.title}
//           </motion.p>
//         </div>
//         <BlurImage
//           src={card.src}
//           alt={card.title}
//           fill
//           className="object-cover absolute z-10 inset-0"
//         />
//       </motion.button>
//     </>
//   );
// };

// export const BlurImage = ({
//   height,
//   width,
//   src,
//   className,
//   alt,
//   ...rest
// }: ImageProps) => {
//   const [isLoading, setLoading] = useState(true);
//   return (
//     <Image
//       className={cn(
//         "transition duration-300",
//         isLoading ? "blur-sm" : "blur-0",
//         className
//       )}
//       onLoad={() => setLoading(false)}
//       src={src}
//       width={width}
//       height={height}
//       loading="lazy"
//       decoding="async"
//       blurDataURL={typeof src === "string" ? src : undefined}
//       alt={alt ? alt : "Background of a beautiful view"}
//       {...rest}
//     />
//   );
// };

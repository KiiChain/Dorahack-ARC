"use client"

import { motion } from "framer-motion"
import Slider from "react-slick";
import { cn } from "@/lib/utils"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}
      // <div className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20">
       

      //   <div
      //     className={cn(
      //       "flex flex-row justify-start gap-10 px-1",
      //       "mx-auto max-w-7xl" // remove max-w-4xl if you want the carousel to span the full width of its container
      //     )}
      //   >
      //      </div>
      //      </div>
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: "center",
        // centerMode: true,
        // fade: true,
        // waitForAnimate: false,
        autoplay: true,
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              className: "center",
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
const CTA3 = ({ items }: CarouselProps) => {
  return (
    <div className="slider-container">
      <Slider accessibility {...settings}>
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
              className="rounded-3xl " 
            >
              {item}
            </motion.div>
          ))}
       </Slider>
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

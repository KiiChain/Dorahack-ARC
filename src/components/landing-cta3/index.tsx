"use client"

import { motion } from "framer-motion"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
const CTA3 = ({ items }: CarouselProps) => {
  return (
    <div className="slider-container">
      <Slider
        accessibility
        {...settings}
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
      </Slider>
    </div>
  )
}
export default CTA3

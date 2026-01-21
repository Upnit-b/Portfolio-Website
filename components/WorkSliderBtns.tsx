"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

export default function WorkSliderBtns() {
  const swiper = useSwiper()

  return (
    <div className="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] lg:bottom-0 z-20
      w-full justify-between lg:w-max lg:justify-none"
    >
      <button className="bg-primary rounded-full cursor-pointer hover:bg-black hover:text-white text-black text-[22px]
        w-11 h-11 flex justify-center items-center transition-all"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className=""/>
      </button>
      <button className="bg-primary rounded-full cursor-pointer hover:bg-black hover:text-white text-black text-[22px]
        w-11 h-11 flex justify-center items-center transition-all"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className=""/>
      </button>
    </div>
  )
}
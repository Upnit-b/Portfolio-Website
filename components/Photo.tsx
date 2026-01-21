"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity:0}}
      animate={{
        opacity: 1,
        transition: {delay:1, duration: 0.2, ease: "easeInOut"}
      }}>
        {/* image */}
        <motion.div
          initial={{opacity:0}}
          animate={{
          opacity: 1,
          transition: {delay:1.2, duration: 0.2, ease: "easeInOut"}
          }}
        className="w-75 h-75 lg:w-115 lg:h-115 mix-blend-difference absolute">
          <Image src="/my-image.png" priority quality={100} fill alt="Upnit Image" className="object-contain" />
        </motion.div>

        {/* circle */}
        <motion.svg className="w-75 lg:w-126.5 h-75 lg:h-126.5" fill="transparent"
          viewBox="0 0 495 495"
          xmlns="http://www.w3.org/2000/svg">
          <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0 "}}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            />
        </motion.svg>
      </motion.div>
    </div>
  )
}
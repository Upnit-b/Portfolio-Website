"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

// projects
const projects = [
  {
    num: "01",
    category: "full-stack",
    title: "Publishing Platform",
    description: "A production-grade publishing platform built with Next.js and Node.js, featuring a Medium-style editor, SEO-optimized content delivery, secure payments, and a Dockerized AWS deployment.",
    stack: [{name: "Next.js"}, {name: "Tailwind.css"}, {name: "Node.js"}, {name: "Express.js"},],
    image: "/thumb1.jpg",
    live: "https://editor.swagger.io",
    github: "https://github.com/Upnit-b/Publishing-Platform-Architecture"
  },
  {
    num: "02",
    category: "backend",
    title: "Micro-services",
    description: "A scalable, event-driven microservices backend for a social media platform built with Node.js microservices architecture, featuring real-time communication between services, media handling using multer and cloudinary, and advanced search capabilities.",
    stack: [{name: "Node.js"}, {name: "Express.js"}, {name: "Redis"}, {name: "RabbitMQ"},],
    image: "/thumb2.jpg",
    live: "",
    github: "https://github.com/Upnit-b/MicroServices-Backend"
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ab, accusamus ratione aliquam ex fugiat?",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"},],
    image: "/thumb3.jpg",
    live: "",
    github: ""
  },
]



export default function work() {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper : SwiperType) => {
    //get current slide index
    const currentIndex = swiper.activeIndex

    //update project state based on current slide index
    setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {
      delay: 1.2, duration: 0.2, ease: "easeIn"
    }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
    >
      <div className="container mx-auto p-2">
        <div className="flex flex-col lg:flex-row lg:gap-7.5">
          <div className="w-full lg:w-[50%] lg:h-115 flex flex-col lg:justify-between order-2 lg:order-0">
            <div className="flex flex-col gap-7.5 h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project title */}
              <h4 className="text-[42px] font-bold leading-none text-white group-hover:text-primary transition-all duration-500 capitalize">
                {project.title}
              </h4>

              {/* project category */}
              <h4 className="text-[20px] font-bold leading-none text-white group-hover:text-primary transition-all duration-500 capitalize">
                {project.category} project
              </h4>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4 mt-3">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-primary">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5
                        flex justify-center items-center group cursor-pointer"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-primary"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5
                        flex justify-center items-center group cursor-pointer"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-primary"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>
          </div>
          {/* slider */}
          <div className="w-full lg:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="lg:h-130 mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-115 relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                      </div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt={project.title}/>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
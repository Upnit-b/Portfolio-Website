"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const service = [
  {
    num: '01',
    title: "Web Development",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod ipsa soluta hic facere tempore totam ea.',
    href: ''
  },
  {
    num: '02',
    title: "UI/UX Design",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod ipsa soluta hic facere tempore totam ea.',
    href: ''
  },
  {
    num: '03',
    title: "Logo Design",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod ipsa soluta hic facere tempore totam ea.',
    href: ''
  },
  {
    num: '04',
    title: "SEO",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod ipsa soluta hic facere tempore totam ea.',
    href: ''
  },
]


export default function services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 md:py-2">
      <div className="container mx-auto p-2">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {
          delay: 2.4, duration: 0.2, ease: "easeInOut"}}}
          className="grid grid-cols-1 md:grid-cols-2 gap-15"
          >

            {service.map((serv, index) => {
              return (
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent
                      group-hover:text-primary group-hover:text-outline-hover transition-all duration-500"
                    >
                      {serv.num}
                    </div>
                    <Link href={serv.href} className="w-17.5 h-17.5 rounded-full bg-white group-hover:bg-primary
                      transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-black text-3xl"/>
                    </Link>
                  </div>

                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none text-white
                    group-hover:text-primary transition-all duration-500">
                    {serv.title}
                  </h2>

                  {/* description */}
                  <p className="text-white/60">{serv.description}</p>

                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              )
            })}

        </motion.div>
      </div>
    </section>
  )
}
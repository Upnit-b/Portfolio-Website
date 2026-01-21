"use client"

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "+1 437 575 6233"
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "upnit.singh@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: "Address",
    description: "Toronto, Ontario, Canada"
  },
]

export default function contact() {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {
      delay: 1.2, duration: 0.2, ease: "easeIn"
     }}}
      className="py-6"
    >
      <div className="container mx-auto p-2">
        <div className="flex flex-col lg:flex-row gap-7.5">
          {/* form */}
          <div className="lg:w-[54%] order-2 lg:order-0">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-primary">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit modi delectus architecto cupiditate temporibus.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" className="flex h-12 rounded-md border border-white/10
                  focus:border-[#00ff99] font-light bg-black/60 px-4 py-5 text-base placeholder:text-white/60
                  outline-none"
                />
                <Input type="text" placeholder="Last Name" className="flex h-12 rounded-md border border-white/10
                  focus:border-[#00ff99] font-light bg-black/60 px-4 py-5 text-base placeholder:text-white/60
                  outline-none"/>
                <Input type="email" placeholder="Email address" className="flex h-12 rounded-md border border-white/10
                  focus:border-[#00ff99] font-light bg-black/60 px-4 py-5 text-base placeholder:text-white/60
                  outline-none"/>
                <Input type="phone" placeholder="Phone number" className="flex h-12 rounded-md border border-white/10
                  focus:border-[#00ff99] font-light bg-black/60 px-4 py-5 text-base placeholder:text-white/60
                  outline-none"/>
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="flex h-12 w-full rounded-md border border-white/10
                  focus:border-[#00ff99] font-light bg-black/60 px-4 py-5 text-base placeholder:text-white/60
                  outline-none cursor-pointer"
                >
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est" className="cursor-pointer focus:bg-[#00ff99]">Web Development</SelectItem>
                    <SelectItem value="cst" className="cursor-pointer focus:bg-[#00ff99]">UI/UX Design</SelectItem>
                    <SelectItem value="mst" className="cursor-pointer focus:bg-[#00ff99]">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area */}
              <Textarea className="h-50 flex rounded-md border border-white/10
                focus:border-[#00ff99] font-light bg-black/60 px-4 py-5 text-base placeholder:text-white/60
                outline-none" placeholder="Type your message here"
              />
              {/* btn */}
              <Button size="lg" className="max-w-40 rounded-2xl">Send message</Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-0 mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-13 h-13 lg:w-18 lg:h-18 bg-[#27272c] text-primary
                      rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
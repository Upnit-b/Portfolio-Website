"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// about data
const about = {
  title: "About me",
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem culpa nam vitae dolorem saepe cum, at molestiae.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Upnit Banga",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 437-575-6233",
    },
    {
      fieldName: "Email",
      fieldValue: "upnit.singh@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Canadian",
    },
    {
      fieldName: "Availability",
      fieldValue: "Immediate",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi",
    },
  ]
}

// experience data
const experience = {
  icon: "/file.svg",
  title: "My experience",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem culpa nam vitae dolorem saepe cum, at molestiae.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer",
      duration: "Summer 2021",
    },
    {
      company: "E-Commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ]
}

// education data
const education = {
  icon: "/file.svg",
  title: "My education",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem culpa nam vitae dolorem saepe cum, at molestiae.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codeacademy",
      degree: "Front-End Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
  ]
}

//skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem culpa nam vitae dolorem saepe cum, at molestiae.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <FaFigma/>,
      name: "figma",
    },
  ]
}


export default function resume() {
  return (
    <motion.div initial={{opacity: 1}} animate={{opacity: 1, transition: {
      delay: 1.2,
      duration: 0.2,
      ease: "easeIn"
    }}}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto p-2">
        <Tabs defaultValue="experience" className="flex flex-col lg:flex-row lg:items-start gap-15">
          <TabsList className="h-auto flex flex-col w-full max-w-95 bg-transparent mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience" className="w-full cursor-pointer justify-center
              bg-[#27272c] whitespace-nowrap lg:max-h-10  p-2 text-sm font-medium text-balance text-white
              rounded-lg ring-offset-white disabled:pointer-events-none disabled:opacity-50
              transition-all hover:bg-primary hover:text-black data-[state=active]:bg-primary
              data-[state=active]:text-black data-[state=active]:font-bold
              data-[state=active]:border-white data-[state=active]:rounded-md
              data-[state=active]:border data-[state=active]:shadow-md">
                Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="w-full cursor-pointer justify-center
              bg-[#27272c] whitespace-nowrap lg:max-h-10  p-2 text-sm font-medium text-balance text-white
              rounded-lg ring-offset-white disabled:pointer-events-none disabled:opacity-50
              transition-all hover:bg-primary hover:text-black data-[state=active]:bg-primary
              data-[state=active]:text-black data-[state=active]:font-bold
              data-[state=active]:border-white data-[state=active]:rounded-md
              data-[state=active]:border data-[state=active]:shadow-md">
                Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="w-full cursor-pointer justify-center
              bg-[#27272c] whitespace-nowrap lg:max-h-10  p-2 text-sm font-medium text-balance text-white
              rounded-lg ring-offset-white disabled:pointer-events-none disabled:opacity-50
              transition-all hover:bg-primary hover:text-black data-[state=active]:bg-primary
              data-[state=active]:text-black data-[state=active]:font-bold
              data-[state=active]:border-white data-[state=active]:rounded-md
              data-[state=active]:border data-[state=active]:shadow-md">
                Skills
            </TabsTrigger>
            <TabsTrigger value="about" className="w-full cursor-pointer justify-center
              bg-[#27272c] whitespace-nowrap lg:max-h-10 p-2 text-sm font-medium text-balance text-white
              rounded-lg ring-offset-white disabled:pointer-events-none disabled:opacity-50
              transition-all hover:bg-primary hover:text-black data-[state=active]:bg-primary
              data-[state=active]:text-black data-[state=active]:font-bold
              data-[state=active]:border-white data-[state=active]:rounded-md
              data-[state=active]:border data-[state=active]:shadow-md">
                About me
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full min-h-120">
              <div className="flex flex-col gap-7.5 text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-full text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-100">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-46 py-6 px-10 rounded-xl
                          flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-primary">{item.duration}</span>
                          <h3 className="text-xl max-w-65 min-h-15 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-1.5 h-1.5 rounded-full bg-primary "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full min-h-120">
              <div className="flex flex-col gap-7.5 text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-full text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-100">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-46 py-6 px-10 rounded-xl
                          flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-primary">{item.duration}</span>
                          <h3 className="text-xl max-w-65 min-h-15 text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-1.5 h-1.5 rounded-full bg-primary "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-7.5">
                <div className="flex flex-col gap-7.5 text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-150 text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-7.5 gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-37.5 bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="cursor-pointer text-6xl group-hover:text-primary transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center lg:text-left">
              <div className="flex flex-col gap-7.5">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-150 text-white/60 mx-auto lg:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-155 mx-auto lg:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center lg:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
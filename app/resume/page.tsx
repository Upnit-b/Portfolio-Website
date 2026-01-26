"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiTypescript, SiCplusplus, SiNestjs, SiExpress, SiDjango, SiFastapi, SiPostgresql, SiMongodb, SiSqlite, SiMysql, SiRedis} from "react-icons/si"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// about data
const about = {
  title: "About me",
  description: 'Software Engineer with hands-on experience delivering production-ready web applications for clients. Strong backend and frontend focus with Node.js, Django, PostgreSQL, distributed systems, Next.js, TailwindCSS, combined with 10+ years of Solutions and Integration Engineering experience. Proven ability to design, build, deploy and document scalable systems with payments, messaging, and cloud infrastructure.',
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
  description: "Software / Solutions Engineer with hands-on experience delivering production-ready web applications for clients. Strong backend and frontend focus with Node.js, Django, PostgreSQL, distributed systems, Next.js, TailwindCSS, combined with 10+ years of Solutions and Integration Engineering experience. Proven ability to design, build, deploy and document scalable systems with payments, messaging, and cloud infrastructure.",
  items: [
    {
      company: "Self Employed",
      position: "Software Developer",
      duration: "Dec 2023 - Present",
    },
    {
      company: "Appcast",
      position: "Enterprise Account Executive",
      duration: "Oct 2022 - Jul 2023",
    },
    {
      company: "Teltonika",
      position: "Senior Solutions Engineer",
      duration: "Aug 2020 - Oct 2022",
    },
    {
      company: "Teltonika",
      position: "Solutions Engineer",
      duration: "Aug 2019 - Aug 2020",
    },
    {
      company: "Rays Power Infra",
      position: "Senior Sales Engineer",
      duration: "Jun 2016 - Jan 2019",
    },
    {
      company: "Rays Power Infra",
      position: "Technical Account Manager",
      duration: "Apr 2013 - Jun 2016",
    },
  ]
}

// education data
const education = {
  icon: "/file.svg",
  title: "My education",
  description: "Pursued Bachelor of Science in Electronics with MBA and Computer Science 50 from Harvard University",
  items: [
    {
      institution: "Harvard University",
      degree: "CS50 Bootcamp",
      duration: "Aug 2023 - Nov 2023",
    },
    {
      institution: "University of Petroleum and Energy Studies",
      degree: "MBA",
      duration: "Aug 2011 - May 2013",
    },
    {
      institution: "Delhi University",
      degree: "Bachelor of Science - Electronics",
      duration: "Aug 2007 - May 2010",
    },
  ]
}

//skills data
const skills = {
  title: "My skills",
  description: "Well versed in API integrations, system design, system architecture, web development and software development",
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
      icon: <FaPython/>,
      name: "python",
    },
    {
      icon: <SiTypescript/>,
      name: "typescript",
    },
    {
      icon: <SiCplusplus/>,
      name: "c++",
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
      icon: <SiNestjs/>,
      name: "nest.js",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <SiExpress/>,
      name: "express.js",
    },
    {
      icon: <SiDjango/>,
      name: "django",
    },
    {
      icon: <SiFastapi/>,
      name: "fast API",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma/>,
      name: "figma",
    },
    {
      icon: <SiPostgresql/>,
      name: "postgreSQL",
    },
    {
      icon: <SiMongodb/>,
      name: "mongoDB",
    },
    {
      icon: <SiSqlite/>,
      name: "sqlite",
    },
    {
      icon: <SiMysql/>,
      name: "mysql",
    },
    {
      icon: <SiRedis/>,
      name: "Redis",
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
                  <p className="max-w-full text-white/60 mx-auto lg:mx-0">{skills.description}</p>
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
                <p className="max-w-full text-white/60 mx-auto lg:mx-0">{about.description}</p>
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
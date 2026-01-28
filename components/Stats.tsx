"use client"

import Countup from "react-countup"

const stats = [
  {
    num: 12,
    text: "Years of experience",
  },
  {
    num: 12,
    text: "Projects completed",
  },
  {
    num: 10,
    text: "Technologies mastered",
  },
  {
    num: 96,
    text: "API integrations",
  },
]

export default function Stats() {
  return (
    <section className="pt-8 pb-30">
      <div className="container mx-auto p-2">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => {
          return (
            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
              <Countup end={item.num} duration={5} delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className={`${item.text.length < 15 ? "max-w-25" : "max-w-37.5"} leading-snug text-white/80`}>
                {item.text}
              </p>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  )
}
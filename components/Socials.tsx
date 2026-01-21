import Link from "next/link"
import {FaGithub, FaLinkedinIn} from "react-icons/fa"

const socials = [
  {
    icon: <FaGithub/>, path: 'https://github.com/Upnit-b'
  },
  {
    icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/upnitbanga/'
  }
]

export default function Socials() {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => {
        return (
          <Link key={index} target="_blank" href={item.path} className="w-9 h-9 border border-primary rounded-full
            flex justify-center items-center text-primary text-base hover:bg-primary hover:text-black
            hover:transition-all duration-500">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}
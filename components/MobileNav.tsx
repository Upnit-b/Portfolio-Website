"use client"

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"
import { useState } from "react"

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
]

export default function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center p-2 cursor-pointer">
        <CiMenuFries className="text-[32px] text-primary"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">Upnit<span className="text-primary">.</span></h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="p-3 flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.path} className={`${link.path === pathname && "text-primary border-b-2 border-primary"}
                text-xl capitalize hover:text-primary transition-all`} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            )
          })}
        </nav>

      </SheetContent>
    </Sheet>
  )
}
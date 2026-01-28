import Link from "next/link"
import Socials from "./Socials"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
]

export default function Footer() {
  return (
    <footer className="mt-10 md:mt-16 border-t border-white/10 bg-[#15151b] text-white">
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-8">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
          {/* branding */}
          <div className="space-y-3 text-center md:text-left">
            <Link href="/">
              <h2 className="text-2xl font-semibold tracking-widest">
                Upnit<span className="text-primary">.</span>
              </h2>
            </Link>
            <p className="max-w-md text-sm text-white/60">
              Full‑stack developer and solutions engineer building reliable, production‑ready
              software, integrations, and systems.
            </p>
          </div>

          {/* navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm md:justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-white/70 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* socials */}
          <div className="flex justify-center md:justify-end">
            <Socials />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Upnit Banga. All rights reserved.</p>
          <p className="text-center md:text-right">
            Open to full‑time, contract, and consulting opportunities.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";


export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold tracking-widest">Upnit<span className="text-primary">.</span></h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link href="/">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          mobile nav
        </div>

      </div>
    </header>
  )
}
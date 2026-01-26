import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (
   <section className="h-full">
      <div className="container mx-auto p-2 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* text */}
          <div className="text-center lg:text-left order-2 lg:order-0 ">
            <span className="text-xl">Software Developer | Solutions Engineer</span>
            <h1 className="h1 mb-10 mt-5">
              Hello I'm<br/> <span className="text-primary">Upnit Banga</span>
            </h1>
            <p className="max-w-125 mb-9 text-white/80">
              With 12 years of experience in solution engineering, API integration and software development, I excel at building, deploying and integrating software projects
            </p>

            {/* btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button asChild variant="outline" size="lg"
                className="flex uppercase items-center rounded-2xl text-primary gap-2
                hover:bg-primary hover:text-black transition-all duration-500 cursor-pointer">
                <a href="/resume/Upnit_Banga_Resume.pdf" download="Upnit_Banga_Resume.pdf">
                  <span>Download Resume</span>
                  <FiDownload className="text-xl"/>
                </a>
              </Button>
              <div className="mb-8 lg:mb-0">
                <Socials/>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 lg:order-0 mb-8">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
   </section>
  );
}

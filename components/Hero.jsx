/* import ProjectandContactButton from "@/components/ProjectandContactButton"; */
import { useContext } from "react";
import BlueButton from "./BlueButton";
import { SectionRefContext } from "@/SectionRefContext";

export default function Hero() {

  const { scrollToSection, projectsSectionRef } = useContext(SectionRefContext);

  return (
    <div className="h-lvh flex justify-center items-center bg-[#EEEFF2] dark:bg-[#1A1C21] min-w-full"> {/* TODO: h-96 or h-lvh? */}
      {/* mt-[-5rem] because <Header> is h-20 and pushes Hero down 5rem */}
      <div className="mt-[-5rem] flex flex-col gap-12 text-center sm:w-[70%]">
        <h1 className="text-black dark:text-white text-5xl lg:text-6xl font-extrabold mx-4 ">HI, I'M MARCUS EKSTRÖM</h1>
        <p className="mx-4">Fullstack developer student based in Stockholm</p>

        <div>
          <BlueButton onClick={() => {
            scrollToSection(projectsSectionRef)
          }} title={"PROJECTS"}></BlueButton>
          {/* <ProjectandContactButton onClick={scrollToAboutSection} title={"ABOUT ME"}></ProjectandContactButton> */}
        </div>
      </div>
    </div>
  )
}

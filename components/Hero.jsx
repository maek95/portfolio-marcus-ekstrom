/* import ProjectandContactButton from "@/components/ProjectandContactButton"; */
import { useContext } from "react";
import BlueButton from "./BlueButton";
import { SectionRefContext } from "@/SectionRefContext";

export default function Hero() {

  const { scrollToSection, projectsSectionRef, heroTitleRef } = useContext(SectionRefContext);

  //bg-[#EEEFF2] dark:bg-[#1A1C21]
  return ( //(removed) mt-[-80px] due to Header being 80px... // h-dvh with for dynamic view when e.g mobile browser footer or header impacts the screen size. Makes stuff jump around though - maybe test transition-all duration-500 ease-in-out
    <div className="h-dvh transition-all duration-500 ease-in-out  flex justify-center items-center min-w-full bg-white-gray-gradient dark:bg-dark-gradient" //see tailwind.config.js, I added these custom gradients there!
    /* style={{
      //background: "linear-gradient(to top, #EEEFF2 0%, #EEEFF2 80%, #FFFFFF 100%)"
       //background: "linear-gradient(to bottom, #23272F 0%, #1A1C21 100%)"
       background: "linear-gradient(to bottom, #FFFFFF 0%, #EEEFF2 100%)"
    }} */
    > {/* TODO: h-96 or h-lvh? */}
      {/* (removed) mt-[-5rem] because <Header> is h-20 and pushes Hero down 5rem */}
      <div className=" flex flex-col gap-12 text-center sm:w-[70%]">
        <div ref={heroTitleRef} className="absolute"></div>
        <h1  className="text-black dark:text-white text-5xl lg:text-6xl font-extrabold mx-4 ">HI, I'M MARCUS EKSTRÖM</h1>
        <p className="mx-4">Fullstack developer student based in Stockholm</p>

        <div className="flex justify-center mx-4 ">
          <BlueButton arrowDown={true} onClick={() => {
            scrollToSection(projectsSectionRef)
          }} title={"PROJECTS"}></BlueButton>
          {/* <ProjectandContactButton onClick={scrollToAboutSection} title={"ABOUT ME"}></ProjectandContactButton> */}
        </div>
      </div>
    </div>
  )
}

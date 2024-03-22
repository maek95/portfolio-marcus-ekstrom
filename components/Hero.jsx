import ProjectandContactButton from "@/components/ProjectandContactButton";

export default function Hero({scrollToProjectSection, scrollToAboutSection}) {

  return (
    <div className="h-lvh flex justify-center items-center bg-[#EEEFF2] dark:bg-[#1A1C21] min-w-full"> {/* TODO: h-96 or h-lvh? */}
      <div className="flex flex-col gap-12 text-center sm:w-[70%]">

        {/* mt-[-5rem] because Header is h-20 and pushes Hero down 5rem */}
        <h1 className="text-black dark:text-white  text-5xl lg:text-6xl font-extrabold mx-4 mt-[-5rem]">HI, I'M MARCUS EKSTRÖM</h1>
        <p>Fullstack developer student</p>

        <div>
          <ProjectandContactButton onClick={scrollToProjectSection} title={"PROJECTS"}></ProjectandContactButton>
          {/* <ProjectandContactButton onClick={scrollToAboutSection} title={"ABOUT ME"}></ProjectandContactButton> */}
        </div>
      </div>
    </div>
  )
}
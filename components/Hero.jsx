import ProjectAndContactButton from "@/components/ProjectAndContactButton";

export default function Hero({onClick}) {

  return (
    <div className="h-96 flex justify-center items-center bg-[#EEEFF2] dark:bg-[#1A1C21] min-w-full"> {/* mt-20 same as Header's height h-20  */}
      <div className="flex flex-col gap-12 text-center sm:w-[70%]">

        <h1 className="text-5xl lg:text-6xl font-extrabold mx-4">Hi, I'm Marcus Ekström</h1>

        <div>
          <ProjectAndContactButton onClick={onClick} title={"PROJECTS"}></ProjectAndContactButton>
        </div>
      </div>
    </div>
  )
}
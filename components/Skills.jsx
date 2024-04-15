function Skill({skillName}) {

  /* text-[#23272F] */

 /*  dark:bg-[#868e9d] */
 
 /* dark:text-[#23272F] */
 
  return (
    <div className="bg-[#EEEFF2] rounded-lg dark:bg-[#1A1C21] p-4 flex justify-center text-center">
    {/* <div className="bg-[#EEEFF2] rounded-lg dark:bg-white p-4 flex justify-center text-center text-[#23272F]"> */}
        {skillName}
    </div>
  )

}

export default function Skills() {
  return (
    <div className="flex flex-col gap-4">
    <div className="flex flex-wrap gap-4"> {/* went with flex-wrap instead of grid,to avoid resizing. I want divs to fall down to a new line if needed instead */}
      <Skill skillName={"React"}/>
      <Skill skillName={"Redux"}/>
      <Skill skillName={"Vite"}/>
      <Skill skillName={"Radix"}/>
      <Skill skillName={"Zustand"}/>
      <Skill skillName={"Next.js"}/>
      <Skill skillName={"Node.js"}/>
      <Skill skillName={"Express.js"}/>
      <Skill skillName={"JavaScript"}/>
      <Skill skillName={"TypeScript"}/>
      <Skill skillName={"HTML5"}/>
      <Skill skillName={"CSS"}/>
      <Skill skillName={"Figma"}/>
      <Skill skillName={"Tailwind"}/>
      <Skill skillName={"Git"}/>
      <Skill skillName={"GitHub"}/>
      <Skill skillName={"Terminal"}/>   
      <Skill skillName={"MySQL"}/>   
      <Skill skillName={"Regression Analysis"}/>   
    </div>
    <div className="flex flex-col gap-4">
    <h4 className="text-black dark:text-white ">Basic Knowledge</h4>
    <div className="flex flex-wrap gap-4">
      <Skill skillName={"XML"}/>
      <Skill skillName={"Java"}></Skill>
      <Skill skillName={"C++"}></Skill>
      <Skill skillName={"Android Studio / Kotlin"}></Skill>
      <Skill skillName={"STATA"}></Skill>
      <Skill skillName={"MATLAB"}></Skill>
      <Skill skillName={"Eviews"}></Skill>
    </div>
  </div>
  </div>
  );
}

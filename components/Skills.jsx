function Skill({skillName}) {

  /* text-[#23272F] */

 /*  dark:bg-[#868e9d] */
 
 /* dark:text-[#23272F] */
 
  return (
    <div className="bg-[#EEEFF2] rounded-lg dark:bg-[#1A1C21] p-4 flex justify-center text-center text-[#7c7c7c] dark:text-[#959eae] ">
    {/* <div className="bg-[#EEEFF2] rounded-lg dark:bg-white p-4 flex justify-center text-center text-[#23272F]"> */}
        {skillName}
    </div>
  )

}

export default function Skills() {
  return (
    <div className="flex flex-col gap-4">
    <div className="flex flex-wrap gap-4"> {/* went with flex-wrap instead of grid,to avoid resizing. I want divs to fall down to a new line if needed instead */}
      <Skill skillName={"React"}></Skill>
      <Skill skillName={"Redux"}></Skill>
      <Skill skillName={"Vite"}></Skill>
      <Skill skillName={"Radix"}></Skill>
      <Skill skillName={"Zustand"}></Skill>
      <Skill skillName={"Next.js"}></Skill>
      <Skill skillName={"Node.js"}></Skill>
      <Skill skillName={"JavaScript"}></Skill>
      <Skill skillName={"TypeScript"}></Skill>
      <Skill skillName={"HTML5"}></Skill>
      <Skill skillName={"CSS"}></Skill>
      <Skill skillName={"Figma"}></Skill>
      <Skill skillName={"Tailwind"}></Skill>
      <Skill skillName={"GIT"}></Skill>
      <Skill skillName={"GitHub"}></Skill>
      <Skill skillName={"Terminal"}></Skill>   
    </div>
    <div className="flex flex-col gap-4">
    <h4>Basic Knowledge</h4>
    <div className="flex flex-wrap gap-4">
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

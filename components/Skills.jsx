function Skill({ skillName }) {
  /* text-[#23272F] */

  /*  dark:bg-[#868e9d] */

  /* dark:text-[#23272F] */

  return (
    <div className="relative">
      <div className="bg-[#EEEFF2] rounded-lg dark:bg-[#1A1C21] p-4 flex justify-center text-center"
      style={{
        transition: "transform 0.1s",
        margin: "0",
      }}
      >
        {/* <div className="bg-[#EEEFF2] rounded-lg dark:bg-white p-4 flex justify-center text-center text-[#23272F]"> */}
        {skillName}
      </div>

      <div // top-0 and left-0 needed because div above has no fixed size
        className={`z-1 absolute top-0 left-0 w-full h-full rounded-lg`}
        style={{ pointerEvents: "auto" }} // not sure what this does?
        onMouseOver={(e) =>
          (e.currentTarget.previousSibling.style.transform = "scale(1.3)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.previousSibling.style.transform = "scale(1)")
        }
      ></div>
    </div>
  );
}

export function SkillSmall({ skillName }) {
  /* text-[#23272F] */

  /*  dark:bg-[#868e9d] */

  /* dark:text-[#23272F] */

  return (
    <div className="bg-white dark:bg-[#23272F] //dark:bg-[#959eae] rounded-lg  //dark:text-[#1A1C21] px-2 py-1 flex justify-center text-center">
      {" "}
      {/* text color changes with default text-color */}
      {/* <div className="bg-[#EEEFF2] rounded-lg dark:bg-white p-4 flex justify-center text-center text-[#23272F]"> */}
      {skillName}
    </div>
  );
}

export default function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        {" "}
        {/* went with flex-wrap instead of grid,to avoid resizing. I want divs to fall down to a new line if needed instead */}
        <Skill skillName={"React.js"} />
        <Skill skillName={"React Native"} />
        <Skill skillName={"Redux"} />
        <Skill skillName={"Vite"} />
        <Skill skillName={"Radix"} />
        <Skill skillName={"Zustand"} />
        <Skill skillName={"Next.js"} />
        <Skill skillName={"Node.js"} />
        <Skill skillName={"Express.js"} />
        <Skill skillName={"AWS"} />
        <Skill skillName={"Docker"} />
        <Skill skillName={"CI/CD"} />
        <Skill skillName={"WCAG"} />
        <Skill skillName={"JavaScript"} />
        <Skill skillName={"TypeScript"} />
        <Skill skillName={"HTML5"} />
        <Skill skillName={"CSS"} />
        <Skill skillName={"Figma"} />
        <Skill skillName={"Tailwind"} />
        <Skill skillName={"Git"} />
        <Skill skillName={"GitHub"} />
        <Skill skillName={"Terminal"} />
        <Skill skillName={"MySQL"} />
        <Skill skillName={"Regression Analysis"} />
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-black dark:text-white ">Basic Knowledge</h4>
        <div className="flex flex-wrap gap-4">
          <Skill skillName={"SEO"}></Skill>
          <Skill skillName={"Google Analytics"}></Skill>
          <Skill skillName={"Cypress"}></Skill>
          <Skill skillName={"Jest"}></Skill>
          <Skill skillName={"Java"}></Skill>
          <Skill skillName={"Spring Boot"}></Skill>
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

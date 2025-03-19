import Skills from "./Skills";
import BlueButton from "./BlueButton";
import { useContext } from "react";
import { SectionRefContext } from "@/SectionRefContext";

export default function AboutMe() {
  const { scrollToSection, contactSectionRef } = useContext(SectionRefContext);

  return (
    <div className="w-full flex flex-col justify-evenly lg:flex-row gap-6">
      {/* lg:w-[50%] and justify-evenly is a temporary solution... surely another way to fix this?  */}
      <div className="sm:w-[90%] md:w-[80%] lg:w-full flex flex-col gap-6 items-start text-start">
        <h4 className="text-black dark:text-white ">Get to know me!</h4>
        <div className="">
          <p className="">
            I am a blend of liking video games, going to the gym, eating dinner with friends, the occasional night in the city, master{"'"}s in economics, and excited to keep building my career as a developer!
            <br />
            <br />
            Currently I am in the final stages of my <strong>6-month internship at the legal-tech firm Kliently as a fullstack developer</strong>. Choosing a career as a developer has truly felt like the perfect fit for me, and I'm excited to see how both this profession and I continue to evolve together.
            <br />
            <br />
            I began my coding journey after completing a <strong>Masters in Economics</strong> at Stockholm University in the summer of 2022. Following this, I took three individual university-courses in programming: C++, Java, and Android Studio {"("}Kotlin{")"}, which all fascinated me and brought me on to this path!
          </p>
        </div>
        {/*  <a href="#projects"> */}
        <BlueButton arrowDown={true}
          title={"Contact Me"}
          onClick={() => {
            scrollToSection(contactSectionRef);
          }}
        ></BlueButton>
        {/*  </a> */}
      </div>
      <div className="sm:w-[90%] md:w-[80%] lg:w-full flex flex-col gap-6 items-start text-start">
        <h4 className="text-black dark:text-white ">My Skills</h4>
        {/* <p className="text-[#7c7c7c] dark:text-[#959eae]">Check my CV for a description of my <strong>Masters in Economics</strong> I took in 2022!</p> */}
        <Skills></Skills>
      </div>
    </div>
  );
}

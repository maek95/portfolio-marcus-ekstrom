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
            I live in Stockholm and I am currently enrolled at Chas Academy (university), studying{" "}
           <strong>Fullstack development - specialising in Frontend</strong>. 
           <br />
           <br />
            I began my coding journey after completing a <strong>Masters in Economics</strong> at Stockholm University in the summer of 2022. Following this, I took three individual university-courses in programming: C++, Java, and Android Studio (Kotlin), which all fascinated me and led me to pursue a Fullstack/Frontend program at Chas Academy in 2023!
            <br />
            <br />
            In Frontend I have worked with everything from basic CSS & HTML to
            JavaScript, React.js, Next.js, and React Native. On the Backend I have
            experience with Express.js (Node) and MySQL, and combined it with
            Frontend development for fullstack projects. The projects I showcase below are deployed through Vercel, while others use CI/CD for automatic deployment to Amazon AWS EC2/RDS instances with Docker.{" "}
           {/*  I live in Stockholm and I am currently enrolled at Chas Academy (university), studying{" "}
            <strong>Fullstack development with a focus on Frontend</strong>. In
            Frontend I have worked with everything from basic CSS & HTML to
            JavaScript, React.js, Next.js, and React Native. In backend I have
            worked with Express.js (Node) and MySQL, and I have combined it with
            frontend for fullstack projects. Regarding fullstack projects, I
            have deployed them using Amazon AWS EC2 instances, PM2, and Docker.
            <br />
            <br />
            Before my coding journey began I took a{" "}
            <strong>Masters in Economics</strong> at Stockholm University, where
            my Master Thesis involved analyzing large datasets using Vector
            Autoregression (VAR) and MATLAB. Following my masters I also took
            individual university-courses in C++, Java, and Kotlin, before
            investing wholeheartedly into fullstack/frontend developing!{" "} */}
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

"use client";
import ThemeButton from "@/components/ThemeButton";
import Header from "../components/Header";
import FontButton from "../components/FontButton";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectAndContactButton from "@/components/ProjectAndContactButton";
import { useRef } from "react";
import Project from "@/components/Project";

/* 
const inter = Inter({ subsets: ["latin"] }); */

export default function Home() {
  const projectsSectionRef = useRef(null);
  const aboutMeSectionRef = useRef(null);
  const heroSectionRef = useRef(null);

  function scrollToSection(sectionRef) {
    const yOffset = -80; // Adjust this value to change the offset
    const element = sectionRef.current;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <div className="text-black dark:text-white bg-[#EEEFF2] dark:bg-[#1A1C21] min-h-screen">
      <Header
        onClickHome={() => {
          scrollToSection(heroSectionRef);
        }}
        onClickAbout={() => {
          scrollToSection(aboutMeSectionRef);
        }}
        onClickProjects={() => scrollToSection(projectsSectionRef)}
      >
        <ThemeButton />
      </Header>

      <div className="" ref={heroSectionRef}></div>
      <Hero onClick={() => scrollToSection(projectsSectionRef)}></Hero>

      {/*  <main
      className={`pt-[5rem] pb-[0.5rem] bg-[#EEEFF2] dark:bg-[#1A1C21] ${inter.className}`}
    > */}
      <main className={`bg-white dark:bg-[#23272F]`}>
        <div className="" ref={aboutMeSectionRef}></div>
        <Section
          title="ABOUT ME"
          bgcolor={"[#f7f8fc]"}
          darkbgcolor={"[#23272F]"}
        >
          <div className="flex flex-col items-start text-start gap-6">
            <h4>Get to know me!</h4>
            <div className="sm:w-[70%] md:w-[60%]">
              <p className="">
                I am in the final stages of studying Frontend Developing in
                mobile & web-applications at Chas Academy (university) in
                Stockholm. We have worked with everything from CSS and HTML to
                JavaScript, React, Nextjs, ...fillinblank... Prior to my coding
                journey I have taken a <u>Masters in Economics</u> at Stockholm
                University, and I have taken university-courses in different
                coding languages (e.g. C++, Java, Kotlin, etc.){" "}
              </p>
            </div>
            {/*  <a href="#projects"> */}
            <ProjectAndContactButton
              title={"CONTACT"}
            ></ProjectAndContactButton>
            {/*  </a> */}
          </div>
        </Section>

        {/*   <a id="projects"></a> */}
        <div className="" ref={projectsSectionRef}></div>
        <Section
          title={"PROJECTS"}
          bgcolor={"[#EEEFF2]"}
          darkbgcolor={"[#1A1C21]"}
        >
          <div className="grid grid-cols-1 gap-5">
            <Project
              title={"Quiz App"}
              description={
                "This project was in the final stages of my studies at Chas Academy"
              }
              projectLink={"https://23-chas-quiz.vercel.app"}
            ></Project>

            <Project
              title={"Figma App"}
              description={
                "At Chas Academy we had a 1-week segment about Figma and I made a simple App!"
              }
              projectLink={
                "https://www.figma.com/proto/7EXISjrUDnc5rQEhkxgSAX/my-Health-app?node-id=19-297&starting-point-node-id=19%3A297&mode=design&t=JFTobLpRmywpSry4-1"
              }
            ></Project>
            <Project
              title={"Replicated Nordea's website"}
              description={
                
                  "Simple HTML & CSS project I made during one of the first workshops at Chas Academy. Tried replicating Nordea's feedback page https://www.nordea.se/privat/kundservice/synpunkter-och-forslag.html"               
               
              }
              projectLink={"https://workshop-4-form.vercel.app"}
              imgSrc={"/NordeaPagePreview.png"}
            ></Project>
          </div>
        </Section>
        <Card>
          <FontButton /> {/* // remove? */}
        </Card>

        {/* <Card>
        <h3>Project 1</h3>
      </Card> */}
      </main>
    </div>
  );
}

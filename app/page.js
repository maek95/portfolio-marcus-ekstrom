"use client"
import ThemeButton from "@/components/ThemeButton";
import Header from "../components/Header";
import FontButton from "../components/FontButton";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Link from "next/link";
import ProjectAndContactButton from "@/components/ProjectAndContactButton";
import { useRef } from 'react';

/* 
const inter = Inter({ subsets: ["latin"] }); */

export default function Home() {

  const projectsSectionRef = useRef(null);
  const aboutMeSectionRef = useRef(null);
  const heroSectionRef = useRef(null);

  function scrollToSection(sectionRef) {
    const yOffset = -80; // Adjust this value to change the offset
    const element = sectionRef.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    
    <div className="text-black dark:text-white bg-[#EEEFF2] dark:bg-[#1A1C21] min-h-screen">
      <Header onClickHome={() => {
        scrollToSection(heroSectionRef)
      }} onClickAbout={() => {
        scrollToSection(aboutMeSectionRef)
      }} onClickProjects={() => scrollToSection(projectsSectionRef)}>
        <ThemeButton />
     </Header>
    
    <div className="" ref={heroSectionRef}></div>
    <Hero onClick={() => scrollToSection(projectsSectionRef)}></Hero>
    
    
   {/*  <main
      className={`pt-[5rem] pb-[0.5rem] bg-[#EEEFF2] dark:bg-[#1A1C21] ${inter.className}`}
    > */}
    <main
      className={`bg-white dark:bg-[#23272F]`}
    >
      <div className="" ref={aboutMeSectionRef}></div>
      <Section title="ABOUT ME" bgcolor={"[#f7f8fc]"} darkbgcolor={"[#23272F]"}>
        <div className="flex flex-col items-start text-start gap-6">
          <h4>Get to know me!</h4>
          <div className="sm:w-[70%] md:w-[60%]">
            <p className="">I am in the final stages of studying Frontend Developing in mobile & web-applications at Chas Academy (university) in Stockholm. We have worked with everything from CSS and HTML to JavaScript, React, Nextjs, ...fillinblank... Prior to my coding journey I have taken a <u>Masters in Economics</u> at Stockholm University, and I have taken university-courses in different coding languages (e.g. C++, Java, Kotlin, etc.)  </p>
          </div>
         {/*  <a href="#projects"> */}
            <ProjectAndContactButton title={"CONTACT"}></ProjectAndContactButton>
         {/*  </a> */}
          
        </div>

      </Section>

    {/*   <a id="projects"></a> */}
    <div className="" ref={projectsSectionRef}></div>
    <Section title={"PROJECTS"} bgcolor={"[#EEEFF2]"} darkbgcolor={"[#1A1C21]"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card>
            <div className="min-w-full flex items-center gap-8">
              <h3>Project 1</h3>
              <div className="flex h-full flex-col items-start text-start">
                <Link href={""}>
                  <ProjectAndContactButton title={"Project Link"}></ProjectAndContactButton>
                </Link>
                <p >This project was in the final stages of my studies at Chas Academy</p>
                <img src="" alt="<preview img>" />
              </div>
            </div>
          </Card>
          <Card><h3>Project 2</h3></Card>
          <Card><h3>Project 3</h3></Card>
          <Card><h3>Project 4</h3></Card>
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



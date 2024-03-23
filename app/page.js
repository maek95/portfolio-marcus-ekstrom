"use client";
import ThemeButton from "@/components/ThemeButton";
import Header from "../components/Header";
import FontButton from "../components/FontButton";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Section from "../components/Section";
/* import ProjectandContactButton from "@/components/ProjectandContactButton"; */
import BlueButton from "@/components/BlueButton";
import { useRef, useState } from "react";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTopButton";
import HeaderExpanded from "@/components/HeaderExpanded";



export default function Home() {

  const projectsSectionRef = useRef(null);
  const aboutMeSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)


  // TODO: @media transform duration on projectpreview images resizing? transform transition height & width?
  // TODO: CONTACT ME SECTION, and link contact buttons / nav buttons!
  // TODO: useContext for onClickHome onClickAbout onClickProjects? just look at ThemeContext and do same thing kinda?
  // TODO: remove color transition duration on hamburger button when we swap dark/light mode? since nothing else does that
  // TODO: fade in/out display hidden / flex HeaderExpanded?
  // TODO: maybe make the gap a little smaller between e.g. Quiz App and the previewImage?

  function scrollToSection(sectionRef) {
    const yOffset = -80; // Adjust this value to change the offset
    const element = sectionRef.current;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <div className="text-[#7c7c7c] dark:text-[#959eae] bg-[#EEEFF2] dark:bg-[#1A1C21] min-h-screen">
      <ScrollToTop></ScrollToTop>
      <Header setIsHamburgerClicked={setIsHamburgerClicked} isHamburgerClicked={isHamburgerClicked}
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
      <HeaderExpanded setIsHamburgerClicked={setIsHamburgerClicked} isHamburgerClicked={isHamburgerClicked} onClickHome={() => {
          scrollToSection(heroSectionRef);
        }}
        onClickAbout={() => {
          scrollToSection(aboutMeSectionRef);
        }}
        onClickProjects={() => scrollToSection(projectsSectionRef)}></HeaderExpanded>
      <div className="" ref={heroSectionRef}></div>
      <Hero scrollToProjectSection={() => scrollToSection(projectsSectionRef)}></Hero>
      {/* TODO: remove? <Hero scrollToProjectSection={() => scrollToSection(projectsSectionRef)} scrollToAboutSection={() => scrollToSection(aboutMeSectionRef)}></Hero>
 */}
      
      <main className={`bg-white dark:bg-[#23272F]`}>
        <div className="" ref={aboutMeSectionRef}></div>
        <Section
          title="ABOUT ME"
          bgcolor={"[#f7f8fc]"}
          darkbgcolor={"[#23272F]"}
        >
          <div className="w-full flex flex-col justify-evenly lg:flex-row gap-6">
            {/* lg:w-[50%] and justify-evenly is a temporary solution... surely another way to fix this?  */}
            <div className="sm:w-[90%] md:w-[80%] lg:w-full flex flex-col gap-6 items-start text-start">
              <h4 className="text-black dark:text-white ">Get to know me!</h4>
              <div className="">
                <p className="">
                  I live in Stockholm and I am currently studying <strong>Fullstack development</strong> with focus on Frontend. In Frontend I have done projects in everything
                  from CSS & HTML to JavaScript, React, Nextjs,
                  ...fillinblank... In backend I have done projects in ...fillinblank... .Before my coding journey
                  began I took a <strong>Masters in Economics</strong> at
                  Stockholm University, where my Master Thesis involved
                  analyzing large datasets using Vector Autoregression (VAR) and
                  MATLAB. After that I also took individual university-courses
                  in C++, Java, and Kotlin.{" "}
                </p>
              </div>
              {/*  <a href="#projects"> */}
              <BlueButton
                title={"CONTACT"}
              ></BlueButton>
              {/*  </a> */}
            </div>
            <div className="sm:w-[90%] md:w-[80%] lg:w-full flex flex-col gap-6 items-start text-start">
              <h4 className="text-black dark:text-white ">My Skills</h4>
              {/* <p className="text-[#7c7c7c] dark:text-[#959eae]">Check my CV for a description of my <strong>Masters in Economics</strong> I took in 2022!</p> */}
              <Skills></Skills>
            </div>
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
              projectLink={"https://23-chas-quiz.vercel.app"}
              imgSrc={"/myQuizAppPreview.png"}
              transparentImgBg={true}
            >
              Fun and engaging group project at Chas Academy where we mainly
              learned how to work as a group in GitHub and solving merge conflicts. We also refined our skills in handling
              state through useState, global state (Redux store), and
              localStorage.
            </Project>

            <Project
              title={"Figma App"}
              projectLink={
                "https://www.figma.com/proto/7EXISjrUDnc5rQEhkxgSAX/my-Health-app?node-id=19-297&starting-point-node-id=19%3A297&mode=design&t=JFTobLpRmywpSry4-1"
              }
              imgSrc={"/myFigmaAppPreview.png"}
              transparentImgBg={true}
            >
              At Chas Academy we had a 1-week segment about Figma and I made a
              simple App! It gave me some insight on how Designers may work with
              Figma, or if I myself want to brainstorm design ideas for a new
              project.
            </Project>
            <Project
              title={"Replicated Nordea's website"}
              projectLink={"https://workshop-4-form.vercel.app"}
              imgSrc={"/NordeaPagePreview.png"}
              transparentImgBg={false}
            >
              Simple HTML & CSS project I made during one of the first workshops
              at Chas Academy. I learned about submitting forms and delving deep into another site's code and design through DevTools. I tried
              replicating{" "}
              <Link
                className="text-[#7c7c7c] dark:text-[#959eae]"
                href={
                  "https://www.nordea.se/privat/kundservice/synpunkter-och-forslag.html"
                }
                target="_blank"
              >
                Nordea's feedback page
              </Link>
              .
            </Project>
          </div>
        </Section>
        {/* <Card>
          <FontButton />
        </Card> */}
      </main>
    </div>
  );
}

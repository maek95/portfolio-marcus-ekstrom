"use client";
import ThemeButton from "@/components/ThemeButton";
import Header from "../components/Header";
import FontButton from "../components/FontButton";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { useContext, useEffect, useRef, useState } from "react";
import HeaderExpanded from "@/components/HeaderExpanded";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { SectionRefContext } from "@/SectionRefContext";
import Footer from "@/components/Footer";

export default function Home() {
  /* const projectsSectionRef = useRef(null);
  const aboutMeSectionRef = useRef(null);
  const heroSectionRef = useRef(null); */
  const {
    projectsSectionRef,
    aboutMeSectionRef,
    heroSectionRef,
    contactSectionRef,
  } = useContext(SectionRefContext);

  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  
  // TODO: @media transform duration on projectpreview images resizing from mobile to desktop? transform transition height & width?
  // TODO: weird background flicker when clicking on hamburger button on mobile.

  return (
    <div className="text-[#7c7c7c] dark:text-[#959eae] bg-white dark:bg-[#23272F] min-h-screen">
      <ScrollToTopButton></ScrollToTopButton>

      <Header
        setIsHamburgerClicked={setIsHamburgerClicked}
        isHamburgerClicked={isHamburgerClicked}
      ></Header>
      <HeaderExpanded
        setIsHamburgerClicked={setIsHamburgerClicked}
        isHamburgerClicked={isHamburgerClicked}
      ></HeaderExpanded>

      <div className="" ref={heroSectionRef}></div>
      <Hero></Hero>

      <main className={`bg-white dark:bg-[#23272F]`}>
        <div className="" ref={aboutMeSectionRef}></div>{" "}
        {/* dispatch aboutMeSectionRef ? */}
        <Section
          title="ABOUT ME"
          /* gradient="blue-white-gradient" */
          /* bgcolor={"[#f7f8fc]"}
          darkbgcolor={"[#23272F]"} */
        >
          <AboutMe />
        </Section>
        <div className="" ref={projectsSectionRef}></div>
        <Section
          title={"PROJECTS"}
          bgcolor={"[#EEEFF2]"}
          darkbgcolor={"[#1A1C21]"}
          /*  graygradient={true} */
          /* whitegradient={true} */
        >
          <Projects />
        </Section>
        <div className="" ref={contactSectionRef}></div>
        <Section title={"Contact Me"}>
          <Contact />
        </Section>
      </main>

      <Footer></Footer>
    </div>
  );
}

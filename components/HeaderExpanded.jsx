"use client"
import { SectionRefContext } from "@/SectionRefContext";
import { useContext, useEffect } from "react";


export default function HeaderExpanded({isHamburgerClicked, setIsHamburgerClicked}) {

  const { scrollToSection, heroSectionRef, projectsSectionRef, aboutMeSectionRef, contactSectionRef } = useContext(SectionRefContext);

  // disable scrolling when the HeaderExpanded is open, otherwise you can scroll on the page while its open... weird
  useEffect(() => {
    if (isHamburgerClicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isHamburgerClicked]);

  return (
    <>
    {isHamburgerClicked ? (<div className="fixed z-50 h-full w-full bg-white dark:bg-[#23272F] opacity-[95%] "> <ul className="h-full w-full flex flex-col items-center justify-start pt-8 font-semibold">
        {/* justify-center and  my-[-5rem] if I want centered on screen,  my-[-5rem] because header */}
          <li onClick={() => {
            setIsHamburgerClicked(false);
            scrollToSection(heroSectionRef)
            }} className="list-none cursor-pointer hover:underline px-4 py-4"><h2 className="text-black dark:text-white text-3xl lg:text-5xl font-extrabold ">Home</h2></li>
          <li onClick={() => {
            setIsHamburgerClicked(false);
            scrollToSection(aboutMeSectionRef)
            }} className="list-none cursor-pointer hover:underline pr-4 py-4"><h2 className="text-black dark:text-white text-3xl lg:text-5xl font-extrabold ">About</h2></li>
          <li onClick={() => {
            setIsHamburgerClicked(false);
            scrollToSection(projectsSectionRef)
            }} className="list-none cursor-pointer hover:underline pr-4 py-4"><h2 className="text-black dark:text-white text-3xl lg:text-5xl font-extrabold ">Projects</h2></li>
          <li onClick={() => {
            setIsHamburgerClicked(false);
            scrollToSection(contactSectionRef)
            }} className="list-none cursor-pointer hover:underline pr-4 py-4"><h2 className="text-black dark:text-white text-3xl lg:text-5xl font-extrabold ">Contact</h2></li>
          
        </ul></div>) : ("")}
    </>
  )
}
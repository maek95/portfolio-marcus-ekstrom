"use client"

import { createContext, useEffect, useRef, useState } from "react"

export const SectionRefContext = createContext(null);


export function SectionRefProvider({ children }) {

  /*  const [projectsSectionRef, setProjectsSectionRef] = useState(useRef(null))
   const [aboutMeSectionRef, setAboutMeSectionRef] = useState(useRef(null))
   const [heroSectionRef, setHeroSectionRef] = useState(useRef(null))
   const [contactSectionRef, setContactSectionRef] = useState(useRef(null)) */

  // assign these to divs in page.js
  const projectsSectionRef = useRef(null);
  const aboutMeSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const heroTitleRef = useRef(null);
  const workExperienceSectionRef = useRef(null)

  const [isHeroInView, setIsHeroInView] = useState(true);
  const [yOffset, setYOffset] = useState(-80); // Adjust this value to change the default offset

  //const [heightDifference, setHeightDifference] = useState(0);


  // isHeroInView is used in <Hero> as a terniary for h-dvh and h-lvh, so that when Hero section is NOT in view it has h-lvh. This is because h-dvh causes the <Hero> to resize when stuff is added to the screen (like on mobile you get a search-field when you scroll up). We do not want this resize to occur when we are scrolling through the website, but it shall occur when we are viewing the Hero section!
  // ALSO, isHeroInView is used to change setYOffset(num); because due to the resizing it requires the scrolling to scroll shorter/further depending on if the Hero section is in view or not!
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroSectionRef.current) {
            setIsHeroInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 } // Adjust this value as needed
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, [heroSectionRef]);

  useEffect(() => {
    // have to do this because Hero section is resizing page when in/out of View!
    if (isHeroInView) {
      setYOffset(-80); // Use a smaller offset when the Hero section is in view
    } else {
      setYOffset(-160); // Use a larger offset when the Hero section is not in view

      // setYOffset(heightDifference);
    }
  }, [isHeroInView]); // , heightDifference

  function scrollToSection(sectionRef) {
    // const yOffset = -80; // Adjust this value to change the offset
    const element = sectionRef.current;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <SectionRefContext.Provider value={{ projectsSectionRef, aboutMeSectionRef, heroSectionRef, contactSectionRef, heroTitleRef, workExperienceSectionRef, scrollToSection, isHeroInView }}>
      {children}
    </SectionRefContext.Provider>
  )

} 
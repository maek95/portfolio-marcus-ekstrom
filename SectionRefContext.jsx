"use client"

import { createContext, useRef, useState } from "react"

export const SectionRefContext = createContext(null);

function scrollToSection(sectionRef) {
  const yOffset = -80; // Adjust this value to change the offset
  const element = sectionRef.current;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function SectionRefProvider({children}) {

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

  return (
    <SectionRefContext.Provider value={{projectsSectionRef, aboutMeSectionRef, heroSectionRef, contactSectionRef, heroTitleRef, scrollToSection}}>
      {children}
    </SectionRefContext.Provider>
  )

} 
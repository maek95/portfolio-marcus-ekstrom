import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { SectionRefContext } from "@/SectionRefContext";

export default function ScrollToTopButton() {
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      // 800 decides how far to scroll for the button to show up
      const isVisible = currentScrollPos > 800;
      setIsVisible(isVisible);
    }

    window.addEventListener("scroll", handleScroll);

    return () => { // on "unmount"
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const { scrollToSection, heroSectionRef } = useContext(SectionRefContext);

  return (
    <div>
    <button
      className={`z-50 flex justify-center items-center fixed bottom-28 right-5 md:right-20 w-12 h-12 p-4 cursor-pointer border-none rounded-lg shadow-md bg-[#347FC1] hover:bg-[#3f97e4] text-white transition duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={() => {
        scrollToSection(heroSectionRef)
      }}
      /* style={{ transition: 'opacity 0.5s' }} */
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
    </button>
  </div>
  );
}



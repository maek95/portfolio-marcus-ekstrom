import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { SectionRefContext } from "@/SectionRefContext";

export default function ScrollToTopButton() {
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const maxScrollPos = document.documentElement.scrollHeight - window.innerHeight - 256; // 256px above the end of the page (same as footer height)
      // 800 decides how far to scroll for the button to show up
      const isVisible = currentScrollPos > 800;
      setIsVisible(isVisible);

      if (maxScrollPos < currentScrollPos) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }

    }

    window.addEventListener("scroll", handleScroll);

    return () => { // on "unmount"
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isAtBottom, setIsAtBottom] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const { scrollToSection, heroSectionRef } = useContext(SectionRefContext);

  return (
    <div>
    <button
      className={`z-50 flex justify-center items-center fixed bottom-28 right-1 md:right-20 w-12 h-12 p-4 cursor-pointer border-none rounded-lg shadow-md bg-[#347FC1] hover:bg-[#3f97e4] text-white ${isVisible ? 'opacity-100' : 'opacity-0'} ${isAtBottom ? 'bottom-48' : 'bottom-28'}`} /* transition duration-500 ease-in-out */
      style={{transition: "0.5s ease-in-out"}} /* had to use ordinary css since transition isnt support for changing 'bottom' position */
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



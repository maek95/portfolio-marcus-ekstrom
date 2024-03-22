import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTop() {
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

  function scrollToTop() {
    window.scrollTo({
      // top 0 is the top of the page. This is where the button will take us when clicked. 
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div>
    <button
      className={`flex justify-center items-center fixed bottom-28 right-20 z-50 w-12 h-12 p-4 cursor-pointer border-none rounded-lg shadow-md bg-[#347FC1] hover:bg-[#3f97e4] text-white transition duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
      style={{ transition: 'opacity 0.5s' }}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
    </button>
  </div>
  );
}

export default ScrollToTop;


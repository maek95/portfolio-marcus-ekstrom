

export default function HeaderExpanded({setIsHamburgerClicked, isHamburgerClicked, onClickHome, onClickAbout, onClickProjects}) {

  return (
    <>
    {isHamburgerClicked ? (<div className="fixed z-50 h-full w-full bg-white opacity-[95%] "> <ul className="h-full w-full flex flex-col items-center justify-start pt-8 font-semibold">
        {/* justify-center and  my-[-5rem] if I want centered on screen,  my-[-5rem] because header */}
          <li onClick={() => {
            setIsHamburgerClicked(false);
            onClickHome()
            }} className="list-none cursor-pointer hover:underline px-4 py-4"><h2 className="text-black dark:text-white text-3xl lg:text-5xl font-extrabold ">Home</h2></li>
          <li onClick={() => {
            setIsHamburgerClicked(false);
            onClickAbout()}} className="list-none cursor-pointer hover:underline pr-4 py-4"><h2 className="text-black dark:text-white text-3xl lg:text-5xl font-extrabold ">About</h2></li>
          <li onClick={() => {
            setIsHamburgerClicked(false);
            onClickProjects()}} className="list-none cursor-pointer hover:underline pr-4 py-4"><h2 className="text-black dark:text-white text-3xl lg:text-5xl font-extrabold ">Projects</h2></li>
          <li className="list-none cursor-pointer hover:underline pr-4 py-4"><h2 className="text-black dark:text-white text-3xl lg:text-5xl font-extrabold ">Contact</h2></li>
          
        </ul></div>) : ("")}
    </>
  )
}
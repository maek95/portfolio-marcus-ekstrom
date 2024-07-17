export default function Section({ title, bgcolor, darkbgcolor, children, whitegradient, graygradient, gradient}) {
  return (
    <div
      id={title}
      className={`min-h-96 px-6 pt-5 pb-10 bg-${bgcolor} dark:bg-${darkbgcolor} bg-${gradient}`}
      // not using gradients on section atm. Also, see how I did in Hero component, there I use Tailwind with the gradient in tailwind.config.js
      /* style={{ background: graygradient 
        ? "linear-gradient(to right, #EEEFF2 0%, #EEEFF2 70%, #D8DADF 100%)"
    : whitegradient
    ? "linear-gradient(to right, #EEEFF2 0%, #EEEFF2 70%, #FFFFFF 100%)"
    //"linear-gradient(to bottom, #D8DADF 0%,  #FFFFFF 2%, #FFFFFF 98%, #D8DADF 100%"
    : "" // No gradient if no gradient sent in props!
      }} */
    >
      {/* mt-20 same as Header's height h-20  */}
      <div className="flex flex-col text-center items-center">
        <div className="flex flex-col items-center gap-4 pb-12">
          <h2 className="text-black dark:text-white text-3xl lg:text-5xl font-extrabold mt-6 mb-0">
            {title}
          </h2>
          <div className="flex justify-center items-center sectionTitleUnderline bg-black dark:bg-white"></div>
        </div>

        {children}
      </div>
    </div>
  );
}

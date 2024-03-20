
export default function Section({title, bgcolor, darkbgcolor, children}) {

  return (
    <div id={title} className={`min-h-96 px-6 pt-5 pb-10 bg-${bgcolor} dark:bg-${darkbgcolor}`}> {/* mt-20 same as Header's height h-20  */}
      <div className="flex flex-col text-center items-center">

        <div className="flex flex-col items-center gap-4 pb-12">
          <h2 className="text-3xl lg:text-5xl font-extrabold mt-6 mb-0">{title}
          </h2>
          <div className="flex justify-center items-center sectionTitleUnderline bg-black dark:bg-white"></div>
        </div>

        
        {children}
      </div>
    </div>
  )
}

export default function Section({title, bgcolor, darkbgcolor, children}) {

  return (
    <div id={title} className={`min-h-96 px-6 pt-5 pb-10 bg-${bgcolor} dark:bg-${darkbgcolor}`}> {/* mt-20 same as Header's height h-20  */}
      <div className="flex flex-col text-center">
    
        <h2 className="text-3xl lg:text-5xl font-extrabold mt-6 mb-10">{title}</h2>

        {children}
      </div>
    </div>
  )
}
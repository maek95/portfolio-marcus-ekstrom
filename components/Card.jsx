export default function Card({children}) {

  
  return (
    
    <div className="flex border-solid border-[0.5px] shadow-lg rounded-lg p-5">
    {/* <div className="flex border-solid border shadow-lg rounded-lg p-5 bg-white dark:bg-[#23272F]"> */}
        {children}
    </div>
    
  )
}
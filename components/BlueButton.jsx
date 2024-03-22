
export default function BlueButton({title, onClick}) {

  return (
   <button onClick={onClick} className="border-none rounded-lg bg-[#347FC1] hover:bg-[#3f97e4] p-4 px-8 text-white font-bold cursor-pointer">{title}</button>
    
  )
}
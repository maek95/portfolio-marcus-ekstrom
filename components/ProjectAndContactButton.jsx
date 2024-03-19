import { useRouter } from "next/router";

export default function ProjectAndContactButton({title, onClick}) {

  return (
   <button onClick={onClick} className="border-none rounded-lg bg-[#347FC1] p-4 px-8 text-white font-bold cursor-pointer">{title}</button>
    
  )
}
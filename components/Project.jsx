import Card from "./Card"
import ProjectAndContactButton from "./ProjectAndContactButton"

export default function Project({title, description, projectLink, imgSrc}){

  return (
    <Card>
      <div className="min-w-full flex flex-col lg:flex-row items-center gap-8">
        <div className="flex w-full justify-center">

          <img className="w-auto h-[250px] md:h-[300px] lg:h-[450px] rounded-lg" src={imgSrc} alt="<preview img>" />
        </div>

        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start gap-4">
          <h3>{title}</h3>

          <div className="w-full">
            <p className="text-[#7c7c7c]">{description}</p>
          </div>
          <a href={projectLink} target="_blank">
            <ProjectAndContactButton title={"Project Link"}></ProjectAndContactButton>
          </a>
        </div>
      </div>
    </Card>
  )
}
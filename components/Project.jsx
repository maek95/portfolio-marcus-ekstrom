import Link from "next/link";
import Card from "./Card";
import ProjectAndContactButton from "./ProjectAndContactButton";
import Image from "next/image";

export default function Project({
  title,
  description,
  projectLink,
  imgSrc,
  transparentImgBg,
  children,
}) {

  // complicated img tag since I wanted hover features but also take in consideration that some images have transparent backgrounds and I don't want hover to trigger on the invisible background! Among other things I have a conditional in the inline-styling of inset, where it is set to inset-[18%] for the images with invisible backgrounds and inset-[0] for those with fully visible backgrounds!
  return (
    <>
      <Card>
        <div className="min-w-full flex flex-col lg:flex-row items-center gap-8">
          <div className="flex w-full justify-center">
            {/* <a className="relative" href={projectLink}> */}

            <div className="relative">
              <img
                className="w-fit h-[200px] md:h-[300px] lg:h-fit lg:w-[500px] rounded-lg duration-500 transition-transform"
                src={imgSrc}
                alt="<preview img>"
                style={{
                  transition: "transform 0.5s",
                  margin: "0",
                }}
              />

              <div
                className={`z-1 absolute ${transparentImgBg ? 'inset-[18%]' : 'inset-[0]'} rounded-lg hover:scale-110 duration-500 transition-transform cursor-pointer`}
                style={{ pointerEvents: "auto" }}
                onMouseOver={(e) =>
                  (e.currentTarget.previousSibling.style.transform =
                    "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.previousSibling.style.transform = "scale(1)")
                }
                onClick={() => {
                  window.open(projectLink, '_blank');
                  
                }}
              ></div>
            </div>

            {/* <div className="inline-block overflow-hidden rounded-lg">
              <img
                className="w-fit h-[200px] md:h-[300px] lg:h-fit lg:w-[500px] rounded-lg hover:scale-110 duration-500 transition-transform"
                src={imgSrc}
                alt="<preview img>"
              />
              <div
                className="relative w-full"
                style={{
                  height: "0",
                  paddingBottom: "calc(100% / (500 / 300))",
                }}
              >
                <Image
                  src={imgSrc}
                  alt="Preview Image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full rounded-lg hover:scale-110 duration-500 transition-transform"
                />
              </div>
            </div> */}
          </div>

          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start gap-4">
            <h3>{title}</h3>

            <div className="w-full">
              <p className="text-[#7c7c7c] dark:text-[#959eae]">{children}</p>
            </div>
            <Link href={projectLink} target="_blank">
              <ProjectAndContactButton
                title={"Project Link"}
              ></ProjectAndContactButton>
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
}

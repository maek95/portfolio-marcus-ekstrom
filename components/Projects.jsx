import Link from "next/link";
import Card from "./Card";
/* import ProjectandContactButton from "./ProjectandContactButton"; */
import BlueButton from "./BlueButton";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-5">

      <Project
        title={"Price winner LUDI - combining AI with a Movie Database"}
        projectLink={"https://ludi-app.com"}
        imgSrc={"/ludi_mockups_together.png"}
        transparentImgBg={false}
      >  
          <Link // hydration error if using <a> ?
          className="text-[#7c7c7c] dark:text-[#959eae]"
          href={
            "https://ludi-app.com"
          }
          target="_blank"
        >
          https://ludi-app.com
        </Link>
        <br/>
        <br/>
        At Chas Academy we had a 2-month long segment where 13 teams competed for the best website that incorporated AI. Here is the {" "}
        <Link // hydration error if using <a> ?
          className="text-[#7c7c7c] dark:text-[#959eae]"
          href={
            "https://www.linkedin.com/posts/chas-academy_chaschallenge2024-ai-ludi-activity-7207003804821516289-pkle?utm_source=share&utm_medium=member_desktop"
          }
          target="_blank"
        >
        university's offical LinkedIn post
        </Link>
        {" "}showing my team winning! It was a very fulfilling experience where I worked with basically all aspects of a website; Frontend (Next.js), Backend (node.js/express.js), Database (MySQL), Deployment (deploy.yml, AWS EC2, Docker), and overall styling using Tailwind/CSS. 
        <br/>
        <br/>
        We utilized Scrum and Trello to get a sense of a real workplace, where we clocked in at 9:00am for Daily Standups and performed 1-week Sprints.
        <br/>
        <br/>
        Most recent addition: I migrated the MySQL database to an AWS RDS instance instead of Docker, to hopefully provide more stability.
      </Project>

      <Project
        title={"Fullstack Bank Site"}
        projectLink={"http://13.53.190.247:3000"}
        imgSrc={"/bank-app-preview3.png"}
        transparentImgBg={true}
      >
        Built as a full-stack banking website, this project utilizes React with Next.js for the frontend, while Express.js with Node.js and MySQL for the backend. Deployment is managed through Docker, hosted on an AWS Amazon EC2 instance. Moreover, I utilized cookies in order to securely store session tokens when transitioning between login and account page. To streamline the deployment process, a deploy.yml script automatically updates the site whenever changes are pushed to GitHub.
      </Project>

      <Project
        title={"Quiz Site"}
        projectLink={"https://23-chas-quiz.vercel.app"}
        imgSrc={"/myQuizAppPreview.png"}
        transparentImgBg={true}
      >
        Fun and engaging group project at Chas Academy where we mainly learned
        how to work as a group in GitHub and solving merge conflicts. We also
        refined our skills in handling state through useState, global state
        (Redux store), and localStorage.
      </Project>

      {/* <Project
        title={"News Site (Desktop)"}
        projectLink={"https://workshop-22-chas-news.vercel.app"}
        imgSrc={"/chasNewsPreview.png"}
        transparentImgBg={true}
      >
        A simple news site where I refined my skills in fetching articles from a news API on server-side and storing bookmarks using Context. Also, as a workaround to this free API having very limited fetches, I utilized cache to only fetch articles when necessary.
      </Project>
 */}
      <Project
        title={"Figma Design"}
        projectLink={
          "https://www.figma.com/proto/7EXISjrUDnc5rQEhkxgSAX/my-Health-app?node-id=19-297&starting-point-node-id=19%3A297&mode=design&t=JFTobLpRmywpSry4-1"
        }
        imgSrc={"/myFigmaAppPreview.png"}
        transparentImgBg={true}
      >
        At Chas Academy we had a 1-week segment about Figma and I made a simple
        design! It gave me some insight on how Designers may work with Figma, or if
        I want to brainstorm design ideas for a new project.
      </Project>
      <Project
        title={"Replicated Nordea's website"}
        projectLink={"https://workshop-4-form.vercel.app"}
        imgSrc={"/NordeaPagePreview.png"}
        transparentImgBg={false}
      >
        A basic HTML & CSS project I made during one of the first workshops at
        Chas Academy. I learned about submitting forms and delving deep into
        another website's design through DevTools. I tried replicating{" "}
        <Link // hydration error if using <a> ?
          className="text-[#7c7c7c] dark:text-[#959eae]"
          href={
            "https://www.nordea.se/privat/kundservice/synpunkter-och-forslag.html"
          }
          target="_blank"
        >
          Nordea's feedback page
        </Link>
        .
      </Project>
    </div>
  );
}

function Project({
  title,
  description,
  projectLink,
  imgSrc,
  transparentImgBg,
  isFinished = true, // Default value is true
  children,
}) {
  return (
    <>
      <Card>
        <div className="min-w-full flex flex-col lg:flex-row items-center gap-8">
          <div className="flex w-full justify-center">
            {/* <a className="relative" href={projectLink}> */}

            <div className="relative">
              <img
                className="w-full h-[200px] md:h-[300px] lg:h-full lg:w-[500px] rounded-lg duration-500 transition-transform"
                src={imgSrc}
                alt="<preview img>"
                style={{
                  transition: "transform 0.5s",
                  margin: "0",
                }}
              />

              {/* invisible div that covers the img above... hover over it and it scales the img to 110% size. I did this instead of having the hover-feature directly on the image because now I can trigger the zoom when hovering further into a picture if I want (see inset-[18%]). */}
              <div
                className={`z-1 absolute ${
                  transparentImgBg ? "inset-[18%]" : "inset-[0]"
                } rounded-lg hover:scale-110 duration-500 transition-transform cursor-pointer`}
                style={{ pointerEvents: "auto" }}
                onMouseOver={(e) =>
                  (e.currentTarget.previousSibling.style.transform =
                    "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.previousSibling.style.transform = "scale(1)")
                }
                onClick={() => {
                  window.open(projectLink, "_blank");
                }}
              ></div>
            </div>

          </div>

          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start gap-4">
            <h3 className="text-black dark:text-white ">{title}</h3>

            <div className="w-full">
              <p className="">{children}</p>
            </div>
            {/* wrapped Link around Button instead of sending a complex onClick function to BlueButton for opening a link... */}
           {isFinished ? (<Link href={projectLink} target="_blank"> 
              <BlueButton title={"Project Link"}/>
            </Link>) : ("")}
          </div>
        </div>
      </Card>
    </>
  );
}

"use client";
import Link from "next/link";
import Card from "./Card";
/* import ProjectandContactButton from "./ProjectandContactButton"; */
import BlueButton from "./BlueButton";
import { SkillSmall } from "./Skills";
import {
  FaArrowCircleDown,
  FaArrowDown,
  FaChevronDown,
  FaLongArrowAltDown,
} from "react-icons/fa";
import { useLayoutEffect, useRef, useState } from "react";
import Measure from "react-measure";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Project
        title={"Price winner LUDI - combining AI with a Movie Database"}
        // projectLink={"https://ludi-app.com"}
        githubLink={"https://github.com/axelcfk/chas-challenge2"}
        imgSrc={"/ludi_mockups_together.png"}
        transparentImgBg={true} // have to move cursor further in to zoom
        stacks={[
          "Next.js",
          "Express.js",
          "MySQL",
          "AWS",
          "CI/CD",
          "Docker",
          "Tailwind",
        ]}
      >
        {/* <Link // hydration error if using <a> ?
          className="text-[#7c7c7c] dark:text-[#959eae]"
          href={"https://ludi-app.com"}
          target="_blank"
        >
          https://ludi-app.com
        </Link>
        <br />
        <br /> */}
        At Chas Academy we had a 2-month long segment where 13 teams competed
        for the best website that incorporated AI. Here is the{" "}
        <Link // hydration error if using <a> ?
          className="text-[#7c7c7c] dark:text-[#959eae]"
          href={
            "https://www.linkedin.com/posts/chas-academy_chaschallenge2024-ai-ludi-activity-7207003804821516289-pkle?utm_source=share&utm_medium=member_desktop"
          }
          target="_blank"
        >
          university's offical LinkedIn post
        </Link>{" "}
        showing my team winning! It was a very fulfilling experience where I
        worked with basically all aspects of a website; Frontend (Next.js App
        Router), Backend (Node.js/Express.js), Database (MySQL), Deployment
        (deploy.yml, AWS EC2 & RDS, Docker), and overall styling using
        Tailwind/CSS.
        <br />
        <br />
        We utilized Scrum and Trello to get a sense of a real workplace, where
        we clocked in at 9:00am for Daily Standups and performed 1-week Sprints.
        <br />
        <br />
        Most recent addition: I migrated the MySQL database to an AWS RDS
        instance instead of Docker, to hopefully provide more stability.
      </Project>
      <Project
        title={"Pizza website with grid-styling"}
        //githubLink={""}
        projectLink={"https://slajs-pizza-next.vercel.app"}
        stacks={["TypeScript", "Tailwind", "Next.js"]}
        imgSrc={"/pizza-typescript-mockup.png"}
      >
        My first TypeScript project using an API for a menu of food, ordering
        food, and viewing orders.
        <br />
        <br />
        The grid-styling was challenging but really fun, taking inspiration from{" "}
        <Link
          className="text-[#7c7c7c] dark:text-[#959eae]"
          href={"https://tengu.se"}
          target="_blank"
        >
          https://tengu.se
        </Link>
        .
      </Project>

      <Project
        title={"Memory Game App"}
        githubLink={
          "https://github.com/maek95/react-native-memory-game-Java-SpringBoot-animated-character"
        }
        videoSrc={"https://www.youtube.com/embed/ytSaP49ej9U"}
        // https://www.youtube.com/watch?v=ytSaP49ej9U // needs to embed version!
        // transparentImgBg={true}
        stacks={["React Native", "Expo Router", "Java", "Spring Boot", "JPA"]}
      >
        My first React Native project; the player must remember and replicate
        the order in which the circle's slices flash purple. The player has five
        seconds to complete the sequence, where they click to move a character
        around to respective slice in the correct order. If the character lands
        on a wrong slice it gives a 1 second penalty, and if the timer reaches 0
        they lose and can quickly start over or select a new difficulty.
        <br />
        <br />
        The project utilizes Expo Router for navigation and the game interface
        is created using SVG for the circle and its slices, combined with
        various animations. The backend is powered by Java Springboot and allows
        the user to create an account to keep track of highscores (stored in H2)
        for the current session using JPA repository for data persistence.
        <br />
        <br />
        Work in progress:
        <br />
        Store more statistics of the user's games that they can access on their
        profile page, such as how many games they have played and their win/loss
        ratio.
      </Project>

      <Project
        title={"My first fullstack project"}
        // projectLink={"http://13.53.190.247:3000"}
        githubLink={
          "https://github.com/maek95/workshop-26-docker-bank-mysql-test"
        }
        imgSrc={"/bank-app-preview3.png"}
        transparentImgBg={true}
        stacks={[
          "Next.js",
          "Express.js",
          "MySQL",
          "AWS",
          "CI/CD",
          "Docker",
          "Tailwind",
        ]}
      >
        Built as a full-stack banking website, this project utilizes React with
        Next.js (App Router) for the frontend, while Express.js with Node.js and
        MySQL for the backend. Deployment is managed through Docker, hosted on
        an AWS EC2 instance and an AWS RDS instance (MySQl database). Moreover,
        I utilized cookies in order to securely store session tokens when
        transitioning between login and account page. To streamline the
        deployment process, a deploy.yml script automatically updates the site
        whenever changes are pushed to GitHub.
      </Project>

      <Project
        title={"Quiz Site"}
        projectLink={"https://23-chas-quiz.vercel.app"}
        githubLink={"https://github.com/maek95/23-chas-quiz"}
        imgSrc={"/myQuizAppPreview.png"}
        transparentImgBg={true}
        stacks={["Next.js", "Redux", "Tailwind"]}
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

      {/*  <Project
        title={"Zoom's main page"}
        projectLink={"https://workshop-12-tailwind-redesignzoom.vercel.app"}
        githubLink={
          "https://github.com/maek95/workshop_12_tailwind_redesignzoom"
        }
        imgSrc={"/zoom-redesign-mockup-completed.png"}
        transparentImgBg={true}
        stacks={["Vite", "Tailwind"]}
      >
        My first project using Tailwind, built with Vite, where I tried to
        replicate and scale down a part of Zoom's original website{" "}
        <Link
          className="text-[#7c7c7c] dark:text-[#959eae]"
          href={"https://zoom.us"}
          target="_blank"
        >
          https://zoom.us
        </Link>
        .
        <br />
        <br />
        This project was very fulfilling as Zoom's website displays a lot of
        information and is quite content-rich. I had to carefully analyze what
        to keep and what to remove, and also add my own design elements.
      </Project> */}

      <Project
        title={"Figma Design"}
        projectLink={
          "https://www.figma.com/proto/7EXISjrUDnc5rQEhkxgSAX/my-Health-app?node-id=19-297&starting-point-node-id=19%3A297&mode=design&t=JFTobLpRmywpSry4-1"
        }
        imgSrc={"/myFigmaAppPreview.png"}
        transparentImgBg={true}
        stacks={["Figma"]}
      >
        At Chas Academy we had a 1-week segment about Figma and I made a simple
        design! It gave me some insight on how Designers may work with Figma, or
        if I want to brainstorm design ideas for a new project.
      </Project>
      {/* <Project
        title={"Replicated Nordea's form"}
        projectLink={"https://workshop-4-form.vercel.app"}
        githubLink={"https://github.com/maek95/workshop_4_form"}
        imgSrc={"/NordeaPagePreview.png"}
        transparentImgBg={false}
        stacks={["HTML", "CSS"]}
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
        <br />
        <br />
        <strong>Note:</strong> To view the page (Project Link below){" "}
        <strong>you may have to refresh the page once when entering</strong>,
        due to the nature of being a raw HTML page.
      </Project> */}
    </div>
  );
}

export function Project({
  title,
  subTitle,
  description,
  projectLink,
  githubLink,
  imgSrc,
  videoSrc,
  transparentImgBg,
  isFinished = true, // Default value is true
  children,
  stacks,
}) {
  const contentRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.offsetHeight;
      // Check if content height exceeds 150px
      if (contentHeight > 199 && contentHeight < 201) {
        // less than 201 so it isnt applied when we extend the div...
        setIsOverflowing(true);
      }
    }
  }, [children]);

  return (
    <>
      <Card>
        <div className="min-w-full flex flex-col lg:flex-row items-center gap-8">
          <div className="flex w-full justify-center">
            {/* <a className="relative" href={projectLink}> */}
            {videoSrc && (
              <iframe // iframe "recommended" way to include YouTube content on your site... Using YouTube instead of local file, otherwise the bandwidth is too much for mobile browsers...
                key={videoSrc} // force re-render if videoSrc changes live... i.e. when not rebuilding the project...?
                className="w-full h-[300px] md:h-[400px] lg:h-[400px] max-w-[450px] lg:max-w-[400px] rounded-lg"
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            {imgSrc && (
              <div className="relative">
                <img
                  className="w-full max-h-[200px] md:max-h-[300px] lg:h-auto lg:w-[450px] lg:max-h-none  rounded-lg duration-500 transition-transform"
                  src={imgSrc}
                  alt="<preview img>"
                  style={{
                    transition: "transform 0.5s",
                    margin: "0",
                  }}
                />

                {/* invisible div that covers the img above... hover over it and it scales the img to 110% size. I did this instead of having the hover-feature directly on the image because now I can trigger the zoom when hovering further into a picture if I want (see inset-[18%]). */}
                <div
                  className={`z-1 absolute ${transparentImgBg ? "inset-[18%]" : "inset-[0]"
                    } rounded-lg hover:scale-110 duration-500 transition-transform cursor-pointer`}
                  style={{ pointerEvents: "auto" }}
                  onMouseOver={(e) =>
                  (e.currentTarget.previousSibling.style.transform =
                    "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                  (e.currentTarget.previousSibling.style.transform =
                    "scale(1)")
                  }
                  onClick={() => {
                    if (projectLink) {
                      window.open(projectLink, "_blank");
                    } else if (githubLink) {
                      window.open(githubLink, "_blank")
                    } else {
                      console.log("no url is provided");
                    }
                  }}
                ></div>
              </div>
            )}
          </div>

          <div className="w-full flex flex-col items-center lg:items-start  lg:text-start gap-4">
            <div className="flex w-full flex-col text-start gap-2">
              {subTitle && <p className="text-gray dark:text-white">{subTitle}</p>}
              <h3 className="text-black dark:text-white">{title}</h3>
            </div>

            <div className="flex w-full">
              <div className="flex flex-wrap gap-4">
                {stacks &&
                  stacks.map((stack, index) => {
                    // index is automatically generated by React, to keep track of the rendered items...
                    return <SkillSmall key={index} skillName={stack} />;
                  })}
              </div>
            </div>

            <div
              onClick={() => {
                setShowFullDescription(!showFullDescription);
              }}
              className={`flex w-full text-start relative ${isOverflowing && !showFullDescription && "fade-bottom"
                }`}
            >
              {/* <p className=""> {typeof children === 'string' ? children.slice(0, 50) : children}</p> */}
              <div
                ref={contentRef}
                className={`${showFullDescription ? "" : "max-h-[200px] overflow-hidden"
                  }`}
              >
                <p className="">{children}</p>
              </div>
              {isOverflowing && !showFullDescription && (
                <div className="absolute -bottom-1 w-full flex">
                  <FaChevronDown className="text-3xl p-4 w-32 mx-auto" />
                </div>
              )}
            </div>

            {/* wrapped Link around Button instead of sending a complex onClick function to BlueButton for opening a link... */}
            {isFinished ? (
              <div className="flex w-full gap-4">
                {projectLink && (
                  <Link
                    className="no-underline"
                    href={projectLink}
                    target="_blank"
                  >
                    {" "}
                    {/* with pt-8 you also have to account for gap-4, so it's basically pt-12 */}
                    <BlueButton smallerSize={true} title={"Project Link"} />
                  </Link>
                )}
                {githubLink && (
                  <Link
                    className="no-underline"
                    href={githubLink}
                    target="_blank"
                  >
                    <BlueButton
                      smallerSize={true}
                      isGitHubLink={true}
                      title={"GitHub Link"}
                    />
                  </Link>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Card>
    </>
  );
}

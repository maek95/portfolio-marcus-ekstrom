"use client";

import { Project } from "./Projects";

export default function WorkExperience() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <Project
        imgSrc={'./kliently-headquarters-and-me-cropped.png'}
        title={"Fullstack developer at Kliently"}
        subTitle={"2024 Nov - Present day"}
        stacks={[
          "Next.js",
          "React Native",
          "Node.js",
          "MySQL",
          "Sequelize",
          "AWS",
          "CI/CD",
          "Jest",
          "Docker",
          "Tailwind",
        ]}>
        I have worked extensively with Kliently{"'"}s API (Nodejs), database {"("}MySQL with Sequelize{")"}, testing {"("}Jest{")"}, web {"("}Nextjs{")"}, and app {"("}React Native{")"}.
        <br />
        <br />
        Over the past months I have delivered multiple new features by myself and received invaluable knowledge from my supervisor and CTO Victor Axelsson.
        <br />
        <br />
        A great aspect of this workplace is working alongside my lawyer colleagues, who actively use Kliently with their clients. This has given me significant insights on how to collaborate effectively with colleagues outside of development!
      </Project>
    </div>
  )
}
"use client"

import React from "react"
import Image from "next/image"
import { Heading, SkillCard, CertificationCard } from "../components/index"
import {
  programmingLanguages,
  backEndSkills,
  designSkills,
  certifications,
  skillsSubHeaderStyles,
  sectionMediaQueries,
  sectionTopDivStyles,
} from "@/constants"

const Skills = () => (
  // pb usually 50px, now 30 because ceritifcation cards have 20px margin bottom
  <div
    className={`mont ${sectionTopDivStyles} md:pb-[30px]`}
    id="skills"
  >
    <div className={`${sectionMediaQueries}`}>
      <Heading title="SKILLS" />

      {/* Div for all 3 parts */}
      <div className="mt-[50px] flex flex-wrap">
        {/* Div for Front End skills */}
        <div className="w-1/3 h-fit lg:w-1/2 md:w-full">
          <h3 className={`${skillsSubHeaderStyles}`}>LANGUAGES</h3>
          <div className="-mt-[20px]">
            {/* Mapping over Front End skills */}
            {programmingLanguages.map((skill, index) => (
              <SkillCard
                name={skill.name}
                level={skill.level}
                key={index}
              />
            ))}
          </div>
        </div>

        {/* Div for Back End skills */}
        <div className="md:mt-[50px] w-1/3 h-fit lg:w-1/2 md:w-full">
          <h3 className={`${skillsSubHeaderStyles}`}>TOOLS</h3>
          <div className="-mt-[20px]">
            {/* Mapping over Back End Skills */}
            {backEndSkills.map((skill, index) => (
              <SkillCard
                name={skill.name}
                level={skill.level}
                key={index}
              />
            ))}
          </div>
          <div className="mt-[50px]">
            {/* Business image / skilled person illustration */}
            <Image
              src="/otherImages/businessImage.png"
              width={300}
              height={250}
              alt="businessman image"
              className="mx-auto w-[300px] h-[253px]"
            />
          </div>
        </div>

        {/* Div for Design skills & certifications*/}
        <div className="lg:mt-[50px] w-1/3 h-fit lg:w-full lg:flex lg:flex-wrap">
          {/* Design */}
          <div className="lg:w-1/2 md:w-full block">
            <h3 className={`${skillsSubHeaderStyles}`}>DESIGN</h3>
            <div className="-mt-[20px]">
              {/* Mapping over Design skills */}
              {designSkills.map((skill, index) => (
                <SkillCard
                  name={skill.name}
                  level={skill.level}
                  key={index}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="text-right mt-[50px] lg:mt-0 lg:w-1/2 md:w-full h-fit flex flex-wrap">
            <div className="text-center md:mt-[50px] w-full">
              <h3 className="text-[35px] lg:text-[40px] md:text-[35px] sm:text-[30px]">
                CERTIFICATES
              </h3>
            </div>

            <div className="lg:mt-[30px] md:w-full">
              {/* Mapping over certifications */}
              {certifications.map((certification, index) => (
                <CertificationCard
                  name={certification.name}
                  issuer={certification.issuer}
                  issueDate={certification.issueDate}
                  skillsLearnt={certification.skillsLearnt}
                  issuerLogo={certification.issuerLogo}
                  linkToCertification={certification.linkToCertification}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Skills

import { useState } from "react"

import { SiteSection } from "../../components"
import {
  AboutAccessibility,
  AboutDesign,
  AboutIntro,
  AboutNav,
  AboutCICD,
  AboutTooling,
  AboutTesting,
} from "../../content/About"
import { Layout } from "../../layouts"

import "./About.scss"

export const AboutThisSite = () => {
  const [aboutSectionToDisplay, setAboutSectionToDisplay] =
    useState<string>("Intro")

  return (
    <Layout>
      <AboutNav updateDisplay={setAboutSectionToDisplay} />
      <SiteSection>
        <div className="about">
          {aboutSectionToDisplay === "Intro" && <AboutIntro />}
          {aboutSectionToDisplay === "Design" && <AboutDesign />}
          {aboutSectionToDisplay === "Accessibility" && <AboutAccessibility />}
          {aboutSectionToDisplay === "Tooling" && <AboutTooling />}
          {aboutSectionToDisplay === "Testing" && <AboutTesting />}
          {aboutSectionToDisplay === "CI/CD" && <AboutCICD />}
        </div>
      </SiteSection>
    </Layout>
  )
}

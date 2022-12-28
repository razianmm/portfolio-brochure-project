import { useState } from "react"

import { SiteSection } from "../../components"
import { AboutAccessibility, AboutDesign, AboutIntro, AboutNav } from "../../content/About"
import { Layout } from "../../layouts"

export const AboutThisSite = () => {
  const [aboutSectionToDisplay, setAboutSectionToDisplay] =
    useState<string>("Intro")

  return (
    <Layout>
      <AboutNav updateDisplay={setAboutSectionToDisplay} />
      <SiteSection>
        <div style={{ marginTop: "3.75rem", padding: "3rem" }}>
          {aboutSectionToDisplay === "Intro" && <AboutIntro />}
          {aboutSectionToDisplay === "Design" && <AboutDesign />}
          {aboutSectionToDisplay === "Accessibility" && <AboutAccessibility />}
        </div>
      </SiteSection>
    </Layout>
  )
}

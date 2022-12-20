import { useState } from "react"
import { LeftNavigation } from "../../components/LeftNavigation/LeftNavigation"
import { TopNavigation } from "../../components/TopNavigation/TopNavigation"
import { SiteSection } from "../../components/SiteSection/SiteSection"
import { AboutIntro } from "../../content/About/AboutIntro"

export const AboutThisSite = () => {
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined)

  return (
    <>
      <TopNavigation isActive={isActive} toggleLeftNav={setIsActive} />
      <LeftNavigation isActive={isActive} />
      <SiteSection isSplit={false}>
        <div style={{ marginTop: "3.75rem", padding: "1rem" }}>
          <AboutIntro />
        </div>
      </SiteSection>
    </>
  )
}

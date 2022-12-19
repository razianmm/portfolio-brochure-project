import { ImageSection } from "./components/ImageSection/ImageSection"
import { SiteSection } from "./components/SiteSection/SiteSection"
import { TopNavigation } from "./components/TopNavigation/TopNavigation"
import { Intro } from "./content/Intro/Intro"
import { SplitOneLeft, SplitOneRight } from "./content/SplitOne"
import { WideOne } from "./content/WideOne/WideOne"
import { LeftNavigation } from "./components/LeftNavigation/LeftNavigation"
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop"

import "./App.css"
import { useState } from "react"

const App = () => {
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined)

  return (
    <div className="layout__container">
      <TopNavigation isActive={isActive} toggleLeftNav={setIsActive} />
      <LeftNavigation isActive={isActive} />
      <ImageSection />
      <SiteSection>
        <Intro />
      </SiteSection>
      <SiteSection isSplit>
        <SplitOneLeft />
        <SplitOneRight />
      </SiteSection>
      <SiteSection isSplit={false}>
        <WideOne />
      </SiteSection>
      <ScrollToTop />
    </div>
  )
}

export default App

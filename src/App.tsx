import { ImageSection } from "./components/ImageSection/ImageSection"
import { SiteSection } from "./components/SiteSection/SiteSection"
import { TopNavigation } from "./components/TopNavigation/TopNavigation"
import { Intro } from "./content/Intro/Intro"
import { SplitOneLeft, SplitOneRight } from "./content/SplitOne"
import { WideOne } from "./content/WideOne/WideOne"

import "./App.css"

function App() {
  return (
    <>
      <TopNavigation />
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
    </>
  )
}

export default App

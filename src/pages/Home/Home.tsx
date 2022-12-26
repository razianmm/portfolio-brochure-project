import { Layout } from "../../layouts"
import { ImageSection, SiteSection, ScrollToTop } from "../../components"
import {
  HomeIntro,
  SplitOneLeft,
  SplitOneRight,
  WideOne,
} from "../../content/Home"

export const Home = () => {
  return (
    <Layout>
      <ImageSection />
      <SiteSection>
        <HomeIntro />
      </SiteSection>
      <SiteSection isSplit>
        <SplitOneLeft />
        <SplitOneRight />
      </SiteSection>
      <SiteSection>
        <WideOne />
      </SiteSection>
      <ScrollToTop />
    </Layout>
  )
}

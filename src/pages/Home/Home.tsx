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
      <ImageSection isSplash source="/images/splash-image-1.jpg" />

      <SiteSection>
        <HomeIntro />
      </SiteSection>

      <SiteSection>
        <WideOne />
      </SiteSection>

      <SiteSection isSplit>
        <SplitOneLeft />
        <SplitOneRight />
      </SiteSection>

      <ScrollToTop />
    </Layout>
  )
}

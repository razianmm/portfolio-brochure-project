import { SiteSection } from "../../components"
import { AboutNav, AboutIntro } from "../../content/About"
import { Layout } from "../../layouts"

export const AboutThisSite = () => {
  return (
    <Layout>
      <AboutNav />
      <SiteSection>
        <div style={{ marginTop: "3.75rem", padding: "3rem" }}>
          <AboutIntro />
        </div>
      </SiteSection>
    </Layout>
  )
}

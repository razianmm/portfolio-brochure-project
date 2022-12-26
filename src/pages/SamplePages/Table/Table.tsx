import { Layout } from "../../../layouts"
import { SiteSection } from "../../../components"

export const Table = () => {
  return (
    <Layout>
      <SiteSection>
        <table>
          <thead>
            <td>Head 1</td>
            <td>Head 2</td>
          </thead>
          <tbody>
            <tr>
              <td>One</td>
              <td>Two</td>
            </tr>
          </tbody>
        </table>
      </SiteSection>
    </Layout>
  )
}

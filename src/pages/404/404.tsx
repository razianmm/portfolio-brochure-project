import { Link } from "react-router-dom"

import { SiteSection } from "../../components"
import { Layout } from "../../layouts"

import "./404.scss"

export const PageNotFound = () => {
  return (
    <Layout>
      <SiteSection>
        <div className="page-not-found__wrapper">
          <h1>404</h1>
          <h2>Whoops, it seems like you might've gotten lost.</h2>
          <Link to="/">Click here to return to Home page</Link>
        </div>
      </SiteSection>
    </Layout>
  )
}

import { render } from "@testing-library/react"

import { axe } from "jest-axe"

import { SiteSection } from "./SiteSection"

describe("Scroll To Top Component", () => {
  const childElement = <p>Test</p>

  it("renders successfully", () => {
    const { container } = render(<SiteSection>{childElement}</SiteSection>)

    expect(container).toBeTruthy()
  })

  it("passes axe automated testing", async () => {
    const { container } = render(<SiteSection>{childElement}</SiteSection>)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

import { render, screen } from "@testing-library/react"

import { axe } from "jest-axe"

import userEvent from "@testing-library/user-event"

import { AboutThisSite } from "./About"

describe("About This Site Component", () => {
  it("renders successfully", () => {
    render(<AboutThisSite />)

    const firstTopicNavigationElement = screen.getByText("Design")

    expect(firstTopicNavigationElement).toBeInTheDocument()
  })

  it("toggles the correct section when corresponding button is pressed", () => {
    render(<AboutThisSite />)

    const designNavigationElement = screen.getByText("Design")

    userEvent.click(designNavigationElement)

    const crossBrowserCompatibilitySectionHeading = screen.getByText(
      "Cross Browser Compatibility"
    )

    expect(crossBrowserCompatibilitySectionHeading).toBeInTheDocument()
  })

  it("passes axe automated testing", async () => {
    const { container } = render(<AboutThisSite />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

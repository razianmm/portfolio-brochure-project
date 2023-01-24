import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { MemoryRouter } from "react-router-dom"

import { AboutThisSite } from "./About"

describe("About This Site Component", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
      })),
    })
  })

  it("renders successfully", () => {
    render(
      <MemoryRouter>
        <AboutThisSite />
      </MemoryRouter>
    )

    const firstTopicNavigationElement = screen.getByText("Design")

    expect(firstTopicNavigationElement).toBeInTheDocument()
  })

  it("toggles the correct section when corresponding button is pressed", () => {
    render(
      <MemoryRouter>
        <AboutThisSite />
      </MemoryRouter>
    )

    const designNavigationElement = screen.getByText("Design")

    userEvent.click(designNavigationElement)

    const crossBrowserCompatibilitySectionHeading = screen.getByText(
      "Cross Browser Compatibility"
    )

    expect(crossBrowserCompatibilitySectionHeading).toBeInTheDocument()
  })

  it("passes axe automated testing", async () => {
    const { container } = render(
      <MemoryRouter>
        <AboutThisSite />
      </MemoryRouter>
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

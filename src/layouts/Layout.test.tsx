import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { MemoryRouter } from "react-router-dom"

import { Layout } from "./Layout"

describe("Layout Component", () => {
  const testChild = <p>Test</p>

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
        <Layout>{testChild}</Layout>
      </MemoryRouter>
    )

    const navigationElement = screen.getAllByRole("navigation")

    expect(navigationElement).toHaveLength(2)
  })

  it("successfully toggles Left Navigation when toggle button in Top Navigation is clicked", async () => {
    render(
      <MemoryRouter>
        <Layout>{testChild}</Layout>
      </MemoryRouter>
    )

    const navigationElements = screen.getAllByRole("navigation")

    const topNavigationElement = navigationElements[0]

    const leftNavigationElement = navigationElements[1]

    const topNavigationLeftButtonElement =
      within(topNavigationElement).getAllByRole("button")[0]

    userEvent.click(topNavigationLeftButtonElement)

    expect(leftNavigationElement).toHaveClass("active")

    userEvent.click(topNavigationLeftButtonElement)

    expect(leftNavigationElement).toHaveClass("hidden")
  })

  it("passes axe automated testing", async () => {
    const { container } = render(
      <MemoryRouter>
        <Layout>{testChild}</Layout>
      </MemoryRouter>
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

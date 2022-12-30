import { render, screen, within } from "@testing-library/react"

import { axe } from "jest-axe"

import userEvent from "@testing-library/user-event"

import { Layout } from "./Layout"

describe("Layout Component", () => {
  const testChild = <p>Test</p>

  it("renders successfully", () => {
    render(<Layout>{testChild}</Layout>)

    const navigationElement = screen.getAllByRole("navigation")

    expect(navigationElement).toHaveLength(2)
  })

  it("successfully toggles Left Navigation when toggle button in Top Navigation is clicked", async () => {
    render(<Layout>{testChild}</Layout>)

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
    const { container } = render(<Layout>{testChild}</Layout>)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

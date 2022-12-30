import { render, screen } from "@testing-library/react"

import { axe } from "jest-axe"

import userEvent from "@testing-library/user-event"

import { ScrollToTop } from "./ScrollToTop"

describe("Scroll To Top Component", () => {
  it("renders successfully", () => {
    render(<ScrollToTop />)

    const buttonElement = screen.getByRole("button")

    expect(buttonElement).toBeInTheDocument()
  })

  it("fires window event when button element is clicked", () => {
    const scrollToSpy = jest.fn()

    global.scrollTo = scrollToSpy

    render(<ScrollToTop />)

    const buttonElement = screen.getByRole("button")

    userEvent.click(buttonElement)

    expect(scrollToSpy).toHaveBeenCalled()
  })

  it("passes axe automated testing", async () => {
    const { container } = render(<ScrollToTop />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

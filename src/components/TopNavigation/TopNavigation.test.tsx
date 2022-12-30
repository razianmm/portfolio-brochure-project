import { render, screen } from "@testing-library/react"

import { axe } from "jest-axe"

import { TopNavigation } from "./TopNavigation"
import { RefObject } from "react"

describe("Top Navigation Component", () => {
  const mockRef = { current: {} }

  const mockToggleRef = jest.fn()

  it("renders successfully", () => {
    render(
      <TopNavigation
        isActive
        toggleLeftNav={mockToggleRef}
        toggleButtonRef={mockRef as RefObject<HTMLButtonElement>}
      />
    )

    const topNavElement = screen.getByRole("navigation")

    expect(topNavElement).toBeInTheDocument()
  })

  it("passes axe automated testing", async () => {
    const { container } = render(
      <TopNavigation
        isActive
        toggleLeftNav={mockToggleRef}
        toggleButtonRef={mockRef as RefObject<HTMLButtonElement>}
      />
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

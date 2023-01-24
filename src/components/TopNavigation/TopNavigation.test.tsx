import { render, screen } from "@testing-library/react"
import { axe } from "jest-axe"
import { RefObject } from "react"

import { TopNavigation } from "./TopNavigation"

describe("Top Navigation Component", () => {
  const mockRef = { current: {} }

  const mockToggleRef = jest.fn()

  const mockToggleAnimation = jest.fn()

  const mockToggleTheme = jest.fn()

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
      <TopNavigation
        isActive
        toggleLeftNav={mockToggleRef}
        toggleButtonRef={mockRef as RefObject<HTMLButtonElement>}
        toggleAnimation={mockToggleAnimation}
        toggleTheme={mockToggleTheme}
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
        toggleAnimation={mockToggleAnimation}
        toggleTheme={mockToggleTheme}
      />
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

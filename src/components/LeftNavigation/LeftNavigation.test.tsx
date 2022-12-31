import { render, screen } from "@testing-library/react"

import { axe } from "jest-axe"

import { LeftNavigation } from "./LeftNavigation"
import { RefObject } from "react"

describe("Left Navigation Component", () => {
  const mockRef = { current: {} }

  it("renders successfully", () => {
    render(
      <LeftNavigation
        isActive
        leftNavigationAnchorRef={mockRef as RefObject<HTMLAnchorElement>}
        leftNavigationScrimRef={mockRef as RefObject<HTMLDivElement>}
      />
    )

    const leftNavScrimElement = screen.getByRole("presentation")

    expect(leftNavScrimElement).toBeInTheDocument()
  })

  it("applies attributes conditionally when isActive prop is falsed", () => {
    render(
      <LeftNavigation
        isActive={false}
        leftNavigationAnchorRef={mockRef as RefObject<HTMLAnchorElement>}
        leftNavigationScrimRef={mockRef as RefObject<HTMLDivElement>}
      />
    )

    const leftNavigationParentElement = screen.getByRole("navigation")

    expect(leftNavigationParentElement).toHaveClass("hidden")

    const leftNavigationAnchorElements = screen.queryAllByRole("link")

    expect(leftNavigationAnchorElements.length).toEqual(0)
  })

  it("passes axe automated testing", async () => {
    const { container } = render(
      <LeftNavigation
        isActive
        leftNavigationAnchorRef={mockRef as RefObject<HTMLAnchorElement>}
        leftNavigationScrimRef={mockRef as RefObject<HTMLDivElement>}
      />
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

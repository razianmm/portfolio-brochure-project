import { render, screen } from "@testing-library/react"
import { axe } from "jest-axe"
import { RefObject } from "react"
import { MemoryRouter } from "react-router-dom"

import { LeftNavigation } from "./LeftNavigation"

describe("Left Navigation Component", () => {
  const mockRef = { current: {} }

  it("renders successfully", () => {
    render(
      <MemoryRouter>
        <LeftNavigation
          isActive
          leftNavigationAnchorRef={mockRef as RefObject<HTMLAnchorElement>}
          leftNavigationScrimRef={mockRef as RefObject<HTMLDivElement>}
        />
      </MemoryRouter>
    )

    const leftNavScrimElement = screen.getByRole("presentation")

    expect(leftNavScrimElement).toBeInTheDocument()
  })

  it("applies attributes conditionally when isActive prop is falsed", () => {
    render(
      <MemoryRouter>
        <LeftNavigation
          isActive={false}
          leftNavigationAnchorRef={mockRef as RefObject<HTMLAnchorElement>}
          leftNavigationScrimRef={mockRef as RefObject<HTMLDivElement>}
        />
      </MemoryRouter>
    )

    const leftNavigationParentElement = screen.getByRole("navigation")

    expect(leftNavigationParentElement).toHaveClass("hidden")

    const leftNavigationAnchorElements = screen.queryAllByRole("link")

    expect(leftNavigationAnchorElements.length).toEqual(0)
  })

  it("passes axe automated testing", async () => {
    const { container } = render(
      <MemoryRouter>
        <LeftNavigation
          isActive
          leftNavigationAnchorRef={mockRef as RefObject<HTMLAnchorElement>}
          leftNavigationScrimRef={mockRef as RefObject<HTMLDivElement>}
        />
      </MemoryRouter>
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

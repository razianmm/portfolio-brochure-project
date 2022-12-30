import { render, screen } from "@testing-library/react"

import { axe } from "jest-axe"

import { ImageSection } from "./ImageSection"

describe("Image Section Component", () => {
  it("renders successfully", () => {
    render(<ImageSection source="" />)

    const imageElement = screen.getByRole("img")

    expect(imageElement).toBeInTheDocument()
  })

  it("passes axe automated testing", async () => {
    const { container } = render(<ImageSection source="" />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

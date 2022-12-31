import { render, screen } from "@testing-library/react"

import { axe } from "jest-axe"

import { ImageSection } from "./ImageSection"

describe("Image Section Component", () => {
  it("renders successfully", () => {
    render(<ImageSection source="" />)

    const imageElement = screen.getByRole("img")

    expect(imageElement).toBeInTheDocument()
  })

  it("renders correctly when isSplash prop passed in", () => {
    render(<ImageSection source="" isSplash />)

    const buttonElement = screen.getAllByRole("button")

    expect(buttonElement).toHaveLength(3)
  })

  it("passes axe automated testing", async () => {
    const { container } = render(<ImageSection source="" />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

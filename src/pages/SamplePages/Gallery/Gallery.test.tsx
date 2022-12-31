import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"

import { Gallery } from "./Gallery"

describe("Gallery Component", () => {
  it("renders successfully", () => {
    render(<Gallery />)

    const selectLabelElement = screen.getByText("Number of options to display:")

    expect(selectLabelElement).toBeInTheDocument()
  })

  it("toggles the correct number of items when corresponding value chosen in select", async () => {
    render(<Gallery />)

    const selectElement = await screen.findByRole("combobox")

    userEvent.selectOptions(selectElement, "10")

    const renderedImageElements = await screen.findAllByRole("img")

    expect(renderedImageElements).toHaveLength(10)
  })

  it("passes axe automated testing", async () => {
    const { container } = render(<Gallery />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

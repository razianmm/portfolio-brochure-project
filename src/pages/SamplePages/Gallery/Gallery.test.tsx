import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"

import { Gallery } from "./Gallery"
import { mockData } from "./mockData"

describe("Gallery Component", () => {
  it("renders successfully", () => {
    render(<Gallery />)

    const selectLabelElement = screen.getByLabelText(
      "Number of options to display:"
    )

    expect(selectLabelElement).toBeInTheDocument()
  })

  it("toggles the correct number of items when corresponding value chosen in select", async () => {
    render(<Gallery />)

    const selectElement = await screen.findByRole("combobox")

    userEvent.selectOptions(selectElement, "5")

    const renderedImageElements = await screen.findAllByRole("img")

    expect(renderedImageElements).toHaveLength(5)
  })

  it("passes axe automated testing", async () => {
    const { container } = render(<Gallery />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

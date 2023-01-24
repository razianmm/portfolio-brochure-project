import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { BrowserRouter } from "react-router-dom"

import { Gallery } from "./Gallery"

describe("Gallery Component", () => {
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
      <BrowserRouter>
        <Gallery />
      </BrowserRouter>
    )

    const selectLabelElement = screen.getByText("Number of options to display:")

    expect(selectLabelElement).toBeInTheDocument()
  })

  it("toggles the correct number of items when corresponding value chosen in select", async () => {
    render(
      <BrowserRouter>
        <Gallery />
      </BrowserRouter>
    )

    const selectElement = await screen.findByRole("combobox")

    userEvent.selectOptions(selectElement, "10")

    const renderedImageElements = await screen.findAllByRole("img")

    expect(renderedImageElements).toHaveLength(10)
  })

  it("passes axe automated testing", async () => {
    const { container } = render(
      <BrowserRouter>
        <Gallery />
      </BrowserRouter>
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

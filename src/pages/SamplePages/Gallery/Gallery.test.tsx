import { render, screen } from "@testing-library/react"

import { axe } from "jest-axe"

import userEvent from "@testing-library/user-event"

import { Gallery } from "./Gallery"

import axios from "axios"

jest.mock("axios")

const mockedAxios = axios as jest.MockedFunction<typeof axios>

import { mockData } from "./mockData"

describe("Gallery Component", () => {
  it("renders successfully", () => {
    render(<Gallery />)

    const selectLabelElement = screen.getByLabelText(
      "Number of options to display:"
    )

    expect(selectLabelElement).toBeInTheDocument()
  })

  it("toggles the correct number of items when corresponding value chosen in select", () => {
    render(<Gallery />)

    mockedAxios.mockResolvedValue({
      data: mockData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    })

    const selectElement = screen.getByRole("combobox")

    userEvent.selectOptions(selectElement, "5")

    const renderedImageElements = screen.getAllByRole("img")

    expect(renderedImageElements).toHaveLength(5)
  })

  it("passes axe automated testing", async () => {
    const { container } = render(<Gallery />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

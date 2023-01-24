import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { act } from "react-dom/test-utils"
import { MemoryRouter } from "react-router-dom"

import { Table } from "./Table"

describe("Table Page Component", () => {
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

  it("renders successfully", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Table />
        </MemoryRouter>
      )
    })

    const tableElement = await screen.findByRole("table")

    expect(tableElement).toBeInTheDocument()
  })

  it("toggles the error message after corresponding user input", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Table />
        </MemoryRouter>
      )
    })

    const errorToggleSwitch = screen.getByLabelText("Error message")

    userEvent.click(errorToggleSwitch)

    const warningMessage = screen.getByText("This is a sample error message")

    expect(warningMessage).toBeInTheDocument()
  })

  it("passes axe automated testing", async () => {
    const { container } = render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

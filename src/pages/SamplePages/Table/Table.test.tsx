import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { act } from "react-dom/test-utils"

import { Table } from "./Table"

describe("Table Page Component", () => {
  it("renders successfully", async () => {
    await act(async () => {
      render(<Table />)
    })

    const tableElement = await screen.findByRole("table")

    expect(tableElement).toBeInTheDocument()
  })

  it("toggles the error message after corresponding user input", async () => {
    await act(async () => {
      render(<Table />)
    })

    const errorToggleSwitch = screen.getAllByRole("checkbox")[1]

    userEvent.click(errorToggleSwitch)

    const warningMessage = screen.getByText("This is a sample error message")

    expect(warningMessage).toBeInTheDocument()
  })

  it("passes axe automated testing", async () => {
    const { container } = render(<Table />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

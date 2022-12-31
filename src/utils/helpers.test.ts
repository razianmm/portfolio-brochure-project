import { trapFocus } from "./helpers"

describe("trapFocus", () => {
  const firstFocusableItem = { focus: jest.fn() }
  const lastFocusableItem = { focus: jest.fn() }

  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("focuses correctly when tabbing from the last focusable item", () => {
    Object.defineProperty(global.document, "activeElement", {
      value: lastFocusableItem,
      configurable: true,
    })

    trapFocus(
      { key: "Tab", preventDefault: jest.fn() } as unknown as KeyboardEvent,
      firstFocusableItem as unknown as HTMLElement,
      lastFocusableItem as unknown as HTMLElement
    )

    expect(firstFocusableItem.focus).toHaveBeenCalled()
  })

  it("focuses correctly when tabbing from the first focusable item", () => {
    Object.defineProperty(global.document, "activeElement", {
      value: firstFocusableItem,
    })

    trapFocus(
      {
        key: "Tab",
        shiftKey: true,
        preventDefault: jest.fn(),
      } as unknown as KeyboardEvent,
      firstFocusableItem as unknown as HTMLElement,
      lastFocusableItem as unknown as HTMLElement
    )

    expect(lastFocusableItem.focus).toHaveBeenCalled()
  })

  it("does nothing if key is not 'Tab", () => {
    trapFocus(
      {
        key: "Enter",
        shiftKey: true,
        preventDefault: jest.fn(),
      } as unknown as KeyboardEvent,
      firstFocusableItem as unknown as HTMLElement,
      lastFocusableItem as unknown as HTMLElement
    )

    expect(lastFocusableItem.focus).not.toHaveBeenCalled()
    expect(firstFocusableItem.focus).not.toHaveBeenCalled()
  })
})

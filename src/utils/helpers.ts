export function trapFocus(
  event: KeyboardEvent,
  firstFocusableElement: HTMLElement,
  lastFocusableElement: HTMLElement
) {
  if (event.key !== "Tab") {
    return
  }

  if (event.shiftKey && document.activeElement === firstFocusableElement) {
    event.preventDefault()
    lastFocusableElement.focus()
  }

  if (!event.shiftKey && document.activeElement === lastFocusableElement) {
    event.preventDefault()
    firstFocusableElement.focus()
  }
}

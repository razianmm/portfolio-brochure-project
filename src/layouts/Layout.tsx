import { ReactNode, useEffect, useRef, useState } from "react"

import { LeftNavigation, TopNavigation } from "../components"
import { trapFocus } from "../utils"

import "./Layout.scss"

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined)

  const topNavigationRef = useRef<HTMLButtonElement>(null)

  const leftNavigationScrimRef = useRef<HTMLDivElement>(null)

  const leftNavigationAnchorRef = useRef<HTMLAnchorElement>(null)

  function closeLeftNavOnClickAway(event: MouseEvent) {
    if (isActive && event.target === leftNavigationScrimRef.current) {
      setIsActive(false)
    }
  }

  function handleScrollWhenNavOpen() {
    if (isActive) {
      window.scrollTo(0, 0)
    }
  }

  function closeLeftNavWithEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setIsActive(false)
    }
  }

  const handleKeyDown = (
    event: KeyboardEvent,
    firstFocusableElement: HTMLElement,
    lastFocusableElement: HTMLElement
  ) => {
    if (isActive) {
      closeLeftNavWithEscapeKey(event)

      trapFocus(event, firstFocusableElement, lastFocusableElement)
    }
  }

  useEffect(() => {
    document.addEventListener("click", closeLeftNavOnClickAway)

    document.addEventListener("scroll", handleScrollWhenNavOpen)

    document.addEventListener("keydown", (event) =>
      handleKeyDown(
        event,
        topNavigationRef.current as HTMLElement,
        leftNavigationAnchorRef.current as HTMLElement
      )
    )

    return () => {
      document.removeEventListener("click", closeLeftNavOnClickAway)
      document.removeEventListener("scroll", handleScrollWhenNavOpen)
      document.removeEventListener("keydown", (event) =>
        handleKeyDown(
          event,
          topNavigationRef.current as HTMLElement,
          leftNavigationAnchorRef.current as HTMLElement
        )
      )
    }
  }, [isActive])

  return (
    <main className="layout__container">
      <TopNavigation
        isActive={isActive}
        toggleLeftNav={setIsActive}
        toggleButtonRef={topNavigationRef}
      />
      <LeftNavigation
        isActive={isActive}
        leftNavigationScrimRef={leftNavigationScrimRef}
        leftNavigationAnchorRef={leftNavigationAnchorRef}
      />
      {children}
    </main>
  )
}

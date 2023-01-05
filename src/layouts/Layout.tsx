import clsx from "clsx"
import React, { ReactNode, useEffect, useRef, useState } from "react"

import { LeftNavigation, TopNavigation } from "../components"
import { trapFocus } from "../utils"
import { Consumer } from "../utils/context"

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

  function calculateTheme(theme: string) {
    switch (theme) {
      case "dynamic":
        return "dynamic"
      case "light":
        return "light"
      case "dark":
        return "dark"
    }
  }

  return (
    <Consumer>
      {({ animationIsDisabled, toggleAnimation, toggleTheme, theme }) => (
        <main
          className={clsx(
            "layout__container",
            `site-theme--${calculateTheme(theme)}`,
            animationIsDisabled && "animation-disabled"
          )}
        >
          <TopNavigation
            isActive={isActive}
            toggleAnimation={
              toggleAnimation as React.Dispatch<React.SetStateAction<boolean>>
            }
            toggleTheme={
              toggleTheme as React.Dispatch<React.SetStateAction<string>>
            }
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
      )}
    </Consumer>
  )
}

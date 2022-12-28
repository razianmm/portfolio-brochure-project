import { ReactNode, useEffect, useRef, useState } from "react"

import { LeftNavigation, TopNavigation } from "../components"

import "./Layout.scss"

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined)

  const leftNavigationRef = useRef<HTMLDivElement>(null)

  function closeLeftNavOnClickAway(event: MouseEvent) {
    if (isActive && event.target === leftNavigationRef.current) {
      setIsActive(false)
    }
  }

  function handleScrollWhenNavOpen() {
    if (isActive) {
      window.scrollTo(0, 0)
    }
  }

  function closeLeftNavWithEscapeKey(event: KeyboardEvent) {
    if (isActive && event.key === "Escape") {
      setIsActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", closeLeftNavOnClickAway)

    document.addEventListener("scroll", handleScrollWhenNavOpen)

    document.addEventListener("keydown", closeLeftNavWithEscapeKey)

    return () => {
      document.removeEventListener("click", closeLeftNavOnClickAway)
      document.removeEventListener("scroll", handleScrollWhenNavOpen)
      document.removeEventListener("keydown", closeLeftNavWithEscapeKey)
    }
  }, [isActive])

  return (
    <div className="layout__container">
      <TopNavigation isActive={isActive} toggleLeftNav={setIsActive} />
      <LeftNavigation
        isActive={isActive}
        leftNavigationRef={leftNavigationRef}
      />
      {children}
    </div>
  )
}

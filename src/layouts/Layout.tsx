import { ReactNode, useEffect, useRef, useState } from "react"

import { TopNavigation, LeftNavigation } from "../components"

import "./Layout.scss"

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined)

  const leftNavigationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function closeLeftNavOnClickAway(event: MouseEvent) {
      console.log(isActive)
      console.log("Click detected")
      console.log(event.target)
      console.log(leftNavigationRef.current)
      if (isActive && event.target !== leftNavigationRef.current) {
        setIsActive(false)
      }
    }

    document.addEventListener("click", closeLeftNavOnClickAway)

    return () => {
      document.removeEventListener("click", closeLeftNavOnClickAway)
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

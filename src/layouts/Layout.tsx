import { ReactNode, useState } from "react"

import { TopNavigation, LeftNavigation } from "../components"

import "./Layout.scss"

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined)

  return (
    <div className="layout__container">
      <TopNavigation isActive={isActive} toggleLeftNav={setIsActive} />
      <LeftNavigation isActive={isActive} />
      {children}
    </div>
  )
}

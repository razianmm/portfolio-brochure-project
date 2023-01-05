import { RefObject } from "react"

import { TopNavigationMenuToggle } from "./TopNavigationButtons/TopNavigationMenuToggle"
import { TopNavigationSettings } from "./TopNavigationButtons/TopNavigationSettings"

import "./TopNavigation.scss"

export const TopNavigation = ({
  isActive,
  toggleLeftNav,
  toggleButtonRef,
  toggleAnimation,
  toggleTheme,
}: {
  isActive: boolean | undefined
  toggleLeftNav: React.Dispatch<React.SetStateAction<boolean | undefined>>
  toggleButtonRef: RefObject<HTMLButtonElement>
  toggleAnimation: React.Dispatch<React.SetStateAction<boolean>>
  toggleTheme: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <nav className="top-navigation">
      <div className="top-navigation__left">
        <TopNavigationMenuToggle
          isActive={isActive}
          toggleLeftNav={toggleLeftNav}
          toggleButtonRef={toggleButtonRef}
        />
        <a className="top-navigation__left__link" href="/">
          <h1 className="top-navigation__left__logo">Frontend Dev Site</h1>
        </a>
      </div>
      <div className="top-navigation__right">
        <TopNavigationSettings
          toggleAnimation={toggleAnimation}
          toggleTheme={toggleTheme}
        />
      </div>
    </nav>
  )
}

import { TopNavigationMenuToggle } from "./TopNavigationButtons/TopNavigationMenuToggle"
import { TopNavigationSettings } from "./TopNavigationButtons/TopNavigationSettings"

import "./TopNavigation.scss"

export const TopNavigation = ({
  isActive,
  toggleLeftNav,
}: {
  isActive: boolean | undefined
  toggleLeftNav: React.Dispatch<React.SetStateAction<boolean | undefined>>
}) => {
  return (
    <nav className="top-navigation">
      <div className="top-navigation__left">
        <TopNavigationMenuToggle
          isActive={isActive}
          toggleLeftNav={toggleLeftNav}
        />
        <a className="top-navigation__left__link" href="/">
          <h1 className="top-navigation__left__logo">Sample Site</h1>
        </a>
      </div>
      <div className="top-navigation__right">
        <TopNavigationSettings />
      </div>
    </nav>
  )
}

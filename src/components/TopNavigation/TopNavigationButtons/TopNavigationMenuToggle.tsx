import { RefObject } from "react"
import "../../../neo-icons.css"
import "./TopNavigationMenuToggle.scss"

export const TopNavigationMenuToggle = ({
  isActive,
  toggleLeftNav,
  toggleButtonRef,
}: {
  isActive: boolean | undefined
  toggleLeftNav: React.Dispatch<React.SetStateAction<boolean | undefined>>
  toggleButtonRef: RefObject<HTMLButtonElement>
}) => {
  return (
    <button
      className="top-nav__toggle-button neo-icon-menu"
      aria-label="Toggle menu button"
      onClick={() => toggleLeftNav(!isActive)}
      ref={toggleButtonRef}
    ></button>
  )
}

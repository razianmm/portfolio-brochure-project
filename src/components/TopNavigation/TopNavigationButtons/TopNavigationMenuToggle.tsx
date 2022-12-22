import "../../../neo-icons.css"
import "./TopNavigationMenuToggle.scss"

export const TopNavigationMenuToggle = ({
  isActive,
  toggleLeftNav,
}: {
  isActive: boolean | undefined
  toggleLeftNav: React.Dispatch<React.SetStateAction<boolean | undefined>>
}) => {
  return (
    <button
      className="top-nav__toggle-button neo-icon-menu"
      aria-label="Toggle menu button"
      onClick={() => toggleLeftNav(!isActive)}
    ></button>
  )
}

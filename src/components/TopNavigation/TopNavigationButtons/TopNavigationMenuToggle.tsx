import "../../../neo-icons.css"

export const TopNavigationMenuToggle = ({
  isActive,
  toggleLeftNav,
}: {
  isActive: boolean | undefined
  toggleLeftNav: React.Dispatch<React.SetStateAction<boolean | undefined>>
}) => {
  return (
    <button
      className="neo-icon-menu"
      aria-label="Toggle menu button"
      onClick={() => toggleLeftNav(!isActive)}
    ></button>
  )
}

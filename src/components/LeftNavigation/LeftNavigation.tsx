import "./LeftNavigation.scss"
import clsx from "clsx"

export const LeftNavigation = ({
  isActive,
}: {
  isActive: boolean | undefined
}) => {
  return (
    <div className={clsx("left-navigation", isActive ? "active" : "hidden")}>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  )
}

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
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About This Site</a>
        </li>
        <li>Razian.dev portfolio</li>
      </ul>
    </div>
  )
}
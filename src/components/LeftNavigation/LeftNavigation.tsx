import clsx from "clsx"

import "./LeftNavigation.scss"

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
          <a href="/table">Table</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/about">About This Site</a>
        </li>
        <li>
          <a href="https://www.razian.dev" target="_blank" rel="noreferrer">
            Razian.dev portfolio site
          </a>
        </li>
      </ul>
    </div>
  )
}

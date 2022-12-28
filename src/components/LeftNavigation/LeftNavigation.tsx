import clsx from "clsx"

import "./LeftNavigation.scss"
import { RefObject } from "react"

export const LeftNavigation = ({
  isActive,
  leftNavigationRef,
}: {
  isActive: boolean | undefined
  leftNavigationRef: RefObject<HTMLDivElement>
}) => {
  return (
    <div
      className={clsx("left-navigation", isActive ? "active" : "hidden")}
      ref={leftNavigationRef}
    >
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

import clsx from "clsx"
import { RefObject } from "react"

import "./LeftNavigation.scss"

export const LeftNavigation = ({
  isActive,
  leftNavigationScrimRef,
  leftNavigationAnchorRef,
}: {
  isActive: boolean | undefined
  leftNavigationScrimRef: RefObject<HTMLDivElement>
  leftNavigationAnchorRef: RefObject<HTMLAnchorElement>
}) => {
  return (
    <>
      <nav
        className={clsx("left-navigation", isActive ? "active" : "hidden")}
        aria-label="left navigation"
      >
        <ul>
          <li>
            <a href="/" aria-hidden={!isActive} tabIndex={!isActive ? -1 : 0}>
              Home
            </a>
          </li>
          <li>
            <a
              href="/table"
              aria-hidden={!isActive}
              tabIndex={!isActive ? -1 : 0}
            >
              Table
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              aria-hidden={!isActive}
              tabIndex={!isActive ? -1 : 0}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="/about"
              aria-hidden={!isActive}
              tabIndex={!isActive ? -1 : 0}
            >
              About This Site
            </a>
          </li>
          <li>
            <a
              href="https://www.razian.dev"
              target="_blank"
              rel="noreferrer"
              ref={leftNavigationAnchorRef}
              aria-hidden={!isActive}
              tabIndex={!isActive ? -1 : 0}
            >
              Razian.dev portfolio site
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="left-navigation--scrim"
        role="presentation"
        ref={leftNavigationScrimRef}
      ></div>
    </>
  )
}

import clsx from "clsx"
import { RefObject } from "react"
import { Link } from "react-router-dom"

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
            <Link to="/" aria-hidden={!isActive} tabIndex={!isActive ? -1 : 0}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/table"
              aria-hidden={!isActive}
              tabIndex={!isActive ? -1 : 0}
            >
              Table
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              aria-hidden={!isActive}
              tabIndex={!isActive ? -1 : 0}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-hidden={!isActive}
              tabIndex={!isActive ? -1 : 0}
            >
              About This Site
            </Link>
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

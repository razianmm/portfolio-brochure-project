import clsx from "clsx"
import { useEffect, useState } from "react"

import { Consumer } from "../../../utils/context"

import "../../../neo-icons.css"
import "./TopNavigationSettings.scss"

export const TopNavigationSettings = ({
  toggleAnimation,
}: {
  toggleAnimation: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const [prefersReducedAnimation, setPrefersReducedAnimation] =
    useState<boolean>(false)

  useEffect(() => {
    const animationPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )

    setPrefersReducedAnimation(animationPreference.matches ? true : false)
  }, [menuIsOpen])

  return (
    <Consumer>
      {(value) => (
        <>
          <button
            className="top-nav__settings-button neo-icon-settings"
            aria-label="Open settings menu"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          ></button>
          <div className={clsx("settings-menu", menuIsOpen && "active")}>
            <div className="settings-menu__wrapper">
              <input
                type="checkbox"
                id="animation-toggle"
                className="settings-menu__switch"
                checked={value.animationIsDisabled}
                disabled={prefersReducedAnimation}
                onChange={() => {
                  toggleAnimation(!value.animationIsDisabled)
                }}
              />
              <label htmlFor="animation-toggle">Disable animations</label>
              <p>Disable animations</p>
              <div className="settings-menu__tooltip">
                User preference set on system level
              </div>
            </div>
          </div>
        </>
      )}
    </Consumer>
  )
}

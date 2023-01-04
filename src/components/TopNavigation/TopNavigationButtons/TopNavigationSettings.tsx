import clsx from "clsx"
import { useState } from "react"

import { Consumer } from "../../../utils/context"

import "../../../neo-icons.css"
import "./TopNavigationSettings.scss"

export const TopNavigationSettings = ({
  toggleAnimation,
}: {
  toggleAnimation: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

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
                onChange={() => {
                  toggleAnimation(!value.animationIsDisabled)
                }}
              />
              <label htmlFor="animation-toggle">Disable animations</label>
              <p>Disable animations</p>
            </div>
          </div>
        </>
      )}
    </Consumer>
  )
}

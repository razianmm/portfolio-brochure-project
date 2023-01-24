import clsx from "clsx"
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react"

import { Consumer } from "../../../utils/context"

import "../../../neo-icons.css"
import "./TopNavigationSettings.scss"

export const TopNavigationSettings = ({
  toggleAnimation,
  toggleTheme,
}: {
  toggleAnimation: React.Dispatch<React.SetStateAction<boolean>>
  toggleTheme: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const [prefersReducedAnimation, setPrefersReducedAnimation] =
    useState<boolean>(false)

  const [currentTheme, setCurrentTheme] = useState<string>("dynamic")

  const themeOptions = ["dynamic", "light", "dark"]

  const settingsMenuRef = useRef<HTMLDivElement>(null)

  const settingsButtonRef = useRef<HTMLButtonElement>(null)

  const handleClickAway = useCallback(
    (event: MouseEvent) => {

      if (
        menuIsOpen &&
        event.target !== settingsButtonRef.current &&
        !settingsMenuRef.current?.contains(event.target as Node)
      ) {
        setMenuIsOpen(false)
      }
    },
    [menuIsOpen]
  )

  useEffect(() => {
    const animationPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )

    setPrefersReducedAnimation(animationPreference.matches ? true : false)
  }, [menuIsOpen])

  useEffect(() => {
    document.addEventListener("click", handleClickAway)

    return () => {
      document.removeEventListener("click", handleClickAway)
    }
  }, [menuIsOpen])

  return (
    <Consumer>
      {(value) => (
        <>
          <button
            className="top-nav__settings-button neo-icon-settings"
            aria-label="Open settings menu"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            ref={settingsButtonRef}
          ></button>
          <div
            className={clsx("settings-menu", menuIsOpen && "active")}
            ref={settingsMenuRef}
          >
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
            <div className="settings-menu__wrapper settings-menu__radios">
              <p>Theme: </p>
              {themeOptions.map((theme, index) => (
                <Fragment key={index}>
                  <input
                    type="radio"
                    id={theme}
                    name="themes"
                    value={theme}
                    checked={theme === currentTheme}
                    onChange={(e) => {
                      setCurrentTheme(e.target.value)
                      toggleTheme(e.target.value)
                    }}
                  />
                  <label htmlFor={theme}>{theme}</label>
                </Fragment>
              ))}
            </div>
          </div>
        </>
      )}
    </Consumer>
  )
}

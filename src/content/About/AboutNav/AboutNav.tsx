import { useState } from "react"
import "./AboutNav.scss"

export const AboutNav = ({
  updateDisplay,
}: {
  updateDisplay: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [activeLink, setActiveLink] = useState<string>("Intro")

  return (
    <ul className="about__links">
      <li>
        <button
          className={activeLink === "Intro" ? "active" : ""}
          onClick={() => {
            updateDisplay("Intro")
            setActiveLink("Intro")
          }}
        >
          Intro<div className="sliding-border"></div>
        </button>
      </li>
      <li>
        <button
          className={activeLink === "Design" ? "active" : ""}
          onClick={() => {
            updateDisplay("Design")
            setActiveLink("Design")
          }}
        >
          Design<div className="sliding-border"></div>
        </button>
      </li>
      <li>
        <button
          className={activeLink === "Accessibility" ? "active" : ""}
          onClick={() => {
            updateDisplay("Accessibility")
            setActiveLink("Accessibility")
          }}
        >
          Accessibility
          <div className="sliding-border"></div>
        </button>
      </li>
      <li>
        <button
          className={activeLink === "Tooling" ? "active" : ""}
          onClick={() => {
            updateDisplay("Tooling")
            setActiveLink("Tooling")
          }}
        >
          Tooling<div className="sliding-border"></div>
        </button>
      </li>
      <li>
        <button
          className={activeLink === "Testing" ? "active" : ""}
          onClick={() => {
            updateDisplay("Testing")
            setActiveLink("Testing")
          }}
        >
          Testing<div className="sliding-border"></div>
        </button>
      </li>
      <li>
        <button
          className={activeLink === "CI/CD" ? "active" : ""}
          onClick={() => {
            updateDisplay("CI/CD")
            setActiveLink("CI/CD")
          }}
        >
          CI/CD<div className="sliding-border"></div>
        </button>
      </li>
    </ul>
  )
}

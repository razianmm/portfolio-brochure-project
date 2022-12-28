import "./AboutNav.scss"

export const AboutNav = ({
  updateDisplay,
}: {
  updateDisplay: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <ul className="about__links">
      <li>
        <button onClick={() => updateDisplay("Design")}>Design</button>
      </li>
      <li>
        <button onClick={() => updateDisplay("Accessibility")}>
          Accessibility
        </button>
      </li>
      <li>
        <button onClick={() => updateDisplay("Tooling")}>Tooling</button>
      </li>
      <li>
        <button onClick={() => updateDisplay("Testing")}>Testing</button>
      </li>
      <li>
        <button onClick={() => updateDisplay("CI/CD")}>CI/CD</button>
      </li>
    </ul>
  )
}

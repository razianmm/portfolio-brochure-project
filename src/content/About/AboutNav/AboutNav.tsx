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
      <li>Accessibility</li>
      <li>Tooling</li>
      <li>Testing</li>
      <li>CI/CD</li>
    </ul>
  )
}

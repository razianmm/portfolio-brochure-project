import "./AboutIntro.scss"

import { Design } from "./Design/Design"

export const AboutIntro = () => {
  return (
    <>
      <p className="about__intro">
        This site is intended to demonstrate some basic knowledge of front end
        development best practices. It is not focused on content as much as
        context; from layout to color choices and keybaord navigability, it is
        built to demonstrate thorough knowledge of front end development best
        practices. In addition, this site is also demonstrative of some
        ancillary front end development technologies, most of which can be found
        at the Github link.
      </p>
      <p>Below is a list of the most salient features of the site:</p>
      <ul className="about__links">
        <li>Design</li>
        <li>Accessibility</li>
        <li>Tooling</li>
        <li>Testing</li>
        <li>CI/CD</li>
      </ul>
      <Design />
    </>
  )
}

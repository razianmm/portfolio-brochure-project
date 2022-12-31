import "./AboutColor.scss"

export const AboutColor = () => {
  return (
    <>
      <h3>Color</h3>
      <p>
        The colors on this site have been chosen to abide by complimentary
        colours on a colour wheel. They are also chosen to allow for the proper
        colour contrast to satisfy accessibility requirements.
      </p>

      <figure className="about-color__figure">
        <img
          src="/images/color-palette-cropped.png"
          alt="Image of color palette used on site"
        ></img>
        <figcaption>An image of colour palette chosen for the site.</figcaption>
      </figure>
    </>
  )
}

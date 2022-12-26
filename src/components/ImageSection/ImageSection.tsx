import "./ImageSection.scss"

export const ImageSection = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/images/splash-image-1.jpg"
        className="image-section--splash"
        aria-label="Placeholder label"
      ></img>
      <button
        className="image-section__scroll-down neo-icon-chevron-down"
        aria-label="Scroll down"
      ></button>
      <button
        className="image-section__scroll-down two neo-icon-chevron-down"
        aria-label="Scroll down"
      ></button>
      <button
        className="image-section__scroll-down three neo-icon-chevron-down"
        aria-label="Scroll down"
      ></button>
    </div>
  )
}

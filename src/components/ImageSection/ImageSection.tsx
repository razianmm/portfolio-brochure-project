import clsx from "clsx"

import "./ImageSection.scss"

export const ImageSection = ({
  source,
  isSplash,
}: {
  source: string
  isSplash?: boolean
}) => {
  return (
    <div className="image-section">
      <img
        src={source}
        className={isSplash ? "image-section--splash" : ""}
        aria-label="Placeholder label"
      ></img>
      {isSplash && (
        <>
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
        </>
      )}
    </div>
  )
}

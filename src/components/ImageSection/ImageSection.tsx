import { useEffect, useState } from "react"

import { useScreenSize } from "../../utils/hooks"

import "./ImageSection.scss"

export const ImageSection = () => {
  const { width, height } = useScreenSize()

  const [reducedHeight, setReducedHeight] = useState<number>(0)

  useEffect(() => {
    if (height) {
      setReducedHeight(Math.floor(height / 2))
    }
  }, [height])

  return (
    <div style={{ marginTop: "3.75rem", position: "relative" }}>
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

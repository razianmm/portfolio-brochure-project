import { useEffect, useState } from "react"

import { useScreenSize } from "../../utils/hooks"

export const ImageSection = () => {
  const { width, height } = useScreenSize()

  const [reducedHeight, setReducedHeight] = useState<number>(0)

  useEffect(() => {
    if (height) {
      setReducedHeight(Math.floor(height / 2))
    }
  }, [height])

  return (
    <div style={{ marginTop: "3.75rem" }}>
      <img
        src={`https://via.placeholder.com/${width}x${reducedHeight}`}
        aria-label="Placeholder label"
        style={{ width: "100%" }}
      ></img>
    </div>
  )
}

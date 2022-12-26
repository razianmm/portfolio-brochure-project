import clsx from "clsx"
import { useTriggerOnScroll } from "../../../utils"

import "./WideOne.scss"

export const WideOne = () => {
  const { ref, isIntersecting } = useTriggerOnScroll()

  return (
    <div className="wide-one">
      <div ref={ref}>
        <h2 className={clsx(isIntersecting && "active")}>Left</h2>
        <p className={clsx(isIntersecting && "active")} style={{ top: "15%" }}>
          Line One
        </p>
        <p className={clsx(isIntersecting && "active")} style={{ top: "25%" }}>
          Line Two
        </p>
        <p className={clsx(isIntersecting && "active")} style={{ top: "35%" }}>
          Line Three
        </p>
      </div>
    </div>
  )
}

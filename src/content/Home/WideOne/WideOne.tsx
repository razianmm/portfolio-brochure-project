import clsx from "clsx"
import { useTriggerOnScroll } from "../../../utils"

import "./WideOne.scss"

export const WideOne = () => {
  const { ref, isIntersecting } = useTriggerOnScroll()

  return (
    <div className="wide-one">
      <div ref={ref}>
        <h3 className={clsx(isIntersecting && "active")}>Responsive design</h3>
        <h3 className={clsx(isIntersecting && "active")}>Accessible design</h3>
        <h3 className={clsx(isIntersecting && "active")}>Testing</h3>
        <h3 className={clsx(isIntersecting && "active")}>Tooling</h3>
        <h3 className={clsx(isIntersecting && "active")}>CI/CD</h3>
      </div>
    </div>
  )
}

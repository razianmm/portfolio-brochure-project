import clsx from "clsx"
import { Link } from "react-router-dom"

import { useTriggerOnScroll } from "../../../utils/hooks"

import "./SplitOne.scss"

export const SplitOneLeft = () => {
  const { ref, isIntersecting } = useTriggerOnScroll()

  return (
    <div className="split-one--left">
      <div className={clsx(isIntersecting && "active")} ref={ref}>
        <Link className="split-one--left__link" to="/table">
          <h2>Visit Table page</h2>
        </Link>
      </div>
    </div>
  )
}

export const SplitOneRight = () => {
  const { ref, isIntersecting } = useTriggerOnScroll()

  return (
    <div className="split-one--right">
      <div className={clsx(isIntersecting && "active")} ref={ref}>
        <Link className="split-one--right__link" to="/about">
          <h2>Visit About page</h2>
        </Link>
      </div>
    </div>
  )
}

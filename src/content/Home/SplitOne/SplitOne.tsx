import clsx from "clsx"

import { useTriggerOnScroll } from "../../../utils/hooks"

import "./SplitOne.scss"

export const SplitOneLeft = () => {
  const { ref, isIntersecting } = useTriggerOnScroll()

  return (
    <div className="split-one--left">
      <div className={clsx(isIntersecting && "active")} ref={ref}>
        <a className="split-one--left__link" href="/table">
          <h2>Visit the Table page</h2>
        </a>
      </div>
    </div>
  )
}

export const SplitOneRight = () => {
  const { ref, isIntersecting } = useTriggerOnScroll()

  return (
    <div className="split-one--right">
      <div className={clsx(isIntersecting && "active")} ref={ref}>
        <a className="split-one--right__link" href="/table">
          <h2>Visit the About page</h2>
        </a>
      </div>
    </div>
  )
}

import clsx from "clsx"

import { useTriggerOnScroll } from "../../utils/hooks"

import "./SplitOne.scss"

export const SplitOneLeft = () => {
  const { ref, isIntersecting } = useTriggerOnScroll()

  return (
    <div className="split-one--left">
      <div className={clsx(isIntersecting && "active")} ref={ref}>
        <h2>Left</h2>
      </div>
    </div>
  )
}

export const SplitOneRight = () => {
  const { ref, isIntersecting } = useTriggerOnScroll()

  return (
    <div className="split-one--right">
      <div className={clsx(isIntersecting && "active")} ref={ref}>
        <h2>Right</h2>
      </div>
    </div>
  )
}

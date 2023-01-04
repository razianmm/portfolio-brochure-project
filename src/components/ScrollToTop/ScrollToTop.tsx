import { Consumer } from "../../utils/context"

import "./ScrollToTop.scss"

export const ScrollToTop = () => {
  return (
    <Consumer>
      {(value) => (
        <div className="scroll-to-top">
          <span className="neo-icon-chevron-up"></span>
          <button
            className="scroll-to-top__button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: value.animationIsDisabled ? "auto" : "smooth",
              })
            }
          >
            Scroll to Top
          </button>
        </div>
      )}
    </Consumer>
  )
}

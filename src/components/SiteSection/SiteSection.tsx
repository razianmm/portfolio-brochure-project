import { FC, ReactNode } from "react"

import "./SiteSection.scss"

type SiteSectionProps = {
  isSplit?: boolean | undefined
  children: ReactNode
}

export const SiteSection: FC<SiteSectionProps> = ({ isSplit, children }) => {
  return (
    <section>
      {isSplit ? (
        <div className="site-section__wrapper--split">{children}</div>
      ) : (
        <div className="site-section__wrapper--wide">{children}</div>
      )}
    </section>
  )
}

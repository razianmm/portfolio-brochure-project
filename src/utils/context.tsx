import { createContext, ReactNode, useState } from "react"

type SiteContext = {
  animationIsDisabled: boolean
  toggleAnimation: React.Dispatch<React.SetStateAction<boolean>> | undefined
}

export const { Provider, Consumer } = createContext<SiteContext>({
  animationIsDisabled: false,
  toggleAnimation: undefined,
})

export const SiteContextProvider = ({ children }: { children: ReactNode }) => {
  const [animationIsDisabled, setAnimationIsDisabled] = useState<boolean>(false)

  return (
    <Provider
      value={{ animationIsDisabled, toggleAnimation: setAnimationIsDisabled }}
    >
      {children}
    </Provider>
  )
}

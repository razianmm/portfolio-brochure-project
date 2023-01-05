import { createContext, ReactNode, useState } from "react"

type SiteContext = {
  animationIsDisabled: boolean
  toggleAnimation: React.Dispatch<React.SetStateAction<boolean>> | undefined
  theme: string
  toggleTheme: React.Dispatch<React.SetStateAction<string>> | undefined
}

export const { Provider, Consumer } = createContext<SiteContext>({
  animationIsDisabled: false,
  toggleAnimation: undefined,
  theme: "dynamic",
  toggleTheme: undefined,
})

export const SiteContextProvider = ({ children }: { children: ReactNode }) => {
  const [animationIsDisabled, setAnimationIsDisabled] = useState<boolean>(false)

  const [theme, setTheme] = useState<string>("dynamic")

  return (
    <Provider
      value={{
        animationIsDisabled,
        toggleAnimation: setAnimationIsDisabled,
        theme: theme,
        toggleTheme: setTheme,
      }}
    >
      {children}
    </Provider>
  )
}

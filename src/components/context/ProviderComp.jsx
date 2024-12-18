import React, {createContext} from 'react'

export const ThemeContext = createContext(null);
export const ProviderComp = ({children, theme}) => {
  return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
  )
}

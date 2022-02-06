import {useState, createContext} from "react"

export const HeaderContext = createContext()

function HeaderThemeProvider({children}) {
    const [theme, setTheme] = useState("index")

    return <HeaderContext.Provider value={{theme, setTheme}}>
            {children}
    </HeaderContext.Provider>
}

export default HeaderThemeProvider;
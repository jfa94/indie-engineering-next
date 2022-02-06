import {useState, createContext} from "react"

export const HeaderContext = createContext()
export const UpdateHeaderContext = createContext()

function HeaderThemeProvider({children}) {
    const [theme, setTheme] = useState("index")

    const updateTheme = (pageName) => {
        if (pageName in ["curriculum"]) {
            setTheme(pageName)
        } else {
            setTheme("index")
        }
    }

    return <HeaderContext.Provider value={theme}>
        <UpdateHeaderContext.Provider value={updateTheme}>
            {children}
        </UpdateHeaderContext.Provider>
    </HeaderContext.Provider>
}

export default HeaderThemeProvider
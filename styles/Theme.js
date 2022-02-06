import {ThemeProvider} from "styled-components"

const theme = {
    colors: {
        siteBackground: "#FEFEFE",
        headerFont: "#132B50",
        headerBackground: "#EFF3FE",
        defaultFont: "#4C5876",
        secondary: "#3E63B6",
    },
    fonts: {
        site: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        logo: ["Dosis", "sans-serif"]
    }
}

function Theme({children}) {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}

export default Theme;
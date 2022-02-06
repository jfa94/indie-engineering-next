import Header from './Header'
import Footer from "./Footer"

import HeaderThemeProvider from "../../context/HeaderContext";

function Layout(props) {
    return <>
        <HeaderThemeProvider>
            <Header/>
            {props.children}
            <Footer/>
        </HeaderThemeProvider>
    </>
}

export default Layout;
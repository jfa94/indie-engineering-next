import Theme from '../styles/Theme'
import { GlobalStyle } from '../styles/Global'
import Layout from '../components/layout/Layout'

function MyApp({Component, pageProps}) {
    return <>
        <Theme>
            <GlobalStyle/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Theme>
    </>
}

export default MyApp

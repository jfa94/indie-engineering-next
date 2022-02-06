import Theme from '../styles/Theme'
import Layout from '../components/layout/Layout'
import '../styles/global.css'

function MyApp({Component, pageProps}) {
    return <>
        <Theme>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Theme>
    </>
}

export default MyApp

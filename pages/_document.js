import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return <Html>
        <Head>
            <meta charSet="utf-8"/>
            <meta
                name="description"
                content="Want to break into the tech industry but don't know where to start? The Indie Engineering curriculum is a free resource for aspiring engineers and entrepreneurs covering the key areas of Computer Science."
            />

            <meta property="og:title" content="Indie Engineering: Learn Computer Science Online for Free"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.indgineering.com/"/>
            <meta property="og:image" content="/assets/indie-engineering-banner.png"/>

            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="shortcut icon" href="/assets/icon.png" />
            <link rel="apple-touch-icon" href="/assets/icon.png"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;700&family=Karla:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet"
            />

            <meta name="theme-color" content="#fafafa"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
}
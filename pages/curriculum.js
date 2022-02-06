import {useContext, useEffect} from "react"
import Head from "next/head"

import CurriculumSection from "../components/curriculum/CurriculumSection"
import {HeaderContext} from "../context/HeaderContext"

function Curriculum() {
    const {setTheme} = useContext(HeaderContext)

    useEffect(() => {
        setTheme("curriculum")
    })

    return <>
        <Head>
            <title>Indie Engineering: Learn Computer Science Online for Free</title>
            <meta name="description"
                  content="Want to break into the tech industry but don't know where to start? The Indie Engineering curriculum is a free resource for aspiring engineers and entrepreneurs covering the key areas of Computer Science."/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <CurriculumSection>
            Text
        </CurriculumSection>
    </>
}

export default Curriculum;
import styled from "styled-components"
import Image from "next/image"

function About(props) {
    return <InformationSection>
        <AboutImage>
            <Image src="/assets/about-image.jpg" alt="person_computer" width={(525 / 1.5)} height={525}/>
        </AboutImage>

        <TextContainer>
            <h1>About Indie Engineering</h1>
            <TextContent>
                The Indie Engineering curriculum is a free online alternative to universities and coding bootcamps,
                aimed at
                addressing some major shortcomings of self-learning. Namely, it provides structure and a comprehensive
                path to
                learning the core skills needed to launch a career in the tech industry. We provide a recommended path,
                but you
                can follow the curriculum at your own pace and in whichever order works best for you.
            </TextContent>
            <TextContent>
                Whether you want to get a job as a Software Engineer or start your own venture, you will need a complete
                toolset. The curriculum is designed to fulfil the requirements of an undergraduate Computer Science
                degree,
                excluding non-Computer Science modules. We also list additional resources to train career-specific
                skills
                (e.g. preparing for coding interviews).
            </TextContent>
            <TextContent>
                All of the chosen courses are offered by top universities such as Harvard and MIT, or well-known
                organizations
                such as the Raspberry Pi Foundation. Completing all the courses should take approximately 2 years of
                part-time
                study, or 1 year full-time.
            </TextContent>
            <TextContent>
                The material for nearly all the listed courses is available for free. However, you will often be able
                to pay a small fee to receive access to graded coursework and a certificate of completion. You might
                want to
                consider subscribing to Coursera Plus if certificates are important to you, since most courses in the
                curriculum are offered on Coursera.
            </TextContent>
        </TextContainer>
    </InformationSection>
}

const InformationSection = styled.section`
  position: relative;
  margin: auto;
  max-width: 1250px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AboutImage = styled.div`
  height: 100%;
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 1050px) {
    flex: 0;
    display: none;
  }
`

const TextContainer = styled.div`
  flex: 7;
  padding: 2rem;
`

const TextContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.45em;
  margin: 1.6rem 0;
`

export default About;
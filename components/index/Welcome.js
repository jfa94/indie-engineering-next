import styled from 'styled-components'
import Link from 'next/link'

export default function Home() {
    return <>
        <WelcomeContainer>
            <WelcomeSection>
                <WelcomeText>
                    <WelcomeTextH1>Want to work in tech but not sure where to start?</WelcomeTextH1>
                    <WelcomeTextContent>
                        Whether you want to become a Software Engineer or the founder of your own startup, there are
                        several paths
                        into the tech industry. However, the wealth of options can quickly feel overwhelming.
                    </WelcomeTextContent>
                    <span><Link href="/curriculum" passHref><ButtonText>Get started</ButtonText></Link></span>
                </WelcomeText>
                <WelcomeImage>
                    <img src="/assets/welcome-image.svg" alt="Computer Student" width="100%"/>
                </WelcomeImage>
            </WelcomeSection>
        </WelcomeContainer>
    </>

}

const WelcomeContainer = styled.div`
  background-color: ${props => props.theme.colors.headerBackground};
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1250px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const WelcomeSection = styled.section`
  padding: 7vw 0;
  max-width: 1150px;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const WelcomeText = styled.div`
  max-width: 1100px;
  padding: 1.4rem;
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    margin-top: 1rem;
    max-width: 700px;
  }
`

const WelcomeTextH1 = styled.h1`
  font-size: 2.2rem;
  line-height: 1.25em;
  margin: 0;
`

const WelcomeTextContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.45em;
  margin: 1.2rem 0;
`

const ButtonText = styled.a`
  text-decoration: none;
  display: inline-block;
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  font-weight: bold;
  padding: 0.6rem 1rem;
  border-radius: 6px;
`

const WelcomeImage = styled.div`
  margin: auto;
  flex: 4;
`
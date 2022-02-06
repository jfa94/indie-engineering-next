import styled from "styled-components"

function Footer(props) {
    return <FooterContainer>
        <FooterContent>
            <p>Built by an indie engineer. <a href="https://www.buymeacoffee.com/jalmagro">Buy me a coffee</a> to help
                maintain the site.</p>
        </FooterContent>
    </FooterContainer>
}

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.headerFont};
  color: white;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterContent = styled.div`
  max-width: 1250px;
  padding: 0 1rem;
  line-height: 1.3rem;

  a {
    color: white;
  }
`

export default Footer;
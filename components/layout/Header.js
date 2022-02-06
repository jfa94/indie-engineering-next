import {useState} from "react"
import Image from 'next/image'
import Link from 'next/link'
import styled, {css} from 'styled-components'

function Header() {
    const [mobileNavShown, setMobileNavShown] = useState(false)

    const handleMenuClick = () => {
        setMobileNavShown(prevState => {
            return !prevState
        })
    }

    return <HeaderContainer id="header-container">
        <CustomHeader>
            <MobileMenuContainer>
                <Link href="/" passHref>
                    <Logo>
                        <ImageContainer>
                            <Image src="/assets/logo.svg" alt="ComputerLogo" layout="fill" objectFit="contain"/>
                        </ImageContainer>
                        INDIE ENGINEERING
                    </Logo>
                </Link>
                <MenuButton onClick={handleMenuClick}>
                    {mobileNavShown ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
                        </svg> : <svg viewBox="0 0 24 24" width="32" height="32">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
                        </svg>}
                </MenuButton>
            </MobileMenuContainer>
            <Nav shown={mobileNavShown}>
                <Link href="/" passHref><NavLink>home</NavLink></Link>
                <Link href="/curriculum" passHref><NavLink>curriculum</NavLink></Link>
            </Nav>
        </CustomHeader>
    </HeaderContainer>
}

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.headerBackground};
  margin: 0;
  padding: 0.5rem;

  @media (max-width: 520px) {
    padding: 0.5rem 0 0 0;
  }
`

const CustomHeader = styled.header`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1250px;
  margin: auto;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`

const MobileMenuContainer = styled.div`
  flex-direction: row;
`

const MenuButton = styled.div`
  display: none;

  @media (max-width: 520px) {
    display: inline-block;
    float: right;
    vertical-align: middle;
    padding: 8px;
    margin-right: 12px;
  }
`

const Logo = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  line-height: 1.7rem;
  font-size: 2rem;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.logo[0]}, 'sans-serif';
  color: ${props => props.theme.colors.headerFont};
  padding: 0 0.5rem;
  border-radius: 7px;

  @media (max-width: 1275px) {
    margin-left: .5rem;
    font-size: 2.5vw;
  }

  @media (max-width: 1000px) {
    font-size: 24px;
  }

  @media (max-width: 520px) {
    margin-left: 0;
    padding-bottom: .5rem;
  }

  @media (max-width: 312px) {
    font-size: 20px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 50px;
  width: 50px;

  @media (max-width: 312px) {
    width: 40px;
  }

`

const Nav = styled.nav`
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-color: RGB(245, 245, 245, 0.97);
    transition: all 0.25s linear;
    ${props => props.shown ? css`
      height: 100%;
      padding: 0.5rem 0;
    ` : css`
      height: 0;
      padding: 0;
    `
  }
`

const NavLink = styled.a`
  margin-right: 1rem;
  align-self: center;
  padding: .6rem;
  color: inherit;
  border-radius: .3rem;
  text-decoration: none;

  &:hover {
    transform: translateY(-3%);
  }

  @media (max-width: 520px) {
    color: ${props => props.theme.colors.headerFont};
    margin-right: 1.5rem;
    font-size: 22px;
    align-self: flex-end;
  }
`

export default Header;
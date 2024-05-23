import React from "react"
import { StyledNavBar, ItemsWrapper } from "./navBar.styled"
import NavItem from "../../molecules/navigation/navItem/navItem"
import Navigation from "../../molecules/navigation/nav/navigation"

const NavBar = props => {
  const { className } = props

  return (
    <StyledNavBar className={className}>
      <Navigation>
        <ItemsWrapper>
          <NavItem url={`/`} iconName="apoya">
            Inicio
          </NavItem>
          <NavItem url={`/`} iconName="apoya">
            NOTICIAS
          </NavItem>
          <NavItem url={`/`} iconName="apoya">
            Metodología
          </NavItem>
          <NavItem url={`/`} iconName="apoya">
            NEWSLETTER
          </NavItem>
          <NavItem url={`/`} iconName="apoya">
            TIENDA
          </NavItem>
          <NavItem url={`/`} iconName="apoya">
            APOYA
          </NavItem>
        </ItemsWrapper>
      </Navigation>
    </StyledNavBar>
  )
}

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar

import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Menu,Container,Button} from 'semantic-ui-react'
import {isLoggedIn, logout } from "../services/auth"
const Header = ({ siteTitle }) => (
  <Menu
  size='large'
>
  <Container>
    <Menu.Item><Link to="/app/budget">Budget</Link></Menu.Item>
    <Menu.Item position='right'>
      {isLoggedIn() ? (
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          Logout
        </a>
      ) : <Button as='a' >
        Log in
      </Button>}

    </Menu.Item>
  </Container>
</Menu>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

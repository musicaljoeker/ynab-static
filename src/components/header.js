import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Menu,Container} from 'semantic-ui-react'
import { useAuth0 } from "../services/react-auth0";
import LoginButton from './loginButton';

const Header = ({ siteTitle }) => {
  const { isAuthenticated, logout } = useAuth0();
  return <Menu
  size='large'
>
  <Container>
    <Menu.Item><Link to="/app/budget">Budget</Link></Menu.Item>
    <Menu.Item><Link to="/app/accounts">Accounts</Link></Menu.Item>
    <Menu.Item><Link to="/app/categories">Categories</Link></Menu.Item>
    <Menu.Item position='right'>
      {isAuthenticated ? (
        <a
          href="/"
          onClick={() => logout()}
        >
          Logout
        </a>
      ) : <LoginButton />}
    </Menu.Item>
  </Container>
</Menu>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

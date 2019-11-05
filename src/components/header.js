import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Menu,Container,Button} from 'semantic-ui-react'
import { useAuth0 } from "../services/react-auth0";

const Header = ({ siteTitle }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
      ) : <Button as='a' onClick={() =>
            loginWithRedirect({})
          }>
        Log in
      </Button>}

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

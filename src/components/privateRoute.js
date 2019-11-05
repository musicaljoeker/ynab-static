import React from "react"
import { useAuth0 } from "../services/react-auth0";
import {Button, Loader, Dimmer} from 'semantic-ui-react'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();
  if(loading) {
    return <Dimmer active>
        < Loader />
        </Dimmer>
  }
  if (!isAuthenticated) {
    return <Button as='a' onClick={() =>
            loginWithRedirect({})
          }>Login to Continue</Button>
  }
  return <Component {...rest} />
}
export default PrivateRoute

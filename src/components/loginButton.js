import React from "react"
import {Button} from 'semantic-ui-react'
import { useAuth0 } from "../services/react-auth0";

const LoginButton = ({label}) => {
  const {loginWithRedirect } = useAuth0();
  return <Button as='a' onClick={() =>
            loginWithRedirect({})
          }>
        {label ? label : `Log in`}
      </Button>
}


export default LoginButton;

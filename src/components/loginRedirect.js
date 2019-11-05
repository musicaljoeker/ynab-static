import React from 'react';
import {navigate} from 'gatsby'
import { useAuth0 } from "../services/react-auth0";
import {Loader, Dimmer} from 'semantic-ui-react';

const LoginRedirect = () => {
  const {isAuthenticated, loginWithRedirect, loading } = useAuth0();
    if(loading) {
    return <Dimmer active>
          < Loader />
          </Dimmer>
    }
  if(!isAuthenticated) {
    loginWithRedirect({
        redirect_uri: `${window.location.origin}/app/budget`
    });
    }
    else {
        navigate('/app/budget');
    }
  return null
}


export default LoginRedirect;

import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Layout from "../components/layout"
import Header from "../components/header"
import Budget from '../components/budget';
import Accounts from '../components/accounts';
import Categories from '../components/categories';
import { Auth0Provider } from "../services/react-auth0";

const onRedirectCallback = appState => {
    if(window) {
      window.history.replaceState(
        {},
        document.title,
        '/app/budget'
      );
    }
};

const App = () => {

  return <Auth0Provider
    domain={process.env.GATSBY_AUTH0_DOMAIN}
    client_id={process.env.GATSBY_AUTH0_CLIENT_id}
    redirect_uri={window.location.href}
    onRedirectCallback={onRedirectCallback}
    >
        <Layout>
        <Header />
        <div style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}>
        <Router>
          <PrivateRoute path="/app/budget" component={Budget} />
          <PrivateRoute path="/app/accounts" component={Accounts} />
          <PrivateRoute path="/app/categories" component={Categories} />
        </Router>
        </div>
      </Layout>
    </Auth0Provider>
}
export default App

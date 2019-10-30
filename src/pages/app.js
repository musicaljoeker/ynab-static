import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Layout from "../components/layout"
import Login from "../components/login"
import Budget from '../components/budget';
import Accounts from '../components/accounts';
import Categories from '../components/categories';
const App = () => (
  <Layout>
    <Router>
      <Login path="/app/login" />
      <PrivateRoute path="/app/budget" component={Budget} />
      <PrivateRoute path="/app/accounts" component={Accounts} />
      <PrivateRoute path="/app/categories" component={Categories} />
    </Router>
  </Layout>
)
export default App

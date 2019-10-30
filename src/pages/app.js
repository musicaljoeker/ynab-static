import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Layout from "../components/layout"
import Login from "../components/login"
import Budget from '../components/budget';
const App = () => (
  <Layout>
    <Router>
      <Login path="/app/login" />
      <PrivateRoute path="/app/budget" component={Budget} />
    </Router>
  </Layout>
)
export default App

import React from "react"
import Layout from "../components/layout"
import {navigate} from 'gatsby'
const IndexPage = () => {
    navigate('/app/budget');
  return <Layout>
    <div>Login</div>
  </Layout>
}

export default IndexPage

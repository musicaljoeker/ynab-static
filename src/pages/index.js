import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
const IndexPage = () => {
  return <Layout>
    <Link to="/app/budget">Login to Continue</Link>
  </Layout>
}

export default IndexPage

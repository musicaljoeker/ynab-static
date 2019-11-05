import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import {Button,Container, Message} from 'semantic-ui-react'
const IndexPage = () => {
  return <Layout>
  <div style={{
          margin: `2em auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}>
    <Message>
        <Message.Header>Welcome</Message.Header>
        <p>You must be logged in to view this site. </p>
    </Message>
    <Container><Button><Link to="/app/login">Login to Continue</Link></Button></Container>
    </div>
  </Layout>
}

export default IndexPage

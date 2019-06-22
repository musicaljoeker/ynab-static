import React from "react"

import Layout from "../components/layout"
import Accounts from "../components/accounts";
import Categories from "../components/categories";
import { Divider } from 'semantic-ui-react'
const IndexPage = () => (
  <Layout>
    <Accounts />
    <Divider />
    <Categories />
  </Layout>
)

export default IndexPage

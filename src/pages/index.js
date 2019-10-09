import React from "react"

import Layout from "../components/layout"
import Accounts from "../components/accounts";
import Categories from "../components/categories";
import { Divider } from 'semantic-ui-react'
const IndexPage = () => (
  <Layout>
    <nav>
      <ul>
        <li><a href="#accounts">Accounts</a></li>
        <li><a href="#categories">Categories</a></li>
      </ul>
    </nav>
    <Accounts id="accounts"/>
    <Divider />
    <Categories id="categories"/>
  </Layout>
)

export default IndexPage

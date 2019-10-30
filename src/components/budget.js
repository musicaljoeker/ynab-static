import React from "react"
import Accounts from "./accounts";
import Categories from "./categories";
import { Divider } from 'semantic-ui-react'

const Budget = () => (
  <>
    <Accounts />
    <Divider />
    <Categories />
  </>
)

export default Budget

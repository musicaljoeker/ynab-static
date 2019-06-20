import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function BudgetName() {
  const {ynabBudget} = useStaticQuery(
    graphql`
      query YNABBudget {
        ynabBudget {
          name
          last_month
        }
      }
    `
  )
  return (
    <div>{ynabBudget.name}</div>
  )
}


export default BudgetName

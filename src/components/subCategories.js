import React from "react"
import numeral from 'numeral';

function SubCategories({group}) {
  return  <div><h3>Categories</h3>
    <ul>
      {group.map( category => (
        <li key={category.id}>
          <h4>{category.name}</h4>
          <div>Balance: {numeral(category.balance / 1000).format('$0,0.00')}</div>
          <div>Spent: {numeral(category.activity / 1000).format('$0,0.00')}</div>
        </li>
      ))}
    </ul></div>
}

export default SubCategories

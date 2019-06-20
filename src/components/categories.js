import React from "react"
import { getCategories } from "../hooks/categories"
import SubCategories from './subCategories';

function Categories() {
  let category_groups = getCategories();
  return <ul>
    {category_groups.map(group => (
      <li key={group.id}>
      <h2>{group.name}</h2>
      <SubCategories group={group.categories} />

      </li>
    ))}
    </ul>
}

export default Categories

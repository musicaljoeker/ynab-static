import React from "react"
import { getCategories } from "../../hooks/categories"
import SubCategories from '../subCategories';
import { Label } from 'semantic-ui-react'

function Categories() {
  let category_groups = getCategories();
  return <>
    {category_groups.map(group => (
    	<>
      <Label>
      	{group.name}
      </Label>
      <SubCategories group={group.categories} />
      </>
    ))}
    </>
}

export default Categories

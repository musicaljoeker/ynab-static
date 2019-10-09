import React from "react"
import { GetCategories } from "../../hooks/categories"
import SubCategories from '../subCategories';
import { Label } from 'semantic-ui-react'

function Categories(props) {
  let category_groups = GetCategories();
  return <div id={props.id}>
    {category_groups.map(group => (
    	<>
      <Label>
      	{group.name}
      </Label>
      <SubCategories group={group.categories} />
      </>
    ))}
    </div>
}

export default Categories

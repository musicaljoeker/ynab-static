import React from "react"
import { GetCategories } from "../../hooks/categories"
import SubCategories from '../subCategories';
import { Label } from 'semantic-ui-react'

function Categories(props) {
  let category_groups = GetCategories();
  return <div id={props.id}>
    {category_groups.filter(group => filterGroups(group)).map(group => (
    	<div key={group.id}>
      <Label>
      	{group.name}
      </Label>
      <SubCategories group={group.categories} />
      </div>
    ))}
    </div>
}

export default Categories

function filterGroups(group) {
  return ['c45406dd-67b7-47bb-a11f-846c48efc0bb',
          'f0299df6-13a7-4d35-94cd-5dd02da94966',
          '9d2c3f9a-e906-455e-a00a-2c069e77236a'].indexOf(group.id) === -1
}

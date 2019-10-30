import React from "react"
import Currency from '../currency';
import { Table } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react'
function SubCategories({group}) {
  let goals = group.reduce( (value, category) => {return value || validGoals(category.goal_type)}, false);
  return <Table celled padded unstackable size='small'>
  	<Table.Header>
		<Table.Row>
	      <Table.HeaderCell singleLine>Category</Table.HeaderCell>
	      <Table.HeaderCell>Available</Table.HeaderCell>
	      <Table.HeaderCell>Spent</Table.HeaderCell>
        {goals && <Table.HeaderCell>Goal Progress</Table.HeaderCell>}
	    </Table.Row>
  	</Table.Header>
  	<Table.Body>
      {group.map( category => (
      	<Table.Row>
      	 <Table.Cell>{category.name}
      	 </Table.Cell>
      	 <Table.Cell><Currency cents={category.balance} />
      	 </Table.Cell>
      	 <Table.Cell><Currency cents={category.activity} />
      	 </Table.Cell>
         {goals && <Table.Cell>{validGoals(category.goal_type) && <Progress color='teal' percent={category.goal_percentage_complete}><Currency cents={category.goal_target}/></Progress>}
         </Table.Cell>}
  	 	</Table.Row>
      ))}
    </Table.Body>
    </Table>
}

export default SubCategories

function validGoals(goal_type) {
  return goal_type === 'TBD' || goal_type === 'NEED' || goal_type === 'MF';
}

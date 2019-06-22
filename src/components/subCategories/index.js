import React from "react"
import Currency from '../currency';
import { Table } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react'
function SubCategories({group}) {
  let goals = group.reduce( (value, category) => {return value || category.goal_type === 'TBD'}, false);
  return <Table celled padded>
  	<Table.Header>
		<Table.Row>
	      <Table.HeaderCell singleLine>Category Name</Table.HeaderCell>
	      <Table.HeaderCell>Balance</Table.HeaderCell>
	      <Table.HeaderCell>Activity</Table.HeaderCell>
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
         {goals && <Table.Cell>{category.goal_type === 'TBD' && <Progress color='teal' percent={category.goal_percentage_complete} />}
         </Table.Cell>}
  	 	</Table.Row>
      ))}
    </Table.Body>
    </Table>
}

export default SubCategories

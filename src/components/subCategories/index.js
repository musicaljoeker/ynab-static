import React from "react"
import Currency from '../currency';
import { Table } from 'semantic-ui-react'

function SubCategories({group}) {
  return <Table celled padded>
  	<Table.Header>
		<Table.Row>
	      <Table.HeaderCell singleLine>Category Name</Table.HeaderCell>
	      <Table.HeaderCell>Balance</Table.HeaderCell>
	      <Table.HeaderCell>Activity</Table.HeaderCell>
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
  	 	</Table.Row>
      ))}
    </Table.Body>
    </Table>
}

export default SubCategories

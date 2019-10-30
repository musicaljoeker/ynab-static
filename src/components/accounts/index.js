import React from "react"
import { GetAccounts } from "../../hooks/accounts"
import Currency from '../currency';
import { Table } from 'semantic-ui-react'

function Accounts(props) {
  let accounts = GetAccounts();
  return <Table celled padded unstackable size='small' id={props.id}>
  	<Table.Header>
		<Table.Row>
	      <Table.HeaderCell singleLine>Account Name</Table.HeaderCell>
	      <Table.HeaderCell>Balance</Table.HeaderCell>
	    </Table.Row>
  	</Table.Header>

  <Table.Body>
    {accounts.map(account => (
       <Table.Row key={account.id}>
        <Table.Cell>{account.name}
        </Table.Cell>
        <Table.Cell><Currency cents={account.balance} />
        </Table.Cell>
        </Table.Row>
    ))}
     </Table.Body>
     </Table>
}

export default Accounts

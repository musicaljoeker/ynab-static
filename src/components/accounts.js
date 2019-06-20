import React from "react"
import { getAccounts } from "../hooks/accounts"
import numeral from 'numeral';

function Accounts() {
  let accounts = getAccounts();
  return <ul>
    {accounts.map(account => (
      <li key={account.id}>
      <h2>{account.name}</h2>
      <span>{numeral(account.balance / 1000).format('$0,0.00')}</span>
      </li>
    ))}
    </ul>
}

export default Accounts

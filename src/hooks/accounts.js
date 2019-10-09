import { useStaticQuery, graphql } from "gatsby"

export const GetAccounts = () => {
	const  {ynabBudget} = useStaticQuery(
	  graphql`
	    query accounts {
	      ynabBudget(accounts: {}) {
	        accounts {
	          balance
	          id
	          name
	          cleared_balance
	          on_budget
	        }
	      }
	    }
	  `
	);

	return ynabBudget.accounts;
}

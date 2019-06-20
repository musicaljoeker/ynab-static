import { useStaticQuery, graphql } from "gatsby"

export const getAccounts = () => {
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

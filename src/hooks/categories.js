import { useStaticQuery, graphql } from "gatsby"

export const GetCategories = () => {
	const  {ynabBudget} = useStaticQuery(
	  graphql`
	    query Accounts {
	      ynabBudget {
	        category_groups {
	          categories {
	            name
	            balance
	            budgeted
	            activity
	            goal_target
	            goal_percentage_complete
	            id
	            note
	            goal_type
	            goal_target_month
	          }
	          name
	          id
	        }
	      }
	    }

	  `
	);

	return ynabBudget.category_groups;
}

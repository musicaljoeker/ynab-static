
const processBudget = async function(budget, api, createContentDigest, createNodeId) {
    const accountResponse = await api.accounts.getAccounts(budget.id);
    budget.accounts = accountResponse.data.accounts.filter( (account) => !account.closed).filter( (account) => account.on_budget );
    budget.otherAccounts = accountResponse.data.accounts.filter( (account) => !account.closed).filter( (account) => !account.on_budget );
    budget.closedAccounts = accountResponse.data.accounts.filter( (account) => account.closed);
    const categoryResponse = await api.categories.getCategories(budget.id)
    budget.category_groups = categoryResponse.data.category_groups.map( (group) => {
      group.categories = group.categories.filter( (category) => !category.hidden);
      return group;
    }).filter( ({categories}) => categories.length !== 0).filter( ({name}) => name != 'Internal Master Category');

    const nodeId = createNodeId(`ynab-budget-${budget.id}`)
    const nodeData = Object.assign({}, budget, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `YNABBudget`,
        content: JSON.stringify(budget),
        contentDigest: createContentDigest(budget),
      },
    })
    return nodeData
  }

module.exports = processBudget

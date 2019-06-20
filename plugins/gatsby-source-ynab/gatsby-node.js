const ynab = require('ynab');
const process_budget = require('./process_budget.js')
const api = new ynab.API(process.env.YNAB_API_KEY);
exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins
  budgetsResponse = await api.budgets.getBudgets()
  const budgets = budgetsResponse.data.budgets;
  for(let budget of budgets) {
    const nodeData = await process_budget(budget, api, createContentDigest, createNodeId)
	  // Use Gatsby's createNode helper to create a node from the node data
	  createNode(nodeData)
  }
}

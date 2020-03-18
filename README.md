# YNAB Static Site

This is a work in progress static site allowing you to generate a static version of your budget for sharing. I use this with my partner to allow them to see our current account balances and budget without the need to share a YNAB password. 

This uses Gatsby and a custom plugin which pulls the data from the YNAB API and builds out a static version of the site. This means no API keys are needed to serve the site just to build. It is also offline ready so can be installed as an "app" on mobile devices. 

I use this with Netlify for an easy hosting option. 

I have auth setup with Auth0, this allows users to be added and give them the ability to set and reset their own passwords. I disabled registration so users can only be added by an admin of the Auth0 Account. 

*Note on Auth*

This is a static site with a React front end. When we build the static site we query the YNAB api and get your budget data. Since we need that data to render the app it's stored as JSON in the site. If someone determined the path to this JSON file they could read some of the details of your budget, including account names, account balances, budget categories, amounts, and spending. So please be concious of this. 

### Tasks before first RC release

- [x] Change out auth for string matching to use auth0 or netlify identity. 
- [ ] Improve Category Navigation

### Deployment 

- You'll need to set the following `env` variables to deploy. 
- `YNAB_API_KEY` - The API key from YNAB
- `GATSBY_USERNAME` - The username used to login to the site
- `GATSBY_PASSWORD` - The password used to login to the site
- `GATSBY_AUTH0_DOMAIN` The domain of your Auth0 App
- `GATSBY_AUTH0_CLIENT_id` The client id of your Aut0 App



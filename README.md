# YNAB Static Site

This is a work in progress static site allowing you to generate a static version of your budget for sharing. I use this with my partner to allow them to see our current account balances and budget without the need to share a YNAB password. 

This uses Gatsby and a custom plugin which pulls the data from the YNAB API and builds out a static version of the site. This means no API keys are needed to serve the site just to build. It is also offline ready so can be installed as an "app" on mobile devices. 

I use this with Netlify for an easy hosting option. 

### Tasks before first RC release

- [ ] Change out auth for string matching to use auth0 or netlify identity. 
- [ ] Improved Category Navigation

### Deployment 

- You'll need to set the following `env` variables to deploy. 
- `YNAB_API_KEY` - The API key from YNAB
- `GATSBY_USERNAME` - The username used to login to the site
- `GATSBY_PASSWORD` - The password used to login to the site


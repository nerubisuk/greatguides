/* Get environment variable */
const env = process.env

let authConfig

switch (env) {
  case 'production':
    authConfig = {
      AUTH_CONFIG: {
        domain: 'actively-me.auth0.com',
        clientId: 'OpXwYlLnBcwXCOn3vu730Z9RUoXc8Bot',
        siteUrl: 'http://greatguides-dev.s3-website-us-west-1.amazonaws.com/',
        logoutUrl: 'https://actively-me.auth0.com/v2/logout',
        callbackUrl: 'http://greatguides-dev.s3-website-us-west-1.amazonaws.com/callback',
      },
    }
    break

  default:
    authConfig = {
      AUTH_CONFIG: {
        domain: 'activelyme.auth0.com',
        clientId: 'N7kW1H0nDWrlwxTIwg1Fbb2RHggHlcUB',
        siteUrl: 'http://localhost:3000',
        logoutUrl: 'https://activelyme.auth0.com/v2/logout',
        callbackUrl: 'http://localhost:3000/callback',
      },
    }
}

export default authConfig

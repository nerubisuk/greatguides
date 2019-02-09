// TODO: REWRITE THAT SHAME BELOW

export function environment() {
  return 'development';
  // return 'production'
}


export function getAuth0Object() {
  const env = environment();
  if (env === 'production') {
    return {
      'AUTH_CONFIG':{
        'domain': 'actively-me.auth0.com',
        'clientId': 'OpXwYlLnBcwXCOn3vu730Z9RUoXc8Bot',
        'siteUrl': 'https://www.greatguides.com',
        'logoutUrl': 'https://actively-me.auth0.com/v2/logout',
        'callbackUrl': 'https://www.greatguides.com/callback',
      }
    };
  }else if (env === 'staging') {
    return {
      'AUTH_CONFIG':{
        'domain': 'activelyme.auth0.com',
        'clientId': 'cAmdsZSi8R6G8k6j4V5POyxpoueFEVbA',
        'siteUrl': 'https://activelyme-cd63e.firebaseapp.com',
        'logoutUrl': 'https://activelyme.auth0.com/v2/logout',
        'callbackUrl': 'https://activelyme-cd63e.firebaseapp.com/callback',
      }
    };
  }else if (env === 'awsStaging') {
    return {
      'AUTH_CONFIG':{
        'domain': 'activelyme.auth0.com',
        'clientId': 'uAzm5XvojLtys2D28fgddhLkzsjiir1o',
        'siteUrl': 'http://activelyme-test-code.s3-website-us-east-1.amazonaws.com',
        'logoutUrl': 'https://activelyme.auth0.com/v2/logout',
        'callbackUrl': 'http://activelyme-test-code.s3-website-us-east-1.amazonaws.com/callback',
      }
    };
  }else if (env === 'development') {
    return {
      'AUTH_CONFIG':{
        'domain': 'activelyme.auth0.com',
        'clientId': 'N7kW1H0nDWrlwxTIwg1Fbb2RHggHlcUB',
        'siteUrl': 'http://localhost:3000',
        'logoutUrl': 'https://activelyme.auth0.com/v2/logout',
        'callbackUrl': 'http://localhost:3000/callback',
      }
    };
  }}

export function getActivelymeCoreEnvUrl() {
  const env = environment();
  if (env === 'production') {
    return 'https://api.services.activelyme.com/';
  } else {
    return 'https://api-test.services.activelyme.com/';
  }
}

export function getActivelymePlaygroundEnvUrl() {
  const env = environment();
  if (env === 'production') {
    return 'https://api.services.activelyme.com/graphql';
  } else {
    return 'https://api-test.services.activelyme.com/graphql';
  }
}
/**
 * @file Holds auth0 setup
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import auth0 from 'auth0-js';

/* Gets variables from environment */
const {
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_CALLBACK_URL,
} = process.env;

class Auth {
  accessToken;
  idToken;
  expiresAt;
  user = {};

  auth0 = new auth0.WebAuth({
    domain: REACT_APP_AUTH0_DOMAIN,
    clientID: REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: REACT_APP_AUTH0_CALLBACK_URL,
    audience: `https://${REACT_APP_AUTH0_DOMAIN}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid email offline_access picture profile',
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signup = this.signup.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
  }

  getIdToken() {
    return this.idToken;
  }

  login() {
    this.auth0.authorize();
  }

  signup() {
    this.auth0.authorize({
      login_hint: 'signUp',
    });
  }

  handleAuthentication(history) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult, history);
      } else if (err) {
        history.push('/authError');
        console.log(err);
      }
    });
  }

  getUserData() {
    return this.user;
  }

  setSession(authResult, history) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // Set some user data
    const {
      idTokenPayload: { email, nickname, picture },
    } = authResult;
    this.user.email = email;
    this.user.nickname = nickname;
    this.user.picture = picture;

    // Navigate to the home route
    history.push('/');
  }

  renewSession(history) {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult, history);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
      }
    });
  }

  logout(history) {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    this.user = {};

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // Navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}

export default new Auth();

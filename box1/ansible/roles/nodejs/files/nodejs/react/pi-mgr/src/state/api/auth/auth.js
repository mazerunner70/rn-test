import auth0 from 'auth0-js';
import history from './history';

export default class Auth {

  requestedScopes = 'openid profile dependencies:view dependencies:edit';

  auth0 = new auth0.WebAuth({
    domain: 'test1-auth.eu.auth0.com',
    clientID: '_MHhkxuysNcAl5B3qIH2gMQq2L1IvIj2',
    redirectUri: 'http://localhostt:3000/callback',
    responseType: 'token id_token',
    audience: 'https://localhostt:6240',
    scope: this.requestedScopes
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  userProfile;

  login() {
    this.auth0.authorize({
      prompt: 'login',
    });
  }


  handleAuthentication() {
    try{
      this.auth0.parseHash((err, authResult) => {
        console.log('443', authResult);
          if (authResult && authResult.accessToken && authResult.idToken) {
            console.log('444');
            this.setSession(authResult);
              history.replace('/home');
          } else if (err) {
            console.log('445', err);
              history.replace('/home');
          }
      });
      console.log('446');
    }catch(err) {
      console.log('777',err);
    }
  }

  getProfile() {
    let accessToken = this.getAccessToken();
    return new Promise((resolve, reject) => {
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          resolve(profile);
        }
        reject(err);
      })
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    const scopes = authResult.scope || this.requestedScopes || '';
    console.log('826', scopes);
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('scopes', JSON.stringify(scopes));
    localStorage.setItem('expires_at', expiresAt);
    console.log('556', authResult.expiresIn, expiresAt);
    history.replace('/home');
  }

  logout() {
    console.log('773');
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('scopes');
    localStorage.removeItem('expires_at');
    history.replaceState('/home');
  }
  getAccessToken = () => this.getItem('access_token', 'Access Token');
  getScopes = () => this.getItem('scopes', 'Scopes');

  getItem(id, description) {
    const item = localStorage.getItem(id);
    if (!item) {
      throw new Error(`No ${description} found`);
    }
    return item;
  }

  userHasScopes(scopes) {
    const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log('177', expiresAt - new Date().getTime());
    return new Date().getTime() < expiresAt;
  }


}
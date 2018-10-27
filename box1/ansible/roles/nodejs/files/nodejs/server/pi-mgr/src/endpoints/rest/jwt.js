import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';


const checkJwt = jwt({

  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://test1-auth.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://localhostt:6240',
  issuer: 'https://test1-auth.eu.auth0.com/',
  algorithms: ['RS256']
})

const setScope = (scopesArray) => jwtAuthz(scopesArray);

export {
  checkJwt,
  setScope,
}
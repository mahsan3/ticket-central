const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint

// Create middleware for checking the JWT
module.exports = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-ttb978df.auth0.com/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: `http://localhost:3001`,
    issuer: `https://dev-ttb978df.auth0.com/`,
    algorithms: ['RS256']
});
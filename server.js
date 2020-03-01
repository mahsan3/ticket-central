const express = require('express');
const app = express();
const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint
const bodyParser = require('body-parser');
const appRoutes = require('./api/routes/routes');
const models = require('./api/models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Create middleware for checking the JWT
const checkJwt = jwt({
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

app.use('/api', appRoutes);

models.sequelize.sync({alter: true}).then(() => {
    console.log('[X] Sequelize Successfully synced.');
}).catch(err => {
    throw new Error(err);
});

const port = process.env.PORT || '3001';
const ip   = process.env.NODE_IP || 'localhost';

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
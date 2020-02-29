// Brings together all the other routes here
const routes = require('express').Router();

routes.get('/heart-beat', (req, res) => {
    res.status(200).json({ message: 'API is up.' });
});

routes.use('/user', () => {});
routes.use('/ticket', () => {});


module.exports = routes;
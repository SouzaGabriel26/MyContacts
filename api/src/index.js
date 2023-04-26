const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json()); // Middleware que permite que a API receba requisições com o body
app.use(cors);
app.use(routes); // Express entende as rotas como Middlewares, por isso 'app.use'
app.use(errorHandler);

app.listen(3001, () => console.log('Server started at http://localhost:3001'));

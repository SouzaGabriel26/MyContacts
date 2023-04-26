const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json()); // Middleware que permite que a API receba requisições com o body
app.use(routes); // Express entende as rotas como Middlewares, por isso 'app.use'
app.use((error, request, response, next) => {
  console.log('Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3001, () => console.log('Server started at http://localhost:3001'));

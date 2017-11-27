// Import express 
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importar rotas da API
var routes = require('./api/routes/Routes');
routes(app);

// Iniciar Server
app.listen(port);

console.log('REST API iniciada na porta: ' + port);

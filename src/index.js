const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

//Fazer com que o express entenda os jsons
app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333);
const express = require('express');
const routes = require('./routes');
const {erros} = require('celebrate');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(erros);
app.listen(3333);

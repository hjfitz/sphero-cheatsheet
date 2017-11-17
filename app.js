const path = require('path');
const express = require('express');
const logger = require('morgan')('dev');
const compression = require('compression')();

const app = express();
const public = path.join(__dirname, 'docs');

app.use(logger);
app.use(compression);

app.use(express.static(public));

module.exports = app;
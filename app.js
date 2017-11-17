const path = require('path');
const express = require('express');
const logger = require('morgan')('dev');
const compression = require('compression')();

const app = express();
const public = path.join(__dirname, 'public');
const index = path.join(public, 'index.html');

app.use(logger);
app.use(compression);

app.use('/public', express.static(public));
app.get('/', (req, res) => res.sendFile(index));

module.exports = app;
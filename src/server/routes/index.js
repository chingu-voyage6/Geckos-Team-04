const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const services = require('./service');
const messages = require('./message');
const projects = require('./project');

const app = express.Router();

// Serve static content using express
app.use(express.static(`${__dirname} + /public`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Sanity check
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Hello and welcome! :)' });
});

const secured = express.Router();

secured.use((req, res, next) => {
  const token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, req.app.settings.secret, (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'invalid token' });
      }
      req.decoded = decoded;
      next();
    });
  }
  return res.json({ success: false, message: 'No token provided.' });
});

// Protected routes
secured.use('/messages', messages);
secured.use('/projects', projects);

// Normal routes
app.use('/secured', secured);
app.use('/services', services);

module.exports = app;

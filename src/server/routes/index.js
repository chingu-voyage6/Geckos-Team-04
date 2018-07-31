const express = require('express');
const jwt = require('jsonwebtoken');

const services = require('./service');
const messages = require('./message');
const projects = require('./project');
const user = require('./user.route');
const auth = require('./auth.route');

const app = express.Router();

// Serve static content using express
app.use(express.static(`${__dirname} + /public`));

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

// User Authentication
app.use('/user', user);
app.use('/auth', auth);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: `${err.name}: ${err.message}` });
  }
  // next();
});

module.exports = app;

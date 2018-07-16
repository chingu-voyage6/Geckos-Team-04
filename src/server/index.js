const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

const config = require('./config');

// Sanity check
app.get('/', (req, res) => console.log('Got a request!'));

app.set('dbUrl', config.db[app.settings.env]);
mongoose.connect(app.get('dbUrl'));

app.use('/api/v1/', routes);

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}!`));

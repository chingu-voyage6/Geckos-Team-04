const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

const config = require('./config');

app.set('secret', config.secret);
app.set('dbUrl', config.db[app.settings.env]);
mongoose.connect(app.get('dbUrl'));

app.use('/api/v1/', routes);

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}!`));

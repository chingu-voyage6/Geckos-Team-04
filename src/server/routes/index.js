import express from 'express';
import bodyParser from 'body-parser';
import services from './service';

const app = express.Router();

// Serve static content using express
app.use(express.static(`${__dirname} + /public`));

// We'll need body parser for POST information.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Sanity check
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Got a request to the main API url' });
});

/* Routes assignment */
app.use('/services', services);

export default app;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/martierra');

const tourRoutes = require('./routes/tours');

app.use('/api/tours', tourRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
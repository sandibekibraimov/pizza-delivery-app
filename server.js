const express = require('express');
const dotenv = require('dotenv');

const ConnectDB = require('./config/ConnectDB');

dotenv.config();
const app = express();

ConnectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('working');
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});

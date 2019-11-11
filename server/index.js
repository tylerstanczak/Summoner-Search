const express = require('express');
const { Kayn, REGIONS } = require('kayn');
const API_KEY = require('../key.js');
const cors = require('cors');
const port = 3000;

const kayn = Kayn(API_KEY)();
const app = express();

app.use(express.static('dist'));
app.use(cors());

app.get('/search/:name', (req, res) => {
  kayn.Summoner.by.name(req.params.name)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.send(error);
    })
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
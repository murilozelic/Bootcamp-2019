const express = require('express');

const server = express();

server.get('', (req, res) => {
  return res.send('Aasdasdaso');
});

server.listen(3000);
const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3000;
const IP = "http://localhost";

app.get('/', (req, res) => {
  console.log(req.url)
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Server is listening ' + IP + ":" + PORT)
})

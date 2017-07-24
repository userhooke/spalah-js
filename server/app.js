const express = require('express');
const app = express();
const fs = require('fs');

const PORT = process.env.PORT;
const IP = process.env.IP;

app.get('/', (req, res) => {
  console.log(req.url)
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Server is listening ' + IP + ":" + PORT)
})

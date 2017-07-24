const express = require('express')
const app = express()
const PORT = 3000;
const IP = "http://localhost";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Server is listening ' + IP + ":" + PORT)
})

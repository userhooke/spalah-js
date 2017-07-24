const express = require('express')
const app = express()
const PORT = process.env.PORT;
const IP = process.env.IP;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Server is listening ' + IP + ":" + PORT)
})

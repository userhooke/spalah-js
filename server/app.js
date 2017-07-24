<<<<<<< HEAD
const express = require('express')
const app = express()
const PORT = process.env.PORT;
const IP = process.env.IP;
=======
const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3000;
const IP = "http://localhost";
>>>>>>> 23ddb21ef11597a1796e2022096cfb22dafbdb18

app.get('/', (req, res) => {
  console.log(req.url)
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Server is listening ' + IP + ":" + PORT)
})

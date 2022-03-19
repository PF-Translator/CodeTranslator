const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
//require controller that we setup here
const router = ''

app.use(express.static('client'));
app.use(express(json()));


//insert global handler


app.listen(port, () => {
  console.log(`Always listenong on port: ${port}`);
})

module.exports = app;
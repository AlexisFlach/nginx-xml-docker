const express = require('express')
const app = express();
const db = require('./db.json')
const PORT = process.env.PORT;
const APP_ID = process.env.APP_ID;

app.get('/api', (req, res) => {
  res.send(db)
})




app.listen(PORT, () => {
  console.log(`Server listens on ${PORT}`);
})
const express = require("express");
const app = express();
const { apiRouter } = require('./api/index.js')
const { prisma } = require('./db/seed.js');

// Connect DB
prisma.connect();

// Test Server
app.get('/', (req, res) =>{
  res.send('<h1>Test Server</h1>');
})

app.use('/api/v1', apiRouter);


app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening on port 3000");
});
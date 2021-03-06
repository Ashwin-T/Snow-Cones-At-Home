const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000


app.use(express.static(__dirname + '/build'));

app.get('*', (req, res)=> {
  res.sendFile(__dirname + '/build/index.html');
})

app.listen(PORT,()=>{console.log("Server starting on " + PORT)});
const express = require('express');

let app = express();
const port = process.env.port || 1000;
let server = app.listen(port, listening);
function listening(){
    console.log(`on ${port}`);
}

app.use(express.static('index'));
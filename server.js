const express = require('express');

let app = express();
const port = process.env.PORT || 1000;
let server = app.listen('1000', listening);
function listening(){
    console.log('port 3000');
}

app.use(express.static('index'));
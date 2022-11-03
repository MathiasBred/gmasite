//cd c://programs/JS/"GMA _WEBSITE"
const express = require('express');

let app = express();
const port = process.env.PORT || 1000;
let server = app.listen(port, listening);
function listening(){
    console.log(`on ${port}`);
}
app.get('/',(req,res)=>{
   res.sendFile(__dirname + '/index/index.html');
});
app.use(express.static('index'));
const express = require('express');
const app = express();
const PORT = 3000; 

app.get('/notes', (req, res)=>{
    console.log(req);
})

app.get('*', (req, res)=>{
    console.log(req);
})

app.get('/api/notes', (req, res)=>{
    console.log(req);
})

app.get('/api/notes', (req, res)=>{
    console.log(req);
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

// use insomnia app now.  When user uses server the are typin in url in web browser; so we 
//use insomnia that will mimick we browswer actiosn... allows you to use GET POST and SEND... 
// look at some tutorials... etc... 


//the next thing... my server is going to send those web pages; but my js in the other files; 
//the index.js has all the functionality of how the app is supposed to work; how the notes are
//supposed to get stored and read... 
var PORT = process.env.PORT || 3001;



    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "public/index.html"));
      });
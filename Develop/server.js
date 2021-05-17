const fs = require("fs");
const express = require('express');
const app = express();
const PORT = 3000; 
const DB = "Develop/db/db.json";


// *WORKS!*
// let mock_data = {
//     "title":"Test Title 3",
//     "text":"Test text 3"
// };
// appendFiles(mock_data);



function readFiles(){
    fs.readFile(DB, 'utf8', function (err, data){
        if (err) {
            return console.log(err);
        }
        console.log("read file method");

        //string as tested with data[0]
        console.log(data);
    });
}

function appendFiles(new_data){
    fs.readFile(DB, 'utf8', function (err, data){
        if (err) {
            return console.log(err);
        }
        console.log("append file method");
        console.log(data);

        let parsed_data = JSON.parse(data)
        
        console.log(parsed_data);

        parsed_data.push(mock_data);
        writeFile(parsed_data);
    });
    
}

function writeFile(contents_in_json){
    let json_as_string = JSON.stringify(contents_in_json);
    fs.writeFile(DB, json_as_string, err => {
        if (err) {
          console.error(err)
          return
        }
      console.log("file written successfully");
      });
}

// const express = require('express');
// const app = express();
// const PORT = 3000; 

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
//var PORT = process.env.PORT || 3001;



    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "public/index.html"));
      });
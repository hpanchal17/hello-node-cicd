const express = require('express'); // Importing express module 
  
const app = express(); // Creating an express object 
  
const port = 8000;  // Setting an port for this application 
  

app.get('/', (req, res) => {
    res.send('Welcome to the Books API! with CICD pipeline! "New changes 1"');

});

// Starting server using listen function 
app.listen(port, function (err) { 
   if(err){ 
       console.log("Error while starting server"); 
   } 
   else{ 
       console.log("Server has been started at "+port); 
   } 
}) 
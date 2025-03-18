const express = require('express'); // Importing express module 
  
const app = express(); // Creating an express object 
  
const port = 8000;  // Setting an port for this application 
  

app.get('/', (req, res) => {
    res.send('Welcome to CICD Pipeline using Jenkins with node with changes & Pushing ECR and Pulling ECR using github action!');

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

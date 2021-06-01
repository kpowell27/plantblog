const express = require('express');  // import express
const app = express(); // initialize express
const port = 5000; // create port variable to listen on
const funcToRunUponListening = () => console.log(`Server started on port ${port}`);
const funcToRunUponReceivingRequest = (req, res) => {
    const plants = [ // TODO - replace with call to Database
        {id:1, name:'tulips', water:'1 cup',sunlight:'1 hour'},
        {id:2, name:'sunflower', water:'2 cup',sunlight:'1 hour'},
        {id:3, name:'medusa', water:'3 cup',sunlight:'1 hour'}]
        
    res.json(plants);
};

app.get('/api/plants', funcToRunUponReceivingRequest)
app.listen(port, funcToRunUponListening);
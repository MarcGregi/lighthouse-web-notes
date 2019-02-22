const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 


app.get('/', (req, res) => {
    res.send('cooking with homepage');

});

app.get('/profile', (req, res) => {
    res.send('Cooking with profile mate');
})

app.post('/profile', (req, res) => {
    console.log(req.body); 
    const user = {
        name: "Marc",
        training: "F45"
    }
    res.send(user);
})








app.listen(5000); 
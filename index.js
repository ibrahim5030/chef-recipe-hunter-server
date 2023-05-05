const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Recipe Hunter is Running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const eachChef = chefs.find(chef => chef.id == id);
    res.send(eachChef);
})

app.listen(port, () => {
    console.log(`Recipe Hunter is Running on port: ${port}`)
})
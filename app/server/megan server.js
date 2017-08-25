const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://postgres:@localhost/superhero";


var app = express(); 
app.use(bodyParser.json());
app.use(cors())


massive(connectionString).then(db => {
    app.set('db', db)
    app.get('db').init.seed_file().then(res => {
        console.log(res)
    })

}).catch(err => {
    console.log(err)
})



app.get('/api/getsuperheroes', (req, res) => {
    req.app.get('db').getSuperheroes().then(heroes => {
        res.send(heroes);
    })
})

app.post('/api/addsuperhero', (req, res) => {
    let { name, power} = req.body;
    req.app.get('db').addSuperhero([name, power]).then(hero => {
        res.send(hero)
    })
})



app.listen(3010, () => {
    console.log('Listening on port 3010');
})
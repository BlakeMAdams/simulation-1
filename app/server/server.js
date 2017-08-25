const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	massive = require('massive');


let app = express();
app.use(bodyParser.json());
app.use(cors());

// ENDPOINTS
	//app.METHOD(URL, HANDLER)
	//HANDLER (req, res) => {}

app.get('/api/getproducts/:shelf', (req, res) => {
	console.log(req.params.shelf)
	req.app.get('db').getProducts(req.params.shelf).then(bins => {
		res.send(bins);
	})
})

app.post('/api/addproduct/', (req, res) => {
	let { shelf, bin, name, price} = req.body;
	req.app.get('db').addProduct([shelf, bin, name, price]).then(bin => {
		res.send(bin)
	})
})

app.put('/api/editproduct/', (req, res) => {
	let { shelf, bin, name, price} = req.body;
	req.app.get('db').editProduct([shelf, bin, name, price]).then(bin => {
		res.send(bin)
	})
})

app.delete('/api/deleteproduct/:table/:id', (req, res) => {
	req.app.get('db').deleteProduct([req.params.table, req.params.id]).then(bins => {
		res.send(bins)
	})
})

//massive(connectionString)  -->
//connectionString = postgres://[username]:[pw]@[host]:[port]/[database]

massive('postgres://postgres:asdf@localhost/shelfie').then(db => {
	app.set('db', db)

}).catch(err => {
	console.log(err)
})
	//app.set([name],[value])  creates key value pair onto the app object for quick reference
	//use .then because it'll take a little time and you want it to move on(asynchronous)


app.listen(3030, ()=> console.log('listening on port 3030'))
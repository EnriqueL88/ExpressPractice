const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/about', (req, res) => {
	res.send('About');
});

app.get('/contact', (req, res) => {
	console.log(req)
	res.send('Refer to: www.google.com');
});

app.listen (port);

require('dotenv').config()

const express = require('express')
let mustacheExpress = require('mustache-express')

/*************************************************/

const app = express()

app.use(express.json())

app.engine('html', mustacheExpress())

app.set('view engine', 'html')

app.use(express.json())

/*************************************************/

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`)
})

/*************************************************/

app.get('/favicon.ico', (req, res) => {
	res.sendStatus(200)
	return
})

app.get('/', (req, res) => {

	var obj = {
		auth0_tenant: process.env.AUTH0_TENANT,
		client_id: process.env.CLIENT_ID,
		logout_url: process.env.LOGOUT_URL,
	}

	res.render ('index', obj)

})

app.get('/register', (req, res) => {

	var obj = {
		registration: true
	}

	res.render ('index', obj)

})

/*************************************************/

app.post('/register', (req, res) => {

	console.log("hello")
	console.dir(req.body)

	res.json({r: "got something"})
})

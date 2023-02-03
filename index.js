const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const usersRouter = require('./routers/users.router')

dotenv.config()

const db = require("./db");
require('./models/users')
require('./models/posts')

db.sequelize.sync().then(() => {
    console.log('set to work')
})

app.use(bodyParser.json())
app.use('/users', usersRouter)



const PORT = process.env.PORT || 3000;


app.listen(PORT ,() => console.log('listening on port:' + PORT))
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
// const Redis = require('redis');
const connection = require('./db')

const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
// const postRoutes = require("./routes/posts");

// database connection
connection()

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/users', userRoutes)
app.use('/auth', authRoutes)
// app.use("/post",postRoutes);

const port = process.env.PORT || 8080
app.listen(port, console.log(`Listening on port ${port}...`))

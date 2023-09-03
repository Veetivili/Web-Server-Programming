const express = require('express')
const app = express()

const router = require('./routes/albums')

app.use(express.static('./public'))

// Define port
const PORT = 3004

// Middleware
app.use(express.json())

// All route handling is done in routes/albums.js
app.use('/', router)

// Listen to port

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
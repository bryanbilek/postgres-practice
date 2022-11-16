const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const userRoutes = require('./routes/userRoutes')

const server = express()
const port = 5000

server.use(express.json(), cors(), helmet())
server.use('/api/users', userRoutes)

server.listen(port, () => console.log(`listening on port: ${port}`))
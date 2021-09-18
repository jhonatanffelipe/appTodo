const express = require('express')
const cors = require('cors')

const api = express()

api.use(cors())
api.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes')

api.use('/task', TaskRoutes)

api.listen(3333, () => {
    console.log('🚀 Backend executando...')
})
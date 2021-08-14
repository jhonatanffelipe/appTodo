const express = require('express')

const api = express()
api.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes')

api.use('/task', TaskRoutes)

api.listen(3000, () => {
    console.log('🚀 Backend executando...')
})
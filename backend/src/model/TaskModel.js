const mongoose = require('@/config/mongoose/db')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    macaddress: { type: String, required: true },
    type: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    when: { type: Date, required: true },
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.module('task', TaskSchema)
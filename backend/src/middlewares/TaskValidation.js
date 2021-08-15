const { isPast } = require('date-fns')
const TaskModel = require('../model/TaskModel')

const TaskValidation = async (request, response, next) => {
    const { macaddress, type, title, description, when } = request.body;

    if (!macaddress) return response.status(400).json({ message: 'macaddress is required' })
    if (!type) return response.status(400).json({ message: 'type is required' })
    if (!title) return response.status(400).json({ message: 'title is required' })
    if (!description) return response.status(400).json({ message: 'description is required' })
    if (!when) return response.status(400).json({ message: 'when is required' })
    if (isPast(new Date(when))) return response.status(400).json({ message: 'it is not possible to insert date in the past' })

    let exists
    if (request.params.id) {
        exists = await TaskModel.findOne({
            '_id': { '$ne': request.params.id },
            'when': { '$eq': new Date(when) },
            'macaddress': { '$in': macaddress }
        })
    } else {
        exists = await TaskModel.findOne({
            'when': { '$eq': new Date(when) },
            'macaddress': { '$in': macaddress }
        })

    }

    if (exists) return response.status(400).json({ message: 'there is already a task on this same day and time' })



    next()
}

module.exports = TaskValidation
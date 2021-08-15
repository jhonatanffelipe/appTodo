const TaskModel = require('../model/TaskModel')

const current = new Date()

class TasckController {
  async create(request, response) {
    await new TaskModel(request.body)
      .save()
      .then(task => {
        return response.status(200).json(task)
      })
      .catch(err => {
        return response.status(500).json(err)
      })
  }

  async update(request, response) {
    await TaskModel.findByIdAndUpdate({ '_id': request.params.id }, request.body, { new: true })
      .then(updatedTask => response.status(200).json(updatedTask))
      .catch(err => response.status(500).json({ message: err }))

  }

  async all(request, response) {
    await TaskModel.find({ macaddress: { '$in': request.body.macaddress } })
      .sort('when')
      .then(tasks => response.status(200).json(tasks))
      .catch(err => response.status(500).json({ message: err }))
  }

  async show(request, response) {
    await TaskModel.findById(request.params.id)
      .then(task => {
        if (task) return response.status(200).json(task)
        return response.status(404).json({ message: 'task not found' })
      })
      .catch(err => response.status(500).json({ message: err }))
  }

  async delete(request, response) {
    await TaskModel.deleteOne({ '_id': request.params.id })
      .then(() => response.status(200).json({ message: 'ok' }))
      .catch(err => response.status(500).json({ message: err }))
  }

  async done(request, response) {
    await TaskModel.findByIdAndUpdate(
      { '_id': request.params.id },
      { 'done': request.params.done },
      { new: true })
      .then(updatedTask => response.status(200).json(updatedTask))
      .catch(err => response.status(500).json({ message: err }))
  }

  async lete(request, response) {
    await TaskModel
      .find({
        'when': { '$lt': current },
        'macaddress': { '$in': request.body.macaddress }
      })
      .sort('when')
      .then(tasks => response.status(200).json(tasks))
      .catch(err => response.status(500).json({ message: err }))
  }

}

module.exports = new TasckController()
const TaskModel = require('../model/TaskModel')

class TasckController {
  async create(request, response) {
    const task = new TaskModel(request.body)

    await task
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

}

module.exports = new TasckController()
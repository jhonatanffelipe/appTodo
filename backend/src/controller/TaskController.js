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

}

module.exports = new TasckController()
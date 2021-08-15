const express = require('express')

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')
const MacAddressValidation = require('../middlewares/MacAddressValidation')

const router = express.Router()

router.post('/', TaskValidation, TaskController.create)
router.get('/:id', TaskController.show)
router.put('/:id', TaskValidation, TaskController.update)
router.delete('/:id', TaskController.delete)
router.get('/filter/all', MacAddressValidation, TaskController.all)
router.put('/:id/:done', TaskController.done)
router.get('/filter/late', MacAddressValidation, TaskController.lete)


module.exports = router
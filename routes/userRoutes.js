const router = require('express').Router()
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController')

//get all
router.get('/', getUsers)
//get by id
router.get('/:id', getUser)
//create
router.post('/', createUser)
//update
router.put('/:id', updateUser)
//delete
router.delete('/:id', deleteUser)

module.exports = router
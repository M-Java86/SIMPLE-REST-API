const express = require('express')
const router = express.Router();
const {
    httpUsersGet,
    httpGetUserById,
    httpCreateUser,
    httpDeleteUser,
    httpUpdateUser
} = require('../controllers/users.controller.js')

router.get('/', httpUsersGet)
router.get('/:id', httpGetUserById)
router.post('/', httpCreateUser)
router.delete('/:id', httpDeleteUser)
router.post('/update-user/:id', httpUpdateUser)


module.exports= router
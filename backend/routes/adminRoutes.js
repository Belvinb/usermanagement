const express = require('express')
const {registerAdmin,authAdmin,getAllUsers, deleteUser, getUser, updateUser} = require('../controllers/adminControlllers')

const router = express.Router()

router.post('/admin-register',registerAdmin)

router.post('/',authAdmin)

router.get('/admindashboard',getAllUsers)

router.delete('/delete',deleteUser)

router.get('/edit/:userId',getUser)
router.patch('/edit/:userId', updateUser);


module.exports = router
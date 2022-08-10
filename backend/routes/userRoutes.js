const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getME } = require('../controllers/userController')

// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').delete(deleteGoal).put(updateGoal)


// router.get('/', getGoals)

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getME)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)


module.exports = router 
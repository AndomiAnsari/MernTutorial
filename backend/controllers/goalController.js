const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
//@desc Get Golas
//@route Get /api/gloas
//@acces Private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//@desc Set Goal
//@route Post /api/gloas
//@acces Private

const setGoal = asyncHandler(async (req, res) => {
    console.log(req.body)
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })

    // res.status(200).json({ message: 'set goals' })
    res.status(200).json(goal)
})


//@desc update Goal
//@route Put /api/goals:id
//@acces Private

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal Not Found')
    }
    const UpdatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(UpdatedGoal)
})


//@desc Delete Goal
//@route Delete /api/goals:id
//@acces Private

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal Not Found')
    }
    await goal.remove()

    res.status(200).json({ id: req.params.id })
}

)
// const deleteGoal = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: `Delete goal ${req.params.id}` })
// }
// )



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
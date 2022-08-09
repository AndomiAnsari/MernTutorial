const asyncHandler = require('express-async-handler')


//@desc Get Golas
//@route Get /api/gloas
//@acces Private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
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

    res.status(200).json({ message: 'set goals' })
})


//@desc update Goal
//@route Put /api/goals:id
//@acces Private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
})


//@desc Delete Goal
//@route Delete /api/goals:id
//@acces Private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}
)



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
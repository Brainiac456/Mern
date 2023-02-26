

const asyncHandler = require('express-async-handler')

//@description       Get goals 
//@route             GET /api/goals
//@access            Private
const getGoals = asyncHandler( async(req, res) =>{

    res.status(200).json({message:'Get goals'})
})
//@description      Set goals 
//@route            SET /api/goals
//@access           Private
const setGoals = asyncHandler( async(req, res) =>{
   if(!req.body.text)
   {
    res.status(400)
    throw new Error('InshaAllah you will get this job');
   }
    res.status(200).json({message:'Set goals'})
})

//@description      Delete goals 
//@route            SET /api/goals/:id
//@access           Private

const deleteGoals = asyncHandler( async(req, res) =>{
    res.status(200).json({message:`delete goals ${req.params.id}`})
   
})

//@description      Update goals 
//@route            SET /api/goals/:id
//@access           Private

const updateGoals = asyncHandler( async (req, res) =>{

    res.status(200).json({message:`0update goals ${req.params.id}`})
})




module.exports =  {

    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}
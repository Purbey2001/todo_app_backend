//import the model
const Todo = require('../models/Todo');

//define route Handler
exports.getTodo = async (req,res) => {
    try {
        //fetch all items from database
        const todos = await Todo.find({});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'Entire todo data is fetched.'
            }
        )
    } catch (error) {
        console.error(error);
        console.log(error);
        //send a json response with a failed flag
        res.status(500).json(
            {
                success:false,
                data:'internal server error',
                message:error.message
            }
        )
    }
}
//import the model
const Todo = require('../models/Todo');

//define route Handler
exports.deleteTodo = async (req,res) => {
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json(
            {
                success:true,
                message:'Todo deleted.'
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
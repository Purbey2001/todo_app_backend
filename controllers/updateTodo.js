//import the model
const Todo = require('../models/Todo');

//define route Handler
exports.updateTodo = async (req,res) => {
    try {
        const {id} = req.params;
        const {title,description} = req.body;
        const response = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()}
        )
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Updated successfully.'
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
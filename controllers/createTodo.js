//import the model
const Todo = require('../models/Todo');

//define route Handler
exports.createTodo = async (req,res) => {
    try {
        //extract title and description from request.body by destructuring
        const {title,description} = req.body;
        //create a new Todo obeject and insert in database
        const response = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully.'
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
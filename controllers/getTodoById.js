//import the model
const Todo = require('../models/Todo');

//define route Handler
exports.getTodoById = async (req,res) => {
    try {
        //extract todo Item basis on id
        const id =req.params.id;
        const todo = await Todo.findById({_id:id});

        //Data for given id not found
        if(!todo){
            return  res.status(404).json({
                success:false,
                message:"No data found with given id."
            })
        }

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} data successfully fetched.`
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
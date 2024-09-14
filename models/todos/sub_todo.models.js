import mongoose from "mongoose";

const subTodoSchema =  new mongoose.Schema(
    {
        content : {
            type : String,
            required : true,

        },
        complete : {
            type : Boolean,
            default : false,
        },
        createdBy : {
            type : mongoose.Schema.Types.ObjectId, //bcz it will be a reffrence of some model
            ref : "User"
        },
    },
    {
        timestamps : true
    }
);

export const User = mongoose.model("SubTodo", subTodoSchema)
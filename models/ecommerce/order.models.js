import mongoose from "mongoose";



const orderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    quantity : {
        type : Number,
        required : true
    }
})



const addressSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        min : 10,
        max : 10
    },
    locality : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required: true
    },
    pincode : {
        type : Number,
        required : true,
        min : 6,
        max : 6,
    },
    country : {
        type : String,
        default : "India"
    }
})


const orderSchema = new mongoose.Schema(
    {
        orderPrice : {
            type : Number,
            required : true
        },
        customer : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        orderItems : {
            type : [orderItemSchema]
        },
        address : {
            type : addressSchema
        },
        status : {
            type : String,
            enum : ["PENDING", "CANCELLED", "DELIVERED"],
            default : "PENDING"
        }
    },
    {
        timestamps: true
    },
)




export const Order = mongoose.model("Order", orderSchema)

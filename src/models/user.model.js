import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
            index : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
        },
        fullname : {
            type : String,
            required : true,
            // unique : false,
            // lowercase : true,
            trim : true,
            index : true
        },
        avatar : {
            type : String,
            required : true,
            // unique : true,
            // lowercase : true,
            // trim : true,
            // index : true
        },
        coverImage : {
            type : String,
            // required : true,
            // unique : true,
            // lowercase : true,
            // trim : true,
            // index : true
        },
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref : "Video"
            }
        ],
        username : {
            type : String,
            required : [true, "Password is required"],
            // unique : true,
            // lowercase : true,
            // trim : true,
            // index : true
        },
        refreshToken : {
            type : String
        }
    },
{
    timestamps : true
},
)



export const User = mongoose.model("User", userSchema)
import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

userSchema.methods.verifyPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)
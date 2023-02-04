import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        required: true,
        default: false
    },

}, { //for createdAt and updatedAt
    timestamps: true
})

const User = mongoose.model('User', userSchema)//Model is called user and we pass in userSchema

export default User
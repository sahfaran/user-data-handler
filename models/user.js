const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/userDB')
.then(()=>{
    console.log("Mongo Database connected successfully")
})
.catch((err)=>{
    console.log("Error connecting to the database", err)
})
//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }
},{timestamps: true});

const User = mongoose.model("user", userSchema);

module.exports = User;
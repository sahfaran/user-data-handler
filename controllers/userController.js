const User = require("../models/user");
const dataService = require("../services/userServices");
const {REQUIRED_FIELDS} = require("../constants");

//Function to fetch detail of particular user using user id
const getUserByUserId = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        console.log("user", user)
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json(user);
    }
    catch(err){
        console.log("Error find user:", err);
        res.status(500).json({message: "Internal Server Error. Probable reason User not found"})
    }
}

//Function to update detail of particular user using user id
const updateUserByUserId = async (req,res)=>{
    try{
        // Destructure email from req.body and capture the rest of the fields in updateFields
        const { email, id, ...updateFields } = req.body
        if(email || id){
            return res.status(400).json({message: "Email and id cannot be updated"})
        }

        // Check if all fields in updateFields are in requiredFields
        const isUpdateFieldsValid = Object.keys(updateFields).every(field => Object.keys(REQUIRED_FIELDS).includes(field));
        if (!isUpdateFieldsValid) {
            return res.status(400).json({ message: "One or more fields cannot be updated or are invalid" });
        }

        // Apply the mapping to updateFields before the update operation
        const dbUpdateFields = dataService.mapFieldsToDb(updateFields);

        // Perform the update operation with the filtered fields
        const updatedUser = await User.findByIdAndUpdate(req.params.id, dbUpdateFields, { new: true });
        if(!updatedUser){
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json(updatedUser);
    }
    catch(err){
        console.log("Error update data: ", err);
        res.status(500).json({message: "Internal Server Error. Probable reason User not found"})
    }
}

//Function to delete detail of user using user id
const deleteUserByUserId = async (req,res)=>{
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if(!deleteUser){
            return res.status(404).json({message: "User not found"})
        }
        return res.status(200).json({message: "User deleted successfully"})
    }
    catch(err){
        console.log("Error delete user: ", err);
        res.status(500).json({message: "Internal Server Error. Probable reason User not found"})
    }
}

//Function to fetch all users
const getAllUsers = async(req,res)=>{
    try{
        const users = await User.find({});
        if(users.length < 1){
            return res.status(404).json({message: "No user found"})
        }
        res.status(200).send(users);
    }
    catch(err){
        console.log("Error get all user: ", err);
        res.status(500).json({message: "Internal Server Error"})
    }
}

//Function to add new user
const addUser = async(req,res)=>{
    try{
        const { first_name, last_name, email, job_title, gender } = req.body;
        console.log("REQUIRED_FIELDS:", REQUIRED_FIELDS)
        // Check for missing fields
        const missingFields = Object.keys(REQUIRED_FIELDS).filter(field => !req.body[field]);
        if (missingFields.length > 0) {
            return res.status(400).json({ message: `Please provide all the required fields: ${missingFields.join(', ')}` });
        }
        const newUser = await User.create({
            firstName: first_name,
            lastName: last_name,
            email: email,
            jobTitle: job_title,
            gender: gender
        });

        // Return the created user
        res.status(201).json({ message: "User created successfully", user: newUser });
    }
    catch(err){
        console.log("Error add user: ", err);
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = {
    getUserByUserId,
    updateUserByUserId,
    deleteUserByUserId,
    getAllUsers,
    addUser
}
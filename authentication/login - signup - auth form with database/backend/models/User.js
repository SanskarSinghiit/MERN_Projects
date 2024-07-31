import mongoose from 'mongoose'



// Declare the Schema of the Mongo model  // !mdbgum
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        // unique:true,
        // index:true,
    },
    email:{
        type:String,
        required:true,
        // unique:true,
    },
});

//Export the model
const User = mongoose.model('User', userSchema);
export default User;
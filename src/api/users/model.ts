import * as  mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String
    },
    lastName: String
});

export default  mongoose.model('User', UserSchema);
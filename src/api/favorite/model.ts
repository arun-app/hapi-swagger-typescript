import * as  mongoose from "mongoose";

const FavoriteSchema = new  mongoose.Schema({
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

export default mongoose.model('Favorite', FavoriteSchema);
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}); //it describes what each post will have it is a schema

//now it is turned to a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
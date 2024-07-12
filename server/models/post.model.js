import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        post: {
            type: String,
        }
    },
    {
        timestamps: true // Corrected to "timestamps"
    }
);

export const Post = mongoose.model('Post', postSchema);
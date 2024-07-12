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
        timestamps: true
    }
);

export const Post = mongoose.model('Post', postSchema);
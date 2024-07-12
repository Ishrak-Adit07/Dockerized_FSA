import { Post } from "../models/post.model";

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).send({ posts });
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e.message });
    }
};

const createPost = async (req, res) => {
    try {
        const { name, post } = req.body;
        if (!post) {
            return res.status(400).send({ error: "Post is required" });
        }

        const postDetails = {
            name,
            post
        };
        const newPost = await Post.create(postDetails);
        res.status(201).send({ newPost });
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { name, post } = req.body;

        const existPost = await Post.findOne({ name, post });
        if (!existPost) {
            return res.status(404).send({ error: "Post not found" });
        }

        await Post.findOneAndDelete({ name, post });
        res.status(200).send({ message: "Post was deleted" });
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e.message });
    }
};

export { getPosts, createPost, deletePost };

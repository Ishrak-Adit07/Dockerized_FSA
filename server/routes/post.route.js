import express from "express";
import { createPost, deletePost } from "../controllers/post.controller";
const router = express.Router();

router.post("/create", createPost);

router.delete("/delete", deletePost);

export default router;
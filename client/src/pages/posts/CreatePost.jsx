/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';
import { UserContext } from '../../contexts/UserContext';
import { createPost } from '../../controllers/post.controller';

const CreatePost = () => {

  const {posts, setPosts} = useContext(PostContext);
  const {user, setUser} = useContext(UserContext);

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [post, setPost] = useState("");

    const handleCreatePost = async(e) =>{
        e.preventDefault();

        try {

            const data = await createPost(user.name, post);
            console.log(data.newPost);

            setPosts(...posts, data.newPost);

            navigate("/dashboard");

        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }

        setError(null);

    }

  return (
    <section className='card'>
        <h1 className='caption'>Create a new post</h1>

        <form onSubmit={handleCreatePost}>
            <textarea rows="5" 
                      placeholder='post' 
                      className='input'
                      value={post}
                      onChange={(e) => setPost(e.target.value)}></textarea>

            <button className='btn' type='submit'>
                Post
            </button>

        </form>
    </section>
  );
}

export default CreatePost;
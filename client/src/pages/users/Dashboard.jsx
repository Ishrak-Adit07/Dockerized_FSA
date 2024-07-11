/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Post from '../../components/Post';
import { Link } from 'react-router-dom'
import { deletePost } from '../../controllers/post.controller';
import { UserContext } from '../../contexts/UserContext';

const Dashboard = () => {

  const {user, setUser} = useContext(UserContext)

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(null);

  useEffect(()=>{

    setTimeout(async()=>{
      const postData = {
        name: "Gale",
        posts: []
      }

      setUser({
        name: postData.name,
        posts: postData.posts
      });

      setLoading(false);
    }, 1000);

  }, []);

  const handleDeletePost = async(name, post) =>{
    try {

      const data = await deletePost(name, post);
      console.log(data.message);

      setTimeout(async()=>{
        setLoading(true);  
        
        location.reload();
  
        setLoading(false);
      }, 1000);

      setDeleteSuccess(true);

      setError(null);

    } catch (err) {
      setError(err.error);
      console.log(err);
    }
  }

  return (
    <section className='card'>

      <h1 className='title'>User Dashboard</h1>

      <div>

          {loading && 
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
          }

          {!loading && user.posts && user.posts.map((post) => 
            <div key={post._id}>
              <Post post={post}>
                <div className="flex items-center gap-2">
                  <Link className="fa-solid fa-pen-to-square nav-link text-green-500 hover:bg-green-200" title="Update" to="/updatePost"
                  state={{post}}></Link>
                  <button className='fa-solid fa-trash-can nav-link text-red-500 hover:bg-red-200' title='Delete' onClick={()=>{
                    handleDeletePost(post._id)
                  }}></button>
                </div>
              </Post>
            </div>
          )}
      </div>



    </section>
  )
}

export default Dashboard
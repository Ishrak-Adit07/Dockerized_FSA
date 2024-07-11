/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';

const Home = () => {

  const {posts, setPosts} = useContext(PostContext);

  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    setTimeout(async()=>{
      const postData = [];

      setPosts(postData.posts);
      setLoading(false);
    }, 1000);

  }, []);

  return (
    <section className='card'>

        <h1 className='title'>Latest Posts</h1>

        <div>

          {loading && 
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
          }

          {!loading && 
            <h1>Post here</h1>
          }
        </div>

    </section>
  );
}

export default Home;
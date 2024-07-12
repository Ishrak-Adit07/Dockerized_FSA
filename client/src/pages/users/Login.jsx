/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../controllers/user.controllers';
import { UserContext } from '../../contexts/UserContext';

const Login = () => {

  //UserContext
  const {setUser} = useContext(UserContext);

  //UseNavigate
  const navigate = useNavigate();

  // Error state
  const [error, setError] = useState(null);

  // Form data states
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Handle Log in
  const handleLogin = async(e) => {
    e.preventDefault();
    //console.log(email, password);

    try {
      const loginResponseData = await loginUser(name, password);
      
      if(loginResponseData){

        setUser({
          name, 
          posts: []
        });

        navigate("/dashboard");
        setError(null);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="card">

        <h1 className="title">Login to your account</h1>

        <form onSubmit={handleLogin} className="justify-center items-center h-screen">

            <input type="text" 
                   placeholder="Name" 
                   className="input" 
                   autoFocus 
                   value={name} 
                   onChange={(e) => setName(e.target.value)} />

            <input type="password"
                   placeholder="Password" 
                   className="input" 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className="btn">Login</button>
        </form>

    </section>
  );
}

export default Login;
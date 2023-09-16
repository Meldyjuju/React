import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/auth';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const ctx = useContext(AuthContext)
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data[0])
        ctx.setIsLoggedIn(true)
        localStorage.setItem("id", data[0].id)
        console.log(data.message);
        console.log(ctx.isLoggedIn)
        navigate("/");
      } else {
        toast.error('Login failed. Please check your username and password.', {
          position: "top-center",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-950 focus:outline-none focus:ring focus:ring-blue-300">
            Log In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-950">
            Sign Up
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

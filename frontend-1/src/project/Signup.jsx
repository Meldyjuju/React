import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [userInfo, setUserInfo ] = useState({
    username:'',
    firstname:'',
    password:'',
    telephone:'',
    address:'',
  });

  const onchangeinput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo]);

  const onSubmithandle = async () => {
    const res = await fetch("http://localhost:5000/user/insert", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    });
    if (res.status === 200) {
      alert("ลงทะเบียนเรียบร้อยแล้ว");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form className="space-y-4" onSubmit={onSubmithandle}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              name="username"
              type="text"
              onChange={(e) => onchangeinput(e)}
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              name="firstname"
              type="text"
              onChange={(e) => onchangeinput(e)}
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              onChange={(e) => onchangeinput(e)}
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Telephone</label>
            <input
              name="telephone"
              type="tel"
              onChange={(e) => onchangeinput(e)}
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your telephone"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              onChange={(e) => onchangeinput(e)}
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your address"
              rows={3}
            />
          </div>
          <button className="bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-950 focus:outline-none focus:ring focus:ring-blue-300">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-green-950">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

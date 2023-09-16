import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth";

const Navbar = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    ctx.setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-blue-200 p-4">
      <div className="max-w-10xl mx-auto">
        <div className="flex justify-between">
          <Link to="/" className="text-black text-2xl font-bold">
            My Website
          </Link>
          {ctx.isLoggedIn === false ? (
            <div className="flex space-x-4">
              <Link to="/login" className="text-black">
                Log In
              </Link>
              <Link to="/signup" className="text-black">
                Sign Up
              </Link>
            </div>
          ) : (
            <button onClick={logout} className="text-black">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-screen absolute "
        src="https://www.starbucks.co.th/stb-media/2022/04/Web-SR-DIA-2nd-Vendor-2022-en-1400x645.jpg"
        alt=""
      />
      
    </div>
  );
};

export default Home;

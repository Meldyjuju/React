import React, { useState, createContext, useEffect } from "react";



const AuthContext = React.createContext({});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState([]);
  useEffect(()=>{
    console.log(isLoggedIn)
  },[isLoggedIn])
  const login = () => {
    console.log("ล็อกอินเเล้ว")
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  
 
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn:isLoggedIn,
        login:login,
        logout:logout,
        setIsLoggedIn:setIsLoggedIn,
        setCart:setCart,
        cart:cart
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
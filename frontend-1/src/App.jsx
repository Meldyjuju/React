import React from "react";
import Information from "./project/Information";
import Home from "./project/Home";
import Login from "./project/Login";
import Signup from "./project/Signup";
import Product from "./project/Product";
import Layout from "./project/Layout";
import Payment from "./project/Payment";
import Receipt from "./project/Receipt";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/auth";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
  {
      path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <Information />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup/>,
  },
  {
    path: "/Product",
    element: <Product/>
  },
  {
    path: "/Payment",
    element: <Payment />
  },
  {
    path: "/Receipt",
    element: <Receipt/>
  }
    ]
  }
  ]);

function App() {
  return (
    <>
    <AuthContextProvider>
      <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;

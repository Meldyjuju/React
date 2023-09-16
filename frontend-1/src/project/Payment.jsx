import React, { Fragment } from "react";
import Nav from "./Navbar";
import AuthContext from "../context/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Payment = () => {
  const ctx = React.useContext(AuthContext);

  const onPayment = async () => {
    const res = await fetch("http://localhost:5000/product/payment", {
      method: "POST",
      body: JSON.stringify({
        id:localStorage.getItem('id'),
        cart:ctx.cart
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.status === 200) {
        alert("payment successful");
      }
  };

  const deleteBook = (itemInfo) => {
    const newCart = ctx.cart.filter((product) => product.id !== itemInfo.id);
    ctx.setCart(newCart);
  };

  return (
    <div className="w-full h-auto bg-white border rounded-xl ">
      {ctx.cart.length === 0 ? (
        <div className="text-center py-2 px-4">No products</div>
      ) : (
        <Fragment>
          <div className="text-center font-bold py-3 text-3xl pb-5">
            Payment
          </div>
          {ctx.cart.map((products, idx) => (
            
            <div className="grid grid-cols-3 w-auto px-96 h-auto my-1  " key={products.id}>
              <div className="text-center pl-28   ">{idx + 1}</div>
              <div className="flex  justify-center ">
                <img src={products.imageurl} className="w-40 h-52" alt="" />
              </div>
              <div className="flex-col flex-nowrap pr-">
                <div className="font-bold text-base">{products.name}</div>
                <div className="font-bold text-base">
                  Quantity : {products.amount} Cup
                </div>
                <div>Price : {products.price} Bath</div>
                <div>Total : {products.total} Bath</div>
              </div>
              <div className="flex justify-center items-center"></div>
            </div>
          ))}

          <div className="text-right py-2 pr-96">
            Total price:{" "}
            {ctx.cart.reduce((acc, product) => acc + product.total, 0)} .-
          </div>
          <div className="text-end mr-96">
            <div><Link to="/Receipt">
            <button onClick={onPayment} className="px-9 py-4  bg-red-500 text-white rounded-l-xl rounded-r-xl ">
              Purchase
            </button>
            </Link>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Payment;

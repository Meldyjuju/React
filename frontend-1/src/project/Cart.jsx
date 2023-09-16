import React, { Fragment } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth";

const Cart = () => {
  const ctx = React.useContext(AuthContext);

  const deleteBook = (itemInfo) => {
    const newCart = ctx.cart.filter(
      (product) => product.id !== itemInfo.id
    );
    ctx.setCart(newCart);
  };

  return (
    <div className="w-full h-auto bg-white border rounded-xl ">
      {ctx.cart.length === 0 ? (
        <div className="text-center py-2 px-4">No products</div>
      ) : (
        <Fragment>
          <div className="text-center font-bold py-3">Cart</div>
          {ctx.cart.map((products) => (
            <div
              className="grid grid-cols-3 w-full px-5 h-auto my-1"
              key={products.id}
            >
              <div className="flex  justify-center">
                <img src={products.imageurl} className="w-40 h-52" alt="" />
              </div>
              <div className="flex-col flex-nowrap">
                <div className="font-bold text-base">{products.name}</div>
                <div className="font-bold text-base">Quantity : {products.amount} Cup</div>
                <div>Price : {products.price} Bath</div>
                <div>Total : {products.total} Bath</div>
              </div>
              <div className="flex justify-center items-center">
                <div>
                  <button
                    className="px-4 py-2 rounded-xl bg-red-600 text-white  hover:bg-red-500"
                    onClick={() => deleteBook(products)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center py-2 ">
            Total price: {ctx.cart.reduce((acc, product) => acc + product.total, 0)}{" "}.-
          </div>
          <div><Link to="/Payment"><button className="w-full bg-green-900 text-white py-3 rounded-l-xl rounded-r-xl ">Purchase</button></Link>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;



import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";

const Receipt = () => {
  const [receipt, setReceipt] = useState([]);
  const [user, setUser] = useState();
  const [order, setOrder] = useState();
  useEffect(() => {
    async function fetchReceipt() {
      const res = await fetch("http://localhost:5000/product/receipt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: localStorage.getItem("id") }),
      });
      const data = await res.json();
      console.log(data);
      setReceipt(data);
    }

    async function fetchUser() {
      const res = await fetch(
        `http://localhost:5000/user/${localStorage.getItem("id")}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(data);
      setUser(data);
    }

    async function fetchOrder() {
      const res = await fetch(
        `http://localhost:5000/order/${localStorage.getItem("id")}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(data);
      setOrder(data);
    }
    fetchReceipt();
    fetchUser();
    fetchOrder();
  }, []);

  return (
    <div>
      <div className="bg-orange-100 border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8 ">
        <div className="flex justify-center bg- ">
        <img
          className="h-20 w-20 rounded-full "
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png"
          alt=""
        />
        </div>
        <h1 className="font-bold text-2xl text-center text-green-900">
          Starbucks BIS Coffee
        </h1>
        <div className="font-bold text-xs my-1 text-center text-green-900">
            WELCOME TO STARBUCKS COFFEE
        </div>
        <div className="font-bold text-xs my-1 text-center text-green-900">
        rajamangala university of technology isan
        </div>
        <div className="font-bold text-xs my-1 text-center text-green-900">
        (043) 222-9912
        </div>
        <div className="font-bold text-xs my-1 text-center text-green-900">
        =============================
        </div>
        <div className="font-bold text-xs my-1 text-center text-green-900">
        🖤 HAVE A NICE DAY 🖤
        </div>
        <hr class="mb-2 " />
        <div class="flex justify-between mb-6 ">
          <h1 class="text-lg font-bold text-green-900">Invoice</h1>
          <div class="text-gray-700">
            <div>Date: {dayjs().format("DD/MM/YYYY HH:mm")} </div>
            <div>Invoice #{order?.order_id}</div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-green-900">Bill To:</h2>
          <div className="text-gray-700 mb-2">{user?.username}</div>
          <div className="text-gray-700 mb-2">Customer: {user?.firstname}</div>
          <div className="text-gray-700 mb-2">Address: {user?.address}</div>
          <div className="text-gray-700">Telephone: {user?.telephone}</div>
        </div>
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left font-bold  text-green-900">Description</th>
              <th className="text-right font-bold text-green-900">Amount</th>
            </tr>
          </thead>
          <tbody>
            {receipt.map((order) => (
              <tr>
                <td className="text-left text-gray-700">
                  {order?.name} x {order?.quantity}
                </td>
                <td className="text-right text-gray-700">{order?.price*order?.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-left font-bold text-green-900">Total</td>
              <td className="text-right font-bold text-gray-700">
                {order?.total_amount}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="text-gray-700 mb-2 text-center">Thank you for your order our coffee!🙏🙏</div>

      </div>
    </div>
  );
};

export default Receipt;

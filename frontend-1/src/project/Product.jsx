import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/auth";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selecteditem, setSelectedItem] = useState ();
  const ctx = useContext(AuthContext)
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("http://localhost:5000/product/list", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      setProducts(data);
    }
    fetchUser();
  }, []);

  const addToCart = (e) => {
    e.preventDefault()
    let editSomeItem = {...selecteditem}
    const existingBookIndex = ctx.cart.findIndex((product) => product.id === selecteditem.id);

    if (existingBookIndex !== -1) {
      // Book with the same ID exists in the cart
      const existingBook = ctx.cart[existingBookIndex];
  
      // Update rent amount and rent days
      existingBook.amount = existingBook.amount += existingBook.amount ? parseInt(e.target[0].value) : 1;
      existingBook.total = parseInt(existingBook.amount) * parseInt(existingBook.price);

      return ctx.setCart([...ctx.cart]);
    } else {
      // Book with the same ID doesn't exist in the cart
      editSomeItem.amount = parseInt(e.target[0].value) || 1;
      editSomeItem.total = parseInt(editSomeItem.amount) * parseInt(editSomeItem.price) 
      return ctx.setCart([...ctx.cart, editSomeItem]);
    }
    // console.log(e.target[0].value);
    // console.log(e);
    // console.log(selecteditem);
    // const newItem = {
    //     ...selecteditem,amount:parseInt(e.target[0].value)
    // }
    // console.log(newItem)
    // ctx.setCart(prev=> [...prev,newItem]);

  };

  const addItemSelected = (item) => {
    console.log(item);
    setSelectedItem(item)
  }
    

  return (
    <div>
      <div className="grid grid-cols-3 place-items-center ">
        {products.map((products, idx) => (
          <form onSubmit={(e) => addToCart(e)}>
            <div className="my-5">
              <div class="max-w-sm rounded overflow-hidden shadow-lg relative ">
                <div className="relative">
                  <img
                    class="w-full"
                    src={products.imageurl}
                    alt="Sunset in the mountains"
                  />
                  <div className="text-white text-xl absolute left-40 bottom-6">
                    {products.price} bath
                  </div>
                </div>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{products.name}</div>
                  <p class="text-gray-700 text-base">{products.description}</p>
                  <div className="flex items-center mt-2">
  <label htmlFor={`quantity-${products.id}`} className="mr-2">
    Quantity:
  </label>
  <input
    id={`quantity-${products.id}`}
    type="number"
    defaultValue={1}
    className="border px-2 py-1 w-16"
  />
</div>
                </div>
                <button onClick={() => addItemSelected (products)} class="bg-green-700 hover:bg-green-950 text-white font-bold py-2 px-4 rounded-full ml-36 mb-5">
                  ADD
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default Product;

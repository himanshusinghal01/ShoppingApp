import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { Cart } = useSelector((state) => state);  // Correctly select Cart from the state
  const [TotalAmount, setTotalAmount] = useState(0); // Proper useState initialization

  useEffect(() => {
    const total = Cart.reduce((acc, curr) => acc + curr.price, 0);  // Calculate total amount
    setTotalAmount(total);
  }, [Cart]);  // Add Cart as a dependency

  return (
    <div>
      {Cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {Cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
            <div className="font-semibold text-5xl text-green-700 mt-5">Summary</div>

            <p className="text-xl mt-5">
              <span className="text-gray-700 font-semibold text-xl ">Total Items: {Cart.length}</span>
            </p>
         

          <div className="flex flex-col">
          <p className="text-xl font-bold"><span className="text-gray-700 font-semibold ">Total Amount:</span> ${TotalAmount}</p> 
            <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition
             duration-300 ease-in-out mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl ">
              Checkout Now
            </button>
          </div>
        </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Cart Empty</h1>
          <Link to="/">
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2
             border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

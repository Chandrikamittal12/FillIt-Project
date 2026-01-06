// import React, { useState } from "react";
import { useDispatch, useSelector}   from "react-redux";   
import { increment, decrement } from "../slice/counter/counterSlice";   
const Counter = () => {
//   const [count, setCount] = useState(0);
const count = useSelector((state) => state.counter.value);
const coount= useSelector((state) => state.counter.value);   
const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between shadow-md">
        <h1 className="text-xl font-semibold">Counter App</h1>
         <button className="
            px-4 py-2 w-25 h-10 
            bg-linear-to-r from-purple-500 to-orange-500 text-white 
            rounded-lg shadow-lg border border-transparent
            hover:from-purple-600 hover:to-orange-600 
            transition-all duration-300 
            hover:scale-110 hover:shadow-pink-400/50 
            active:scale-95
          ">
            Login {coount}
          </button>
      </nav>

      {/* Counter Card */}
      <div className="flex justify-center items-center mt-20">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-80 text-center">
          <h2 className="text-2xl font-bold mb-6">Counter Value</h2>

          <div className="text-4xl font-bold text-blue-600 mb-6">
            {count}
          </div>

          <div className="flex justify-between gap-4">
            <button
            //   onClick={() => setCount(count - 1)}            
              
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
           onClick={() => dispatch(decrement())} >
              Decrement
            </button>

            <button
            //   onClick={() => setCount(count + 1)}
            
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            onClick={() => dispatch(increment())}>
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

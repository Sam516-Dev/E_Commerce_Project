import React, { useState } from 'react';

const Counter = (props) => {
  // Initialize state for the count of items in the cart

  const { product } = props;

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(product)

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
     console.log("here are the products:", product.price )
  };

  // Function to decrement the count
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrementCount}
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
      {/* You can also display additional information like item name, price, etc. here */}
    </div>
  );
};

export default Counter;

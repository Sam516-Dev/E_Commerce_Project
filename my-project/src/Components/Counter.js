import React, { useState } from 'react';

const Counter = (props) => {
  const { selectedItem, isOpen, product } = props;

  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    if (!isOpen || selectedItem) {
      console.log("Selected item price:", selectedItem.price);
      console.log(isOpen)
    } else if (product) {
      console.log("Product price:", product.price);
    }
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
    </div>
  );
};

export default Counter;

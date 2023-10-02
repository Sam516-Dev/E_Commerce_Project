import React from "react";
import productsData from "../data/products2.json";
import Counter from "./Counter";

const ConsumeAPI = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-fuchsia-200 flex justify-between flex-col p-1 rounded-lg shadow-xl overflow-hidden "
          >
            <div className=" flex flex-col p-1 ">
              <img
                src={product.image}
                alt={product.title}
                className="w-full  rounded-lg h-64 object-cover"
              />
              <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
              <p className="flex text-sm rounded-sm p-2 text-gray-800 mb-4">
                {product.description}
              </p>
            </div>

          
            <div className="p-4 flex flex-col border-t border-blue-500 justify-between">
              {/* div here */}
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Counter />
                </div>
                <h3 className=" flex text-xl font-bold mr-2">
                  ${product.price}
                </h3>
                <button className=" flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumeAPI;

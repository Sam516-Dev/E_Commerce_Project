import React from "react";
// import productsData from "./data/products2.json";
import productsData from "../data/products2.json";

const ConsumeAPI = () => {
  return (
    <>
      <div className="flex gap-4 mx-10 py-10 flex-wrap">
        {productsData.map((product) => {
          return (
            <div className="items-center w-96 h-[130] bg-fuchsia-300 rounded-lg p-2 hover:bg-fuchsia-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover rounded-md  shadow-lg"
              />
              <h1 className="font-semibold w-72 py-4 text-sm uppercase">
                {product.title}
              </h1>
              <h3 className=" font-bold text-lg">{product.price}</h3>
              <p className=" font-normal text-sm w-80 text-start">
                {product.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ConsumeAPI;

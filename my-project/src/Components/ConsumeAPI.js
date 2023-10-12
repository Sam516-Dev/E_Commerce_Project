import React, { useState, useEffect } from "react";
import productsData from "../data/products2.json";
import Counter from "./Counter";
import Modal from "./Modal";
import "../Styles/modalBlur.css";

const ConsumeAPI = () => {
  const [data, setData] = useState(productsData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchase = (product) => {
    setSelectedItem(product);
    setIsModalOpen(true);
    console.log("Selected item's price is:", product.price);
    console.log("Is the modal open from ConsumeAPI component?", true);
  };

  useEffect(() => {
    console.log("isModalOpen is now from useEffect:", isModalOpen);
  }, [isModalOpen]);

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
    console.log("after closing modal :", isModalOpen);
  };

  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-fuchsia-200 rounded-md hover:bg-fuchsia-300 ..."
          >
            <div className="flex flex-col p-1">
              <img
                src={product.image}
                alt={product.title}
                className="w-full rounded-lg h-64 object-cover"
              />
              <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
              <p className="flex text-sm rounded-sm p-2 text-gray-800 mb-4">
                {product.description}
              </p>

              <div className="p-4 flex flex-col border-t border-blue-500 justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <Counter product={product} />
                  </div>
                  <h3 className="flex text-xl font-bold mr-2">
                    ${product.price}
                  </h3>
                  <button
                    onClick={() => handlePurchase(product)}
                    className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && <div className="modal-overlay"></div>}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default ConsumeAPI;

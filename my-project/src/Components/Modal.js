import React from "react";
import { MdCancel } from "react-icons/md";
import Counter from "./Counter";
const Modal = ({ isOpen, closeModal, selectedItem }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="modal-content bg-white border-2  rounded-lg shadow-lg">
          {/* <div className="flex"> */}

          {/* <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-4 text-2xl font-semibold leading-none text-gray-600 outline-none focus:outline-none"
            >
            &times;
          </button> */}

          {/* Item details */}
          <MdCancel
            onClick={closeModal}
            className=" absolute right-1 hover:cursor-pointer text-pink-500 h-8 w-8"
          />
          <div className=" p-8">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full border border-blue-200 rounded-lg h-64 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              {selectedItem.title}
            </h2>
            <p className="text-gray-800">{selectedItem.description}</p>

            <div className="flex items-center bg-blue-50 p-1 rounded-md my-4 justify-between">
              <p className="text-blue-500 pb-2 text-3xl font-semibold mt-4">
                ${selectedItem.price}
              </p>
              <Counter />
            </div>

            <button className=" mx-auto w-full bg-pink-500 hover:bg-pink-600 text-white text-center text-xl font-semibold py-3 rounded">
              Checkout
            </button>
            {/* Add more details as needed */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

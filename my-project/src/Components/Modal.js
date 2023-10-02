import React from 'react';

const Modal = ({ isOpen, closeModal, selectedItem }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
     
        <div className="modal-content bg-white border-2 border-blue-500 rounded-lg shadow-lg">
         
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-4 text-2xl font-semibold leading-none text-gray-600 outline-none focus:outline-none"
          >
            &times;
          </button>

          {/* Item details */}
          <div className="p-6">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full rounded-lg h-64 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{selectedItem.title}</h2>
            <p className="text-gray-800">{selectedItem.description}</p>
            <p className="text-blue-500 text-2xl font-semibold mt-4">${selectedItem.price}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import Cart from "./Cart";
const Home = () => {
  return (
    <>
      {/* <div className=""> */}
        <h1 className="font-bold uppercase text-5xl bg-pink-500 text-white border-b-8 border-blue-600  pt-6 text-center p-3">
          Welcome to our store !
        </h1>
        <div className="absolute top-6 right-20">
          <Cart />
        </div>
      {/* </div> */}
    </>
  );
};

export default Home;

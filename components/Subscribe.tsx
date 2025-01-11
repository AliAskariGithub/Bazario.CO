import React from "react";
import { TfiEmail } from "react-icons/tfi";

const Subscribe = () => {
  return (
      <div className="flex justify-center items-center flex-col mb-10 w-full px-2">
        <div className="flex flex-col items-center justify-between gap-6 px-6 py-6 w-full bg-black lg:flex-row lg:gap-8 lg:px-16 rounded-2xl">
          <h1 className="text-center lg:text-left max-w-lg text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
            Stay Up to Date About Our Latest Offers
          </h1>
          <div className="flex flex-col items-center justify-center w-full gap-4 lg:w-auto">
            <div className="flex items-center px-4 py-2 bg-white rounded-full gap-2 w-full md:w-[350px]">
              <TfiEmail color="gray" size={20} />
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="flex-1 px-2 py-1 text-sm outline-none"
              />
            </div>
            <button className="w-full md:w-[350px] flex items-center justify-center px-4 py-2 bg-white rounded-full text-black font-bold hover:text-black/70 hover:bg-white/90 transition duration-150">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
  );
};

export default Subscribe;

import React from "react";

const Loader = () => {
  return (
    <div className="loading min-h-screen flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold">Loading...</h2>
      <div className="flex justify-center items-center">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      </div>
    </div>
  );
};

export default Loader;
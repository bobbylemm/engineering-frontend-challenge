import React from "react";

const CustomButton = ({ text, handler }) => (
  <button
    className="border border-main-purple-300 px-5 py-2 text-main-purple-300 shadow-lg rounded-md capitalize"
    onClick={handler}
  >
    {text}
  </button>
);

export default CustomButton;

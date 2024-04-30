import React from "react";

const Button = ({ text, click }) => {
  
  return (
    <div>
      
      <button
        onClick={click}
        className="w-40 text-center  bg-blue-950 text-white font-semibold font-[ubuntu] px-[10%] py-[5%] rounded-lg hover:text-blue-900 hover:bg-white hover:border-2 hover:border-blue-800 transition-all duration-700"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

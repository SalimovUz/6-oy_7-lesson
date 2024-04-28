import React from 'react'

const Button = (prop) => {
  const nextPage = () => {
    setStep(step + 1);
  };

  return (
    <button
      onClick={nextPage}
      className="block text-center mt-[10%] bg-blue-950 text-white font-semibold font-[ubuntu] px-[5%] py-[2%] rounded-lg hover:text-blue-900 hover:bg-white hover:border-2 hover:border-blue-800 transition-all duration-700"
    >
      {prop.text}
    </button>
  );
}

export default Button
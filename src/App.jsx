import React, { useEffect, useState } from "react";
import sidebar from "../public/bg-sidebar-desktop.svg";
import arcade from "./assets/images/photos/icon-arcade.svg";
import advanced from "./assets/images/photos/icon-advanced.svg";
import pro from "./assets/images/photos/icon-pro.svg";
import Button from "./Button/Button";

const App = () => {
  const [step, setStep] = useState(1);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [toggle, setToggle] = useState("monthly");

  const handleToggle = () => {
    setToggle(toggle === "monthly" ? "yearly" : "monthly");
  };

  const nextPage = () => {
    setStep(step + 1);
  };
  const back = () => {
    setStep(step - 1);
  }
  const handleClick = (colorState, setColorState) => {
    if (!color1 && !color2 && !color3) {
      setColorState(true);
    } else if ((color1 || color2 || color3) && !colorState) {
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColorState(true);
    } else if (color1 && color2 && color3 && colorState) {
      setColorState(false);
    }
  };

  const handleStatusClick = (colorState, setColorState) => {
    handleClick(colorState, setColorState);
    if (color1 && color2 && color3) {
      alert("Ikki yoki undan ko'p statusni tanlash mumkin emas");
    }
  };

  const handleBorder = () => {
    setIsChecked(!isChecked);
  };
  const handleBorder2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleBorder3 = () => {
    setIsChecked3(!isChecked3);
  };

  const firstpage = () => {
    setStep(1)
  }
  return (
    <>
      <div className="container mx-auto px-10 py-1">
        <div className=" enter__section flex justify-evenly mx-auto gap-10 w-[80%] rounded-xl py-5 h-screen bg-white">
          <div
            className="left  h-[100%] px-8"
            // style={{ backgroundImage: `url(${sidebar})` }}
          >
            <img className="absolute h-[90%] w-[20%]" src={sidebar} alt="" />
            <div className="steps flex flex-col gap-6 relative top-5 left-5">
              <div
                onClick={() => {
                  setStep(1);
                }}
                className="step flex gap-3 items-center cursor-pointer"
              >
                <h1 className="w-[50px] h-[50px] hover:bg-blue-300 text-center hover:text-black rounded-full flex items-center justify-center font-bold border-2 border-solid border-blue-300 text-white transition-all duration-700">
                  1
                </h1>
                <div className="flex flex-col">
                  <h2 className="text-white text-sm uppercase font-[ubuntu] font-semibold">
                    Step 1
                  </h2>
                  <h3 className="text-white text-md font-bold uppercase font-[ubuntu]">
                    Your info
                  </h3>
                </div>
              </div>

              <div
                onClick={() => {
                  setStep(2);
                }}
                className="step flex gap-3 items-center cursor-pointer"
              >
                <h1 className="w-[50px] h-[50px] hover:bg-blue-300 text-center hover:text-black rounded-full flex items-center justify-center font-bold border-2 border-solid border-blue-300 text-white transition-all duration-700">
                  2
                </h1>
                <div className="flex flex-col">
                  <h2 className="text-white text-sm uppercase font-[ubuntu] font-semibold">
                    Step 2
                  </h2>
                  <h3 className="text-white text-md font-bold uppercase font-[ubuntu]">
                    Select Plan
                  </h3>
                </div>
              </div>

              <div
                onClick={() => {
                  setStep(3);
                }}
                className="step flex gap-3 items-center cursor-pointer"
              >
                <h1 className="w-[50px] h-[50px] hover:bg-blue-300 text-center hover:text-black rounded-full flex items-center justify-center font-bold border-2 border-solid border-blue-300 text-white transition-all duration-700">
                  3
                </h1>
                <div className="flex flex-col">
                  <h2 className="text-white text-sm uppercase font-[ubuntu] font-semibold">
                    Step 3
                  </h2>
                  <h3 className="text-white text-md font-bold uppercase font-[ubuntu]">
                    Add-ons
                  </h3>
                </div>
              </div>

              <div
                onClick={() => {
                  setStep(4);
                }}
                className="step flex gap-3 items-center cursor-pointer"
              >
                <h1 className="w-[50px] h-[50px] hover:bg-blue-300 text-center hover:text-black rounded-full flex items-center justify-center font-bold border-2 border-solid border-blue-300 text-white transition-all duration-700">
                  4
                </h1>
                <div className="flex flex-col">
                  <h2 className="text-white text-sm uppercase font-[ubuntu] font-semibold">
                    Step 4
                  </h2>
                  <h3 className="text-white text-md font-bold uppercase font-[ubuntu]">
                    Summary
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {step === 1 && (
            <div className="right flex flex-col my-10 gap-3">
              <h1 className="text-4xl font-bold font-[ubuntu] text-blue-950">
                Personal info
              </h1>
              <p className=" font-medium text-lg font-[ubuntu] text-gray-500">
                Please provide your name, email address, and phone number.
              </p>

              <form className="flex flex-col gap-8" action="">
                <label htmlFor="name" className="flex flex-col">
                  <h1 className="font-semibold font-[ubuntu] text-blue-950">
                    Name
                  </h1>
                  <input
                    className="border px-5 py-2 rounded-lg font-semibold font-[ubuntu] text-blue-950"
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                  />
                </label>

                <label htmlFor="email" className="flex flex-col">
                  <h1 className="font-semibold font-[ubuntu] text-blue-950">
                    Email Address
                  </h1>
                  <input
                    className="border px-5 py-2 rounded-lg font-semibold font-[ubuntu] text-blue-950"
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                  />
                </label>

                <label htmlFor="phone">
                  <div className="flex justify-between">
                    <p className="font-semibold font-[ubuntu] text-blue-950">
                      Phone number
                    </p>
                    <h4 className="text-rose-500 font-semibold font-[ubuntu]">
                      This field id required
                    </h4>
                  </div>
                  <input
                    className="border px-5 py-2 rounded-lg w-full font-semibold font-[ubuntu] text-blue-950"
                    type="text"
                    placeholder="Enter your phone number"
                    id="phone"
                  />
                </label>
              </form>

              <div className="buttons flex items-center justify-end mt-[10%] ">
                
                <Button text="Next Page" click={nextPage} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="right flex flex-col my-10 gap-3">
              <h1 className="text-4xl font-bold font-[ubuntu] text-blue-950">
                Select your plan
              </h1>
              <p className=" font-medium text-lg font-[ubuntu] text-gray-500">
                You have the option of monthly or yearly billing.
              </p>

              <div className="statuses flex gap-3">
                <div
                  onClick={() => handleStatusClick(color1, setColor1)}
                  className={`status w-1/3 flex flex-col border-2 border-solid ${
                    color1
                      ? "bg-blue-600 border-blue-950"
                      : "border-transparent"
                  } hover:border-blue-950 border-gray-400 px-4 py-5 rounded-lg duration-700 cursor-pointer`}
                >
                  <img
                    className="h-[40%] w-[40%] mb-[30%]"
                    src={arcade}
                    alt=""
                  />
                  <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                    Arcade
                  </h1>
                  <p className="text-gray-400 font-ubuntu text-medium text-sm">
                    $9/monthly
                  </p>
                </div>

                <div
                  onClick={() => handleStatusClick(color2, setColor2)}
                  className={`status w-1/3 flex flex-col border-2 border-solid ${
                    color2 ? "bg-blue-600" : "border-transparent"
                  } hover:border-blue-950 border-gray-400 px-4 py-5 rounded-lg duration-700 cursor-pointer`}
                >
                  <img
                    className="h-[40%] w-[40%] mb-[30%]"
                    src={advanced}
                    alt=""
                  />
                  <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                    Advanced
                  </h1>
                  <p className="text-gray-400 font-ubuntu text-medium text-sm">
                    $19/monthly
                  </p>
                </div>

                <div
                  onClick={() => handleStatusClick(color3, setColor3)}
                  className={`status w-1/3 flex flex-col border-2 border-solid ${
                    color3 ? "bg-blue-600" : "border-transparent"
                  } hover:border-blue-950 border-gray-400 px-4 py-5 rounded-lg duration-700 cursor-pointer`}
                >
                  <img className="h-[40%] w-[40%] mb-[30%]" src={pro} alt="" />
                  <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                    Pro
                  </h1>
                  <p className="text-gray-400 font-ubuntu text-medium text-sm">
                    $29/monthly
                  </p>
                </div>
              </div>
              <div className="mx-auto bg-slate-300 w-full justify-center flex py-2 rounded-lg mt-5">
                <div className="flex items-center gap-4">
                  <p className="ml-2 font-semibold font-[ubuntu]">Monthly</p>
                  <div
                    className={`w-12 h-6 bg-blue-800 rounded-full p-1 flex items-center cursor-pointer`}
                    onClick={handleToggle}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                        toggle === "monthly" ? "translate-x-0" : "translate-x-6"
                      } transition-transform`}
                    />
                  </div>
                  <p className="ml- font-semibold font-[ubuntu]">Yearly</p>
                </div>
              </div>

              <div className="buttons flex items-center justify-between mt-[10%]">
                <button
                  className=" text-gray-600 hover:text-black font-[ubuntu] font-semibold"
                  onClick={back}
                >
                  Go back
                </button>
                <Button text="Next Page" click={nextPage} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="right flex flex-col my-10 gap-3">
              <h1 className="text-4xl font-bold font-[ubuntu] text-blue-950">
                Pick add-ons
              </h1>
              <p className=" font-medium text-lg font-[ubuntu] text-gray-500">
                Add-ons help edhance your gaming experience
              </p>

              <div className="onses flex flex-col gap-5">
                <div
                  className={`border ${
                    isChecked3
                      ? "border-blue-950 bg-blue-200"
                      : "border-blue-950"
                  }  ons flex items-center justify-between border-2 border-blue-800 rounded-lg px-4 py-2`}
                  style={{ borderWidth: isChecked3 ? "1px" : "1px" }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked3}
                    onChange={handleBorder3}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                      Online service
                    </h1>
                    <p className="text-gray-400 font-ubuntu text-medium text-sm">
                      Acces to multiplayer games{" "}
                    </p>
                  </div>
                  <h2 className="ml-[10%] text-blue-700 font-[ubuntu] font-semibold text-sm">
                    +$1/monthly
                  </h2>
                </div>
                <div
                  className={`border ${
                    isChecked
                      ? "border-blue-950 bg-blue-200"
                      : "border-blue-950"
                  }  ons flex items-center justify-between border-2 border-blue-800 rounded-lg px-4 py-2`}
                  style={{ borderWidth: isChecked ? "1px" : "1px" }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleBorder}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                      Larger storage
                    </h1>
                    <p className="text-gray-400 font-ubuntu text-medium text-sm">
                      Salimov To'lqin Shuhrat o'g'li
                    </p>
                  </div>
                  <h2 className="ml-[10%] text-blue-700 font-[ubuntu] font-semibold text-sm">
                    +$2/monthly
                  </h2>
                </div>

                <div
                  className={`border ${
                    isChecked2
                      ? "border-blue-950 bg-blue-200"
                      : "border-blue-950"
                  }  ons flex items-center justify-between border-2 border-blue-800 rounded-lg px-4 py-2`}
                  style={{ borderWidth: isChecked2 ? "1px" : "1px" }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={handleBorder2}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                      Customizable Profile
                    </h1>
                    <p className="text-gray-400 font-ubuntu text-medium text-sm">
                      Custom theme on your Profile
                    </p>
                  </div>
                  <h2 className="ml-[10%] text-blue-700 font-[ubuntu] font-semibold text-sm">
                    +$2/monthly
                  </h2>
                </div>
              </div>

              <div className="buttons flex items-center justify-between mt-[10%]">
                <button
                  className=" text-gray-600 hover:text-black font-[ubuntu] font-semibold"
                  onClick={back}
                >
                  Go back
                </button>
                <Button text="Next Page" click={nextPage} />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="right flex flex-col my-10 gap-3">
              <h1 className="text-4xl font-bold font-[ubuntu] text-blue-950">
                Finishing Up
              </h1>
              <p className=" font-medium text-lg font-[ubuntu] text-gray-500">
                Double-check everything looks OK before confirming.
              </p>

              <div className="summary">
                <div className="top flex flex-col gap-4 p-5 rounded-lg bg-slate-100">
                  <div className="item flex items-center justify-between mb-5">
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold font-[ubuntu] text-blue-900">
                        Arcade monthly
                      </h1>
                      <a className=" underline text-blue-500" href="#">
                        Change
                      </a>
                    </div>

                    <h2 className="text-blue-900 font-semibold font-[ubuntu]">
                      $9/monthly
                    </h2>
                  </div>

                  <hr />

                  <div className="item flex justify-between items-center">
                    <h1 className="font-medium font-[ubuntu] text-gray-400">
                      Online service
                    </h1>
                    <p className="text-blue-800 text-sm font-semibold font-[ubuntu]">
                      +1$/monthly
                    </p>
                  </div>

                  <div className="item flex justify-between items-center">
                    <h1 className="font-medium font-[ubuntu] text-gray-400">
                      Larger storage
                    </h1>
                    <p className="text-blue-800 text-sm font-semibold font-[ubuntu]">
                      +2$/monthly
                    </p>
                  </div>
                </div>

                <div className="item flex justify-between items-center p-5">
                  <h1 className="font-lg font-[ubuntu] text-gray-400">
                    Total (per month)
                  </h1>
                  <p className="text-blue-800 text-md font-semibold font-[ubuntu]">
                    +12$/monthly
                  </p>
                </div>
              </div>

              <div className="buttons flex items-center justify-between mt-[10%]">
                <button
                  className=" text-gray-600 hover:text-black font-[ubuntu] font-semibold"
                  onClick={back}
                >
                  Go back
                </button>
                <Button text="Next Page" click={nextPage} />
              </div>
            </div>
          )}
          {step === 5 && (
            <div className="right flex flex-col my-10 gap-3">
              <h1 className="text-4xl font-bold font-[ubuntu] text-blue-950">
                Succesfully status
              </h1>
              <p className=" font-medium text-lg font-[ubuntu] text-gray-500"></p>

              <div className="buttons flex items-center justify-between mt-[10%]">
                <Button text="Home page" click={firstpage} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;

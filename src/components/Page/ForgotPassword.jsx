import React, { useState } from "react";
import { LineWave } from "react-loader-spinner";
import { Link } from "react-router";

const ForgotPassword = () => {
     const [email, setEmail] = useState("");
     const [emailError, setEmailError] = useState("");
     const handleResetPassword = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  return (
    <div className="bg-gray-400 w-[600px] px-[20px] py-[100px] mx-auto mt-[100px] rounded-2xl">
      <div>
        <h2 className="text-3xl font-bold ml-40">Forgot Password</h2>
        <input
            type="email"
            onChange={handleResetPassword}
            value={email}
            className="text-[16px] py-[20px] pr-[70px] pl-[30px] border-2 border-[#000000] rounded-[8px] outline-0 mt-7 ml-35"
            placeholder="Enter Your Email Address"
          />
             <p className="bg-blue-600 text-[12px] text-white mt-0.5 pl-1.5 rounded-[8px]  w-[190px] md:w-[270px]">
            {emailError}
          </p>
        <div className="text-center space-x-[20px] mt-[30px]">
          <button className="bg-gray-600 cursor-pointer hover:bg-cyan-950 px-[5px] py-[7px] rounded-[8px]">Reset Password </button>
          <Link to="/login" className="bg-gray-600 cursor-pointer hover:bg-cyan-950 px-[5px] py-[7px] rounded-[8px]"> Go Back </Link>
         </div>

      </div>
    </div>
  );
};

export default ForgotPassword;

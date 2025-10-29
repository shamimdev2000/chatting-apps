import React, { useState } from "react";
import { Link } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const auth = getAuth();
     const [email, setEmail] = useState("");
     const [emailError, setEmailError] = useState("");
    const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
    const handleResetPassword = () =>{
      console.log(email);
    if (!email) {
      setEmailError("Your Email is Requred");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError("Your Valid Email is Requred");
      }
    }
    if (email && password && /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/
        ){
          sendPasswordResetEmail(auth, email)
  .then((user) => {
    console.log(user);
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
        }
    }
  return (
    <div className="bg-gray-400 w-[600px] px-[20px] py-[100px] mx-auto mt-[100px] rounded-2xl">
      <div>
        <h2 className="text-3xl font-bold ml-40">Forgot Password</h2>
        <input
            type="email"
            onChange={handleEmail}
            value={email}
            className="text-[16px] py-[20px] pr-[70px] pl-[30px] border-2 border-[#000000] rounded-[8px] outline-0 mt-7 ml-35"
            placeholder="Enter Your Email Address"
          />
             <p className="bg-blue-600 text-[12px] text-white mt-0.5 ml-[140px] rounded-[8px] px-1.5  w-[190px] md:w-[280px]">
            {emailError}
          </p>
        <div className="text-center space-x-[20px] mt-[30px]">
          <button
          onClick={handleResetPassword} 
           className="bg-gray-600 cursor-pointer hover:bg-cyan-950 px-[5px] py-[7px] rounded-[8px]">Reset Password </button>
          <Link to="/login" className="bg-gray-600 cursor-pointer hover:bg-cyan-950 px-[5px] py-[7px] rounded-[8px]"> Go Back </Link>
         </div>

      </div>
    </div>
  );
};

export default ForgotPassword;

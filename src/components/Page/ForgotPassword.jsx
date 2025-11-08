import React, { useState } from "react";
import { Link } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import abc from "../../assets/abc.png"
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
    if (email && /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/
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
      <div
          className="h-screen w-full bg-no-repeat bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${abc})` }}>
      <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-8 w-[90%] max-w-sm text-white">
        <h2 className="text-3xl font-bold text-center">Forgot Password</h2>
        <input
            type="email"
            onChange={handleEmail}
            value={email}
            className="text-[16px] py-[20px] pr-[70px] pl-[30px] border rounded-[8px] outline-0 mt-4.5 ml-3.5"
            placeholder="Enter Your Email Address"
          />
             <p className="text-[12px] text-white mt-0.5 ml-[15px] rounded-[8px] px-1.5  w-[190px] md:w-[280px]">
            {emailError}
          </p>
        <div className="text-center space-x-[20px] mt-[30px]">
          <button
          onClick={handleResetPassword} 
           className="bg-cyan-950 cursor-pointer hover:bg-[#D45455] px-[5px] py-[7px] rounded-[8px]">Reset Password </button>
          <Link to="/login" className="bg-cyan-950 cursor-pointer hover:bg-[#D45455] px-[5px] py-[7px] rounded-[8px]"> Go Back </Link>
         </div>

      </div>
    </div>
  );
};

export default ForgotPassword;

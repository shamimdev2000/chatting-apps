import React, { useState } from "react";
import registration from "../../assets/registration.png";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const [show,setShow] = useState ("")
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlefullName = (e) => {
    setfullName(e.target.value);
    setFullNameError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handlesignUp = () => {
    console.log(email, fullName, password);
    if (!email) {
      setEmailError("Your Email is Requred");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError("Your Valid Email is Requred");
      }
    }
    if (!fullName) {
      setFullNameError("Your Name is Requred");
    }
    if (!password) {
      setPasswordError("Your Password is Requred");
    } else {
      if (
        !/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/.test(
          password
        )
      ) {
        setPasswordError(
          "Your Password at least 1 uppercase, at least 1 lowercase, at least 1 numeric, at least one special character, the string must be 8 characters or longer"
        );
      }
    }
    if(email && fullName && password && (/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/)){
      createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
      console.log(user,"user");
      navigate("/login")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
    }
  };

  return (
    <div className="flex px-[10px]">
      <div className="w-[50%] md:ml-[190px] mt-[60px] md:mt-[80px]">
        <h3 className="md:w-[497px] md:text-[34px] font-bold font-nunito text-[#11175D] ">
          Get started with easily register
        </h3>
        <p className="md:w-[320px] text-[12px] md:text-[20px] mt-[13px] font-regular font-nunito text-[#404040] ">
          Free register and you can enjoy it
        </p>
        <div className="relative mt-[30px]">
          <p className="absolute top-[-8px] left-[30px] bg-white px-1 text-[13px] text-[#11175D] md:tracking-[2px] font-nunito font-semibold ">
            Email Address
          </p>

          <input
            type="email"
            onChange={handleEmail}
            value={email}
            className=" text-[10px] md:text-[16px] py-[10px] md:py-[20px] pr-[70px] md:pr-[55px] md:pl-[30px] border-2 border-[#11175D] rounded-[8px] outline-0 "
            placeholder="Enter Your Email Address"
          />
          <p className="bg-blue-600 text-[12px] text-white mt-0.5 pl-1.5 rounded-[8px]  w-[190px] md:w-[270px]">
            {emailError}
          </p>
        </div>

        <div className="relative mt-[30px]">
          <p className="absolute top-[-8px] left-[30px] bg-white px-1 text-[13px] text-[#11175D] md:tracking-[2px] font-nunito font-semibold ">
            {" "}
            Full Name
          </p>
          <input
            type="name"
            onChange={handlefullName}
            className="  text-[10px] md:text-[16px] py-[10px] md:py-[20px] pr-[70px] md:pr-[55px] md:pl-[30px] border-2 border-[#11175D] rounded-[8px] outline-0 "
            placeholder="Full Name"
          />
          <p className="bg-blue-600 text-[12px] text-white  mt-0.5 pl-1.5 rounded-[8px] w-[190px] md:w-[270px]">
            {fullNameError}
          </p>
        </div>
        <div className="relative mt-[30px]">
          <p className="absolute top-[-8px] left-[30px] bg-white px-1 text-[13px] text-[#11175D] md:tracking-[2px] font-nunito font-semibold ">
            Password
          </p>
          <input
            type={show ? "text" : "password"}
            onChange={handlePassword}
            className="text-[10px] md:text-[16px] py-[10px] md:py-[20px] pr-[70px] md:pr-[55px] md:pl-[30px] border-2 border-[#11175D] rounded-[8px] outline-0 "
            placeholder="Your Password"
          />
          <div className="absolute top-[29px] right-[320px]">
            {show ? (
              <FaEyeSlash onClick={() => setShow(!show)} />
            ) : (
              <FaEye onClick={() => setShow(!show)} />
            )}
          </div>
          <p className="bg-blue-600 text-[12px] text-white  mt-0.5 pl-1.5 rounded-[8px] w-[190px] md:w-[270px]">
            {passwordError}
          </p>
        </div>
        <button
          onClick={handlesignUp}
          className=" py-[10px] md:py-[16px] px-[65px] md:px-[100px] md:text-[20px] font-semibold font-nunito mt-[30px] bg-[#1E1E1E] text-white rounded-[85px] cursor-pointer "
        >
          Sign up
        </button>
        <p className="mt-[15px] ml-[10px] text-[10px] md:text-[13px] font-nunito">
          Already have an account ?{" "}
          <Link to="/login">
          <span className="text-[#EA6C00] text-[13px] font-nunito ">
            Sign In
          </span></Link>
        </p>
      </div>
      <div className="w-[50%]">
        <img
          className="object-cover w-full h-screen"
          src={registration}
          alt=""
        />
      </div>
    </div>
  );
};

export default Registration;

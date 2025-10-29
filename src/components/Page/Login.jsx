import React, { useState } from "react";
import login from "../../assets/login.png";
import google from "../../assets/google.png";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()
  const [show, setShow] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const handleLogin = () => {
    console.log(email, password);
    if (!email) {
      setEmailError("Your Email is Requred");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError("Your Valid Email is Requred");
      }
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
    if (email && password && /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/
    ){
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
        console.log(user,"login");
        setTimeout(()=>{
          navigate("/")
        },2000)
        toast.success("Your Login Successfully Done")

        
        })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode.incudes("auth/invalid-credential")){
            toast.error("please give right email & password")
          }
        });
    }
      
  };
  const handleGoogleSignIn = ()=>{
  signInWithPopup(auth, provider)
  .then((user) => {
    console.log(user);
    
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    
    
  });
  }

  return (
    <div className="flex px-[10px] ">
      <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
      <div className="w-[50%] md:ml-[190px] mt-[80px]">
        <h3 className="md:w-[497px] md:text-[34px] font-bold font-nunito text-[#11175D] ">
          Login to your account!
        </h3>
        <p className="mt-[13px] w-[180px]">
          <img onClick={handleGoogleSignIn} src={google} alt="" />
        </p>
        <div className="relative mt-[30px]">
          <p className="absolute top-[-8px] md:left-[30px] bg-white px-1 text-[13px] text-[#11175D] md:tracking-[2px] font-nunito font-semibold ">
            Email Address
          </p>

          <input
            type="email"
            onChange={handleEmail}
            value={email}
            className="py-[20px] pr-[90px] md:pr-[150px] md:pl-[30px] text-[10px] border-b-1 outline-none border-[#11175D]"
            placeholder="Enter Your Email Address"
          />
          <p className="bg-blue-600 text-[12px] text-white mt-0.5 pl-1.5 rounded-[8px]  w-[190px] md:w-[270px]">
            {emailError}
          </p>
        </div>

        <div className="relative mt-[30px]">
          <p className=" absolute top-[-8px] md:left-[30px] bg-white px-1 text-[13px] text-[#11175D] md:tracking-[2px] font-nunito font-semibold ">
            Password
          </p>
          <input
            type={show ? "text" : "password"}
            onChange={handlePassword}
            className="py-[20px] pr-[90px] md:pr-[150px] md:pl-[30px] text-[10px] border-b-1 outline-none border-[#11175D]"
            placeholder="Your Password"
          />
          <div className="absolute top-[25px] right-[300px]">
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
          onClick={handleLogin}
          className="py-[10px] md:py-[16px] px-[30px] md:px-[100px] text-md:[20px] md:font-semibold font-nunito cursor-pointer mt-[30px] bg-[#1E1E1E] text-white rounded-[9px] "
        >
          Login to Continue
        </button>
        <Link to="/forgotPassword"><p className="mt-[10px] cursor-pointer font-medium ml-[100px] text-[#EA6C00] font-nunito">
          Forgot Password</p></Link>
        <p className="mt-[15px] ml-[70px] text-[10px] md:text-[13px] font-nunito">
          Don’t have an account ?{" "}
          <Link to="/registration">
            <span className="text-[#EA6C00] text-[13px] font-nunito ">
              Sign Up
            </span>
          </Link>
        </p>
      </div>
      <div className="w-[50%]">
        <img className="object-cover w-full h-screen" src={login} alt="" />
      </div>
    </div>
  );
};

export default Login;

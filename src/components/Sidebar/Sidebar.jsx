import React from 'react'
import profile from "../../assets/profile.png"
import { AiOutlineHome } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from '../../Slices/userSlice';

const Sidebar = () => {
  const data = useSelector((state)=>(state.user.value))
  console.log(data);
  
  const dispatch = useDispatch()
  const auth = getAuth();
  const navigate = useNavigate()
  const handleSignOut = () =>{
        localStorage.removeItem("userInfo")
        dispatch(userInfo(null))
        signOut(auth).then(() => {
          setTimeout(()=>{
            navigate("/login")
          },2000)
}).catch((error) => {
});
        
  }
  return (
    <div className='w-[186px] h-[955px] bg-[#1E1E1E] ml-[32px] rounded-[20px] text-white '>
       
       <div className='flex justify-center pt-[38px]'>
        <img src={profile} alt="" />
       </div>
       <div className='flex justify-center mt-2 font-bold text-xl'>
        <h2>{data?.displayName || data?.user?.displayName}</h2>
       </div>
       <div  className="relative">
        <div className=' absolute after:absolute after:content-[""] after:top-0 after:right-[25px] after:h-full after:w-[10px] after:bg-[#1E1E1E] after:rounded-tl-[20px] after:rounded-bl-[20px] after:r left-[25px] mt-[50px] w-full pl-[45px] text-[#1E1E1E] text-[46px]  bg-white rounded-lg py-[20px] cursor-pointer  '>
         <AiOutlineHome />
       </div>
       </div>
       <div  className="relative">
        <div className=' absolute after:absolute after:content-[""] after:top-0 after:right-[25px] after:h-full after:w-[10px] after:bg-[#1E1E1E] after:rounded-tl-[20px] after:rounded-bl-[20px] after:r left-[25px] mt-[170px] w-full pl-[45px] text-[#1E1E1E] text-[46px]  bg-white rounded-lg py-[20px] cursor-pointer  '>
         <AiFillMessage />
       </div>
       </div>
       <div  className="relative">
        <div className=' absolute after:absolute after:content-[""] after:top-0 after:right-[25px] after:h-full after:w-[10px] after:bg-[#1E1E1E] after:rounded-tl-[20px] after:rounded-bl-[20px] after:r left-[25px] mt-[290px] w-full pl-[45px] text-[#1E1E1E] text-[46px]  bg-white rounded-lg py-[20px] cursor-pointer '>
        <IoSettingsOutline />
       </div>
       </div>
       <div  className="relative">
        <div onClick= {handleSignOut} className=' absolute after:absolute after:content-[""] after:top-0 after:right-[25px] after:h-full after:w-[10px] after:bg-[#1E1E1E] after:rounded-tl-[20px] after:rounded-bl-[20px] after:r left-[25px] mt-[640px] w-full pl-[45px] text-[#1E1E1E] text-[46px]  bg-white rounded-lg py-[20px] cursor-pointer '>
         
        <ImExit />
       </div>
       </div>
    </div>
  )
}

export default Sidebar
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import user from "../../assets/user.png";
import { getDatabase, ref, onValue } from "firebase/database";

const UserList = () => {
  const db = getDatabase();
  const [userList,setUserList] = useState([])
 useEffect(()=>{
 const userRef = ref (db, "users")
  onValue(userRef, (snapshot) => {
  let arr = []
   snapshot.forEach((item)=>{
    arr.push(item.val());

   })
   setUserList(arr);
});
},[])
console.log(userList);

  return (
    <div className=' shadow rounded-lg py-[13px] px-[10px] ml-[22px] font-poppins'>
        <div className='flex items-center justify-between '>
            <h2 className='text-[20px] font-semibold '>User List</h2>
            <h2 className='text-xl'><BsThreeDotsVertical /></h2>
        </div>
        <div className='h-[400px] overflow-y-scroll'>
          {
            userList.map((user)=>(
               <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>{user.username}</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>{user.email}</p>
            </div>
            <button className='px-[22px] bg-[#1E1E1E] text-white rounded-[5px] text-[20px] ml-2 font-semibold '>+</button>
          </div>
        </div>
            ))
          }
           
        {/* <div className='flex justify-between mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-end items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>MD SHAMIM</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[22px] bg-[#1E1E1E] text-white rounded-[5px] text-[20px] ml-2  font-semibold '>+</button>
          </div>
        </div>
        <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>MD SHAMIM</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[22px] bg-[#1E1E1E] text-white rounded-[5px] text-[20px] ml-2 font-semibold '>+</button>
          </div>
        </div>
        <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>MD SHAMIM</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[22px] bg-[#1E1E1E] text-white rounded-[5px] text-[20px] ml-2 font-semibold '>+</button>
          </div>
        </div>
        <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>MD SHAMIM</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[22px] bg-[#1E1E1E] text-white rounded-[5px] text-[20px] ml-2 font-semibold '>+</button>
          </div>
        </div> */}
        </div>
    </div>
  )
}


export default UserList
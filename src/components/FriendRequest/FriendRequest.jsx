import React, { useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import user from "../../assets/user.png";
import { useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';

const FriendRequest = () => {
  const [friendRequest, setFriendRequest] = useState([])
   const db = getDatabase()
   const data = useSelector((selector)=> selector?.user?.value?.user)

  useEffect(()=>{
    const friendRequestRef = ref(db, "friendRequest")
     onValue(friendRequestRef, (snapshot) => {
     let arr = []
      snapshot.forEach((item)=>{
        if(data.uid == item.val().receiverId){
          
          arr.push({id:item.key,...item.val()});
        }
          console.log(item.val());
          console.log(item);

          
      })
     setFriendRequest(arr);
     console.log(friendRequest);
     
   });
  },[])
  console.log(friendRequest);
  

  return (
    <div className=' shadow rounded-lg py-[13px] px-[10px] ml-[22px] font-poppins mt-10'>
        <div className='flex items-center justify-between '>
            <h2 className='text-[20px] font-semibold '>Friend Request</h2>
            <h2 className='text-xl'><BsThreeDotsVertical /></h2>
        </div>
        <div className='h-[400px] overflow-y-scroll'>
          {
            friendRequest.map((item)=>(
          <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>{item.senderName}</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[5px] bg-[#1E1E1E] text-white rounded-[5px] text-[20px] ml-9 font-semibold '>Accept</button>
          </div>
        </div>
            ))
          }
            
        </div>
    </div>
  )
}

export default FriendRequest
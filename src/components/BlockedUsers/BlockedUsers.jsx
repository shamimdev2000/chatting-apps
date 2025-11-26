import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import user from "../../assets/user.png";

const BlockedUsers = () => {
  return (
    <div className=' shadow rounded-lg py-[13px] px-[10px] ml-[22px] font-poppins mt-10'>
        <div className='flex items-center justify-between '>
            <h2 className='text-[20px] font-semibold '>Blocked Users</h2>
            <h2 className='text-xl'><BsThreeDotsVertical /></h2>
        </div>
        <div className='h-[400px] overflow-y-scroll'>
            <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>MD SHAMIM</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[5px] bg-[#1E1E1E] text-white rounded-[5px] text-[16px] ml-2 font-semibold '>unblock</button>
          </div>
        </div>
        <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>MD SHAMIM</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[5px] bg-[#1E1E1E] text-white rounded-[5px] text-[16px] ml-2 font-semibold '>unblock</button>
          </div>
        </div>
        <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>MD SHAMIM</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[5px] bg-[#1E1E1E] text-white rounded-[5px] text-[16px] ml-2 font-semibold '>unblock</button>
          </div>
        </div>
        <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>MD SHAMIM</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[5px] bg-[#1E1E1E] text-white rounded-[5px] text-[16px] ml-2 font-semibold '>unblock</button>
          </div>
        </div>
        <div className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
          <div className='flex justify-between items-center'>
              <img src={user} alt="" />
            <div className='ml-[14px]'>
                <h3 className='font-semibold text-[18px] '>MD SHAMIM</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>wellcome</p>
            </div>
            <button className='px-[5px] bg-[#1E1E1E] text-white rounded-[5px] text-[16px] ml-2 font-semibold '>unblock</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default BlockedUsers
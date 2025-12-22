import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import userImg from "../../assets/user.png"
import { getDatabase, ref, onValue, push, off } from "firebase/database"
import { useSelector } from 'react-redux'

const UserList = () => {
  const data = useSelector((state) => state?.user?.value?.user)
  const db = getDatabase()

  const [userList, setUserList] = useState([])
  const [friendRequestList, setFriendRequestList] = useState([])

  // 🔹 Get all users
  useEffect(() => {
    if (!data?.uid) return

    const userRef = ref(db, "users")

    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (item.key !== data.uid) {
          arr.push({ ...item.val(), userId: item.key })
        }
      })
      setUserList(arr)
    })

    return () => off(userRef)
  }, [data?.uid])

  // 🔹 Get friend request list
  useEffect(() => {
    const requestRef = ref(db, "friendRequest")

    onValue(requestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        arr.push(item.val().senderId + item.val().receiverId)
      })
      setFriendRequestList(arr)
    })

    return () => off(requestRef)
  }, [])

  // 🔹 Send friend request
  const handleFriendRequest = (item) => {
    push(ref(db, "friendRequest"), {
      senderName: data.displayName,
      senderId: data.uid,
      receiverName: item.username,
      receiverId: item.userId,
    })
  }

  return (
    <div className='shadow rounded-lg py-[13px] px-[10px] ml-[22px] font-poppins'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[20px] font-semibold'>User List</h2>
        <BsThreeDotsVertical />
      </div>

      <div className='h-[400px] overflow-y-scroll'>
        {userList.map((user) => (
          <div key={user.userId} className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
            <div className='flex justify-between items-center w-full'>
              <img src={userImg} alt="" />
              <div className='ml-[14px] flex-1'>
                <h3 className='font-semibold text-[18px]'>{user.username}</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>{user.email}</p>
              </div>

              {friendRequestList.includes(data.uid + user.userId) ||
              friendRequestList.includes(user.userId + data.uid) 
              ?
               (<button className='px-[22px] bg-[#1E1E1E] text-white rounded-[5px] text-[20px] ml-2'>-</button>) 
               :
                (<button onClick={() => handleFriendRequest(user)}
                  className='px-[22px] bg-[#1E1E1E] text-white rounded-[5px] text-[20px] ml-2'> + </button> )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList

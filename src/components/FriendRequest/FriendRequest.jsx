import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import user from "../../assets/user.png"
import { getDatabase, onValue, ref, push, off, remove } from 'firebase/database'
import { useSelector } from 'react-redux'

const FriendRequest = () => {
  const db = getDatabase()
  const data = useSelector((state) => state?.user?.value?.user)

  const [friendRequest, setFriendRequest] = useState([])

  useEffect(() => {
    if (!data?.uid) return

    const friendRequestRef = ref(db, "friendRequest")

    onValue(friendRequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (data.uid === item.val().receiverId) {
          arr.push({ id: item.key, ...item.val() })
        }
      })
      setFriendRequest(arr)
    })

    return () => off(friendRequestRef)
  }, [data?.uid])

  const handleFriend = (item) => {
    push(ref(db, "friend"), {
      receiverName: item.receiverName,
      receiverId: item.receiverId,
      senderName: item.senderName,
      senderId: item.senderId,
    })

    // remove request after accept
    remove(ref(db, `friendRequest/${item.id}`))
  }

  return (
    <div className='shadow rounded-lg py-[13px] px-[10px] ml-[22px] font-poppins mt-10'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[20px] font-semibold'>Friend Request</h2>
        <h2 className='text-xl'><BsThreeDotsVertical /></h2>
      </div>

      <div className='h-[400px] overflow-y-scroll'>
        {friendRequest.map((item) => (
          <div key={item.id} className='flex mt-[17px] border-b pb-[13px] border-[#8b8282]'>
            <div className='flex justify-between items-center w-full'>
              <img src={user} alt="" />
              <div className='ml-[14px] flex-1'>
                <h3 className='font-semibold text-[18px]'>{item.senderName}</h3>
                <p className='font-medium text-[14px] text-[#4D4D4D]'>welcome</p>
              </div>
              <button
                onClick={() => handleFriend(item)}
                className='px-[12px] bg-[#1E1E1E] text-white rounded-[5px] text-[16px] font-semibold'
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendRequest

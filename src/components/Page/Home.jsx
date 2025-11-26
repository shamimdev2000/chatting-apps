import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import abc from "../../assets/abc.png"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import Grouplist from '../Grouplist/Grouplist';
import Friends from '../Friends/Friends';
import UserList from '../UserList/UserList';
import FriendRequest from '../FriendRequest/FriendRequest';
import MyGroups from '../MyGroups/MyGroups';
import BlockedUsers from '../BlockedUsers/BlockedUsers';

const Home = () => {
  const navigate = useNavigate ()
  const auth = getAuth();
  const data = useSelector(state=>(state.user.value))
  console.log(data);
  const [verify,setVerify] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    if(!data){
       navigate("/login")
    }
  })
  onAuthStateChanged(auth, (user) => {
  if (user?.emailVerified) {
         setVerify(true)
  }
  setLoading(false)
});

  if(loading){
    return null
  }
  return (
    <div>
      {
        verify ?
          <div className='flex my-[35px]'>
          <div>
            <Sidebar />
            </div>
          <div className='w-[420px]'>
            <Grouplist />
            <FriendRequest />
            </div>
          <div className='w-[420px]'>
            <Friends />
            <MyGroups />
          </div>
          <div>
            <UserList />
            <BlockedUsers />
          </div>
          </div>
        :
          <div
      className="h-screen w-full bg-no-repeat bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${abc})` }}>
        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-8 w-[90%] max-w-sm text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Please Verify Your Email <span className='text-[18px]'>{data.email}</span></h2>
        <Link to="/login" className="bg-cyan-950 cursor-pointer hover:bg-[#D45455] px-[5px] ml-[110px] py-[7px] rounded-[8px]"> Back To Login </Link>
        </div>
        </div>
      }
      </div>
  )
}
export default Home
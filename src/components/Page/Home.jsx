import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import abc from "../../assets/abc.png"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router';

const Home = () => {
  const auth = getAuth();
  const data = useSelector(state=>(state.user.value))
  console.log(data);
  const [verify,setVerify] = useState(false)

  onAuthStateChanged(auth, (user) => {
  if (user.emailVerified) {
         setVerify(true)
  }
  
});

  
  return (
    <div>
      {
        verify ?
          <div
      className="h-screen w-full bg-no-repeat bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${abc})` }}>
        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-8 w-[90%] max-w-sm text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Well Come To Our Home Page</h2>
        </div>
        </div>
        :
          <div
      className="h-screen w-full bg-no-repeat bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${abc})` }}>
        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-8 w-[90%] max-w-sm text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Please Verify Your Email</h2>
        <Link to="/login" className="bg-cyan-950 cursor-pointer hover:bg-[#D45455] px-[5px] ml-[110px] py-[7px] rounded-[8px]"> Back To Login </Link>
        </div>
        </div>
      }
      </div>
  )
}
export default Home
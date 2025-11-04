import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector(state=>(state.userInfo.value))
  console.log(data);
  const [verify,setVerify] = useState(false)
  
  return (
    <div>
      {
        verify ?
        <p>Well Come To Our Home Page</p>
        :
        <p>Please Verify Your Email</p>
      }
      </div>
  )
}
export default Home
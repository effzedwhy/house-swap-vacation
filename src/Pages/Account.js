import React, { useState } from 'react'
import SignUp from '../Components/Profile/SignUp'
import Login from '../Components/Profile/Login'

const Account = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return <div>{isSignUp ? <SignUp /> : <Login />}</div>
}

export default Account

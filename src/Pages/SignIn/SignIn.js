import React from 'react'
import { CiLock, CiUser } from 'react-icons/ci'
import './SignIn.css'
import { useState } from 'react'

const SignIn = (FormHandle) => {

  const [User, setUser] = useState('')
  const [Password, setPassword] = useState('')
  function handleLogin(e){
    e.preventDefault();
    console.log(User, Password)
  }

  return (
    <h1>
    <div className = "form-container" >
        <h2>Login</h2>
      <br/>
        <form onSubmit={handleLogin}>
            <div className = "form-control">
                <input type="text" placeholder="Enter your email address" onChange={(e)=> setUser(e.target.value)}/>
                <CiUser className = "icon" />
            </div>

            <div className = "form-control">
                <input type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/>
                <CiLock className = "icon" />
            </div>

            <button onClick={handleLogin}>Sign In</button>
        </form>

        <p onClick = {() => FormHandle("signup")}>
          Don't have an account?
          </p>
    </div>
    </h1>
  )
}

export default SignIn;
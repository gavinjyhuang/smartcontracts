import React from 'react'
import { CiLock, CiUser } from 'react-icons/ci'
import './SignIn.css'

const SignIn = () => {
  return (
    <h1>
    <div className = "form-container" >
        <h2>Login</h2>
      <br/>
        <form>
            <div className = "form-control">
                <input type="text" placeholder="Enter your email address" />
                <CiUser className = "icon" />
            </div>

            <div className = "form-control">
                <input type="password" placeholder="Enter your password" />
                <CiLock className = "icon" />
            </div>

            <button>Sign In</button>
        </form>

        <p>Don't have an account?</p>
    </div>
    </h1>
  )
}

export default SignIn;
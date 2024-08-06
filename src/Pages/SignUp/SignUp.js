import './SignUp.css'
import React from 'react'
import { CiLock, CiUser, MdAlternateEmail } from 'react-icons/ci'
import { MdAlternateEmail } from 'react-icons/md'

const SignUp = () => {
  return (
    <h1>
    <div className = "form-container" >
        <h2>Sign Up</h2>
      <br/>
        <form>
            <div className = "form-control">
                <input type="text" placeholder="Enter your username" />
                <CiUser className = "icon" />
            </div>

            <div className = "form-control">
                <input type="email" placeholder="Enter your email address" />
                <MdAlternateEmail className = "icon" />
            </div>

            <div className = "form-control">
                <input type="password" placeholder="Enter your password" />
                <CiLock className = "icon" />
            </div>

            <button>Sign Up</button>
        </form>

        <p>Already have an account?</p>
    </div>
    </h1>
  )
}

export default SignUp;
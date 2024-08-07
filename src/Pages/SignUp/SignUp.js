import './SignUp.css'
import React from 'react'
import { CiLock, CiUser, CiAt } from 'react-icons/ci'

const SignUp = (FormHandle) => {
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
                <CiAt className = "icon" />
            </div>

            <div className = "form-control">
                <input type="password" placeholder="Enter your password" />
                <CiLock className = "icon" />
            </div>

            <button>Sign Up</button>
        </form>

        <p onClick={()=> FormHandle('signin')}>
          Already have an account?
          </p>
    </div>
    </h1>
  )
}

export default SignUp;
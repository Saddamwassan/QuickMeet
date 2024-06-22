import React, { useState } from 'react'
import Signup from './signup'
import image from '../../assets/signup.jpg'
import Login from './login';

function Auth() {
    const [isLogin, setLogin] = useState(true);
    return (
        <div className="SignUpDiv">
            <div className="signupinner">
                <img className="image" src={image} alt="signupImage" />
                {/* form  */}
                <div className="formdiv">
                {
                    isLogin ? <Login /> : <Signup />
                }
                <div className="logindiv">
                    <span>{isLogin?"Don't ":"Already "}have an account?</span> 
                    <a className='signbtn' onClick={()=>setLogin(checkLogin=>!checkLogin)}>{isLogin ? "Sign up":"Log in"}</a>
                </div>

                </div>
            </div>
        </div>)
}

export default Auth
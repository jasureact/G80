import React from 'react'
import '../index.css'
const SignIn=(props)=>{
    return(
        <div className="main">
            <div className="kart">
                <h2>Welcome Back</h2>
                <p>Login back into your account</p>
                <p>Don't have an account yet? <a href="#" className="link" onClick={props.stark}>Join Now</a></p>
            </div>
        </div>
    )
}
export default SignIn;
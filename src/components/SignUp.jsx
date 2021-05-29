import React from 'react'
import '../index.css'
const SignUp=(props)=>{
    return(
        <div className="main">
            <div className="kart">
                <h2>Welcome</h2>
                <p>Signup into your account</p>
                
                <p>Already have an account? <a href="#" className="link" onClick={props.stark}>Log In</a></p>
            </div>
        </div>
    )
}
export default SignUp;

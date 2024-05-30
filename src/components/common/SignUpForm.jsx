import React from "react";
import LoginFrom from "./LoginForm";

const SignUpForm = () =>{
    return(
        <div>
            <LoginFrom></LoginFrom>
            <div className="container col-12 col-lg-5 ">
                
                <div className="form-floating mb-3">
            <div className="col-12">
            <input 
              type="password"
              className="border border-primary p-4 form-control border-0 border-bottom rounded-0"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
            ></input>
            <label htmlFor="confirmPassword" className="form-label"></label>
            </div>
            </div>
            </div>
        </div>
    )
}

export default SignUpForm;
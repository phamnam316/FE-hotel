import React from 'react';
import { Link } from "react-router-dom";
import SignUpForm from '../common/LoginForm';
import CustomButton from '../common/CustomButton';



const SignUpPage = () => {
    return(
        <div className='container '>
            <div className="row">
            <div className="col-12">
            <div className="mt-5 ">
              <h2 className="display-5 fw-bold text-center">Sign Up</h2>
            </div>
            </div>
        </div>
            <div class="py-3 py-md-5 py-xl-8 ">
                <SignUpForm></SignUpForm>
                <Link to="/login">
                <CustomButton className="btn btn-lg btn-dark rounded-0 fs-6 " type="submit">Sign Up</CustomButton>
                </Link>
                
                
                
            </div>

            
        </div>
    )
}

export default SignUpPage
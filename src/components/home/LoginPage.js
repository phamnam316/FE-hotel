import React from 'react';
import { Link } from "react-router-dom";
import LoginForm from '../common/LoginForm';
import CustomButton from '../common/CustomButton';
import Or from '../common/Or';
import SocialLoginButton from '../common/SocialLoginButtons';


const LoginPage = () => {
    return(
        <div className='container login '>
            <div className="row">
            <div className="col-12">
            <div className="mt-5 ">
              <h2 className="display-5 fw-bold text-center">Sign in</h2>
              <p className="text-center m-0">Don't have an account?<Link to="/signup" > Sign up</Link> </p>
            </div>
            </div>
        </div>
            <div class="py-3 py-md-5 py-xl-8 ">
                <LoginForm />
                <Link to= "/">
                <CustomButton className="btn btn-lg btn-dark rounded-0 fs-6 " type="submit">Login</CustomButton>
                </Link>
                <Or/>
                <SocialLoginButton/>
            </div>

            
        </div>
    )
}

export default LoginPage
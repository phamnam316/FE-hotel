import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SignUpForm from '../common/LoginForm';
import CustomButton from '../common/CustomButton';
import Or from '../common/Or';
import SocialLoginButton from '../common/SocialLoginButtons';


const SignUpPage = () => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(true);

    const handleLogin = () => {
        // Xử lý logic đăng ký ở đây, và sau khi đăng ký thành công, hiển thị alert
        setShowSuccessAlert(true);
        localStorage.setItem('showSuccessAlert', 'true');   
        // Ví dụ: 
        // loginUser().then(() => {
        //     setShowSuccessAlert(true);
        // });
    };

    const handleClick1 = () => {
        if (showSuccessAlert) {
            // Nếu showSuccessAlert là true, hiển thị thông báo thành công
            alert("Đăng ký thành công!");
        } else {
            // Nếu showSuccessAlert là false, không hiển thị thông báo
            // hoặc có thể thực hiện các xử lý khác tùy thuộc vào yêu cầu của bạn
            console.log("Show success alert is false!");
        }
    };
    return(
        <div className='container signup'>
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
                <CustomButton className="btn btn-lg btn-dark rounded-0 fs-6 " type="submit" onClick={handleClick1}>Sign Up</CustomButton>
                </Link>
                <Or />
                <SocialLoginButton />
                
                
            </div>

            
        </div>
    )
}

export default SignUpPage
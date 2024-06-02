import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginForm from '../common/LoginForm';
import CustomButton from '../common/CustomButton';
import Or from '../common/Or';
import SocialLoginButton from '../common/SocialLoginButtons';

const LoginPage = () => {
    useEffect(() => {
        // Kiểm tra xem có thông báo cần hiển thị không
        const showSuccessAlert = localStorage.getItem('showSuccessAlert');
        if (showSuccessAlert === 'true') {
            // Nếu có, hiển thị thông báo và xóa trạng thái từ localStorage
            alert("Đăng nhập thành công!");
            localStorage.removeItem('showSuccessAlert');
        }
    }, []);
    const [showSuccessAlert, setShowSuccessAlert] = useState(true);

    const handleLogin = () => {
        // Xử lý logic đăng nhập ở đây, và sau khi đăng nhập thành công, hiển thị alert
        setShowSuccessAlert(true);
        localStorage.setItem('showSuccessAlert', 'true');   
        // Ví dụ: 
        // loginUser().then(() => {
        //     setShowSuccessAlert(true);
        // });
    };

    const handleClick = () => {
        if (showSuccessAlert) {
            // Nếu showSuccessAlert là true, hiển thị thông báo thành công
            alert("Đăng nhập thành công!");
        } else {
            // Nếu showSuccessAlert là false, không hiển thị thông báo
            // hoặc có thể thực hiện các xử lý khác tùy thuộc vào yêu cầu của bạn
            console.log("Show success alert is false!");
        }
    };

    return(
        <div className='container login  '>
            <div className="row">
                <div className="col-12">
                    <div className="mt-5 ">
                        <h2 className="display-5 fw-bold text-center">Sign in</h2>
                        <p className="text-center m-0">Don't have an account?<Link to="/signup" > Sign up</Link> </p>
                    </div>
                </div>
            </div>
            <div className="py-3 py-md-5 py-xl-8 ">
                <LoginForm />
                <Link to="/">
                    <CustomButton className="btn btn-lg btn-dark rounded-0 fs-6 " onClick={handleLogin}>Login</CustomButton>
                </Link>
                <Or />
                <SocialLoginButton />
            
            </div>
        </div>
    )
}

export default LoginPage;

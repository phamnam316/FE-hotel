import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContentCard = ({ title, content, backgroundImage, overlayImage, reverse }) => {
    return (
        <div className="content-card container mt-5">
            <div className={`row ${reverse ? 'flex-row-reverse' : ''}`}>
                <div className="col-md-6">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <a href="/dinnerbooking" className="btn btn-outline-dark">Đặt chỗ ngay</a>
                </div>
                <div className="col-md-6 position-relative">
                    <img src={backgroundImage} alt="Background" className="img-fluid w-100" />
                    <img src={overlayImage} alt="Overlay" className="overlay-image img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default ContentCard;

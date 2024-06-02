import React from "react";
import ImageSlider from "./ImageSlider";
import 'bootstrap/dist/css/bootstrap.min.css';
import IconRow from "./InforIconRoom";

const InforRoom = () => {
    const slides = [
        { url: "https://static03-cdn.oneinventory.com/images/2024/01/55600a8f90d5432599f5c54b60d2f880.jpg", title: "beach" },
        { url: "https://static03-cdn.oneinventory.com/images/2024/01/d468348b8f2447259f9b07bbf14848c3.jpg", title: "boat" },
        { url: "https://static03-cdn.oneinventory.com/images/2024/01/f358061ba7794e6e9b59775f7471104f.jpg", title: "forest" },
        { url: "https://static03-cdn.oneinventory.com/images/2024/01/55600a8f90d5432599f5c54b60d2f880.jpg", title: "city" },
        { url: "https://static03-cdn.oneinventory.com/images/2024/01/f358061ba7794e6e9b59775f7471104f.jpg", title: "italy" },
    ];
    const containerStyles = {
        width: "240px",
        height: "320px",
        margin: "0 auto",
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className="col text-center bg-light p-3">
                    <div style={containerStyles}>
                        <ImageSlider slides={slides} />
                    </div>
                </div>
                <div className="col-6  bg-light p-3 ">
                    <h2>Standard Rate</h2>
                    <div className="">
                        <div className="p-1 bg-light flex-fill m-0"><IconRow /></div>
                        <div className=" row p-1 bg-light flex-fill m-1">
                            <i className="col-1 pt-2 fa-solid fa-file-invoice "></i>
                            <p className="col-10 p-0 m-0 ">Thanh toán 100% giá trị đặt phòng.</p>
                        </div>
                        <div className="row p-1 bg-light flex-fill m-1">
                            <i className="col-1  pt-2 fa-solid fa-circle-xmark "></i>
                            <p className="col-10 p-0 ">Hủy đặt phòng sẽ tính phí 100% giá trị đặt phòng</p>
                        </div>
                    </div>
                </div>
                <div className="col bg-light p-3 d-flex justify-content-end ">
                    <div >
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => console.log('Button clicked!')}
                        >
                            Đặt ngay
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default InforRoom;
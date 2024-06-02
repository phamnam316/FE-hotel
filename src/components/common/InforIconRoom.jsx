import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const IconRow = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2 text-center">
                    <div className='row'>
                        <i className="col-1 fa-solid fa-person "></i>
                        <p className='col-1 m-0 pt-2'>x2</p>
                    </div>

                </div>
                <div className="col-2 text-center">
                    <div className="row">
                        <i className="col-1 fa-solid fa-bed "></i>
                        <p className='col-1 m-0 pt-2'>x1</p>
                    </div>

                </div>
                <div className="col-2 text-center">
                    <div className="row">
                        <i className="col-1 fa-solid fa-bath "></i>
                        <p className='col-1 m-0 pt-2'>x2</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default IconRow;

import React from "react";

const CustomButton = ({className, children, id, onClick, style}) =>{
    return(
        <div className="col-12 d-flex justify-content-center">
            <button className={className} 
            id={id}
            onClick={onClick}
            style={{width: '40%', ...style}}
            >{children}
            </button>
        </div>
        
    )
}

export default CustomButton;
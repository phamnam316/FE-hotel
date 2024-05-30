import React from "react";

const LoginFrom = () =>{
 return (
     <div>
        <div className="container col-12 col-lg-5">
            {/*email */}
        <div className="form-floating mb-3">
            <div className="col-12">
                <input type="email" className="border border-dark border-2 form-control rounded-0" name="email" id="email" placeholder="name@example.com" required ></input> 
                <label htmlFor="email" className="form-label"></label>
            </div>
        </div>
            
             {/*password */}
        <div className="form-floating mb-3">
            <div className="col-12">
                <input type="password" className="form-control border-dark border-2 rounded-0" name="password" id="password"  placeholder="Password" required ></input> 
                <label htmlFor="password" className="form-label"></label>
            </div>
        </div>

        </div> 
     </div>
 )
}

export default LoginFrom;
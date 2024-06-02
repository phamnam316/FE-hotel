import React from "react";
import { socialIcons } from "../data/Data";
import { Link } from "react-router-dom";

export default function SocialIcons() {
  return (
    <>
      <div className="col-lg-3 px-5">
        <div className="d-inline-flex align-items-center py-2">
              <Link to="/login" className="me-3" >
                <button className="ml-10 btn btn-primary btn-sm" >Sign in</button>
              </Link>
        </div>
      </div>
    </>
  );
}

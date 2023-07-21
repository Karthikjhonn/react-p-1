import React from "react";
import "./style.css"
function multipageBanner(props){
    return(
            <div className=" vh-50 position-relative">
            <div className="position-absolute page-content">
                <h1 className="fw-bold text-white">{props.title}</h1>
                <div>
                <a href="/" className="text-decoration-none text-white px-2 fs-4 d-inline" >Home /</a>
                <span className="fs-4 text-white">&#x2192;</span>
                <a href="" className="text-decoration-none text-white px-2 fs-4 d-inline">{props.link}</a>
                </div>
            </div>
            </div>
    )
}
export default multipageBanner
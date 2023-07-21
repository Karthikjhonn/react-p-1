import React from "react"
import "./style.css"

const SmallCard =(props)=>{
    return(
        <div className="d-flex align-items-center gap-1">
            <div className=" ">
                <img src={props.img} className="w-auto h-100"></img>
            </div>
            <div className=" ">
                <div>Black Round Neck T-shirt <span className="badge bg-danger fs-10">{props.new}</span> <span className="badge bg-success fs-10 ">{props.trending}</span></div>  
                <span className="fw-bold d-block">${props.price} <del className="text-muted fw-lighter">${props.discount}</del></span>
            </div>
        </div>
    )
}



export default SmallCard
import React from "react"
import "./style.css"

function CardComponent(props){
    return(
        <div class="card "> 
        <a href={props.img} target="_blank">
        <img src={props.img} class="card-img-top" alt="product"></img>
        </a>
         <div class="card-body">
                         <h5 class="card-title text-uppercase">addidas new hammer sole for sports person</h5>
                         <p class="card-text fw-bold">{props.price}<del className="text-muted ps-2 fw-light"> {props.discount}</del></p>
                         <div className="d-flex align-items-center gap-2"> 
                            <div className="purple">
                            <a href="#"   data-bs-toggle="tooltip" data-bs-placement="bottom" title="ADD TO BAG"><box-icon name='shopping-bag' color='#ffffff' size="19px" ></box-icon></a>
                            </div>
                            <div className="purple">
                            <a href="#"   data-bs-toggle="tooltip" data-bs-placement="bottom" title="WISHLIST"><box-icon name='heart' color='#ffffff' size="19px" ></box-icon></a>
                            </div>
                            <div className="purple">
                            <a href="#"   data-bs-toggle="tooltip" data-bs-placement="bottom" title="COMPARE"><box-icon name='sync' color='#ffffff' size="19px" ></box-icon></a>
                            </div>
                            <div className="purple">
                            <a href="#"   data-bs-toggle="tooltip" data-bs-placement="bottom" title="VIEWMORE"><box-icon name='show-alt' color='#ffffff' size="19px" ></box-icon></a>
                            </div>
                           
                           
                         </div>
         </div>
        </div>
    )
}

export default CardComponent
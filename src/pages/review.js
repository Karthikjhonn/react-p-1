import React from "react"


const review=(props)=>{
    
    return(
        <section>
             <div class=" d-flex align-items-center gap-3 ">
                    <div className="">
                        <img src={props.img}></img>
                    </div>
                    <div className="">
                        <div className="fw-bold pb-1">{props.name}</div>
                        <div className="d-flex " id="star">
                        <box-icon name='star' type='solid' color='#ffea20' size="18px" ></box-icon>
                        <box-icon name='star' type='solid' color='#ffea20' size="18px" ></box-icon>
                        <box-icon name='star' type='solid' color='#ffea20' size="18px" ></box-icon>
                        <box-icon name='star' type='solid' color='#ffea20' size="18px" ></box-icon>
                        <box-icon name='star' type='solid' color='#ffea20' size="18px" ></box-icon>
                        </div>
                    </div>                 
            </div>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </small>
        </section>
    )
}

export default review
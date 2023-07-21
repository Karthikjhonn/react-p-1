import React from "react";


function blogcomponent(props){
    return(
        <section>
            <div className="row mb-4">
                    <div className="col-md-3  text-end">
                        <p>Food,<span className="orange">Technology</span>,<br></br>politics,Lifestyle</p>
                        <p className="d-flex align-items-center justify-content-end gap-1  m-0 mb-1 mb-lg-3"><a className="text-decoration-none text-black">Mark Wiens </a><box-icon name='user' size="20px" ></box-icon></p>
                        <p className="d-flex align-items-center justify-content-end gap-1  m-0 mb-1 mb-lg-3"><a className="text-decoration-none text-black">12 JAN, 2023 </a><box-icon name='calendar' type="solid" size="20px" ></box-icon></p>
                        <p className="d-flex align-items-center justify-content-end gap-1  m-0 mb-1 mb-lg-3"><a className="text-decoration-none text-black">1.2M Views </a><box-icon name='show-alt' size="20px" ></box-icon></p>
                        <p className="d-flex align-items-center justify-content-end gap-1  m-0 mb-1 mb-lg-3"><a className="text-decoration-none text-black">08 Comments </a><box-icon name='message-rounded-dots'  size="20px" ></box-icon></p>
                    </div>
                    <div className="col-md-8">
                        <img src={props.img} className="w-100"></img>
                        <h2 className="text-danger">{props.title}</h2>
                        <p className="text-black-50">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                        <a href="#" className="btn rounded-0 border">VIEW MORE</a>
                    </div>
            </div>
        </section>
    )
}

export default blogcomponent
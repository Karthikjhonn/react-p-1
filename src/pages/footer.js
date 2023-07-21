import React from "react"
import "./style.css"

const Footer =()=>{
    return(
        <footer className="bg-dark">
            <div className="container">
            <div className="row text-white p-4 ">

                <div className="col-xl-3 col-md-6 col-12 pe-5    mb-5 ">
                    <p className="fw-bold text-start  border-bottom d-inline-block border-light border-1">ABOUT US</p>
                    <div className="text-start select">Nike is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.</div>
                </div>

                <div className="col-xl-3 col-md-6 col-12 pe-5  text-lg-center text-xl-start  mb-5 ">
                    <p className="fw-bold text-start select  ps-xl-0  border-bottom d-inline border-light border-1">Newsletter</p>
                    <span className="select d-block">Stay update with our latest</span>
                    <div className="d-flex gap-0 justify-content-lg-center justify-content-xl-start align-items-center pt-2 ">
                    <form className="d-flex">
                    <input placeholder="Email:" className="py-2 px-2 w-auto border-0 rounded-start " required ></input>
                    <button className="py-2 px-2 m-0 bg-orange border-0 rounded-end d-block"><box-icon name='send' animation='flashing' color='#ffffff'  size="19px"></box-icon></button>
                    </form>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 col-12 pe-5   mb-5  ">
                    <p className="fw-bold text-start select  border-bottom d-inline-block border-light border-1">Instragram Feed</p>
                    <div className="row ">
                    <div className="col-3 mb-4">
                    <img src="https://themewagon.github.io/karma/img/i1.jpg"></img>
                    </div>
                    <div className="col-3 mb-4">
                    <img src="https://themewagon.github.io/karma/img/i2.jpg"></img>
                    </div>
                    <div className="col-3 mb-4">
                    <img src="https://themewagon.github.io/karma/img/i3.jpg"></img>
                    </div>
                    <div className="col-3 mb-4">
                    <img src="https://themewagon.github.io/karma/img/i4.jpg"></img>
                    </div>
                    <div className="col-3 mb-4">
                    <img src="https://themewagon.github.io/karma/img/i5.jpg"></img>
                    </div>
                    <div className="col-3 mb-4">
                    <img src="https://themewagon.github.io/karma/img/i6.jpg"></img>
                    </div>
                    <div className="col-3 mb-4">
                    <img src="https://themewagon.github.io/karma/img/i7.jpg"></img>
                    </div>
                    <div className="col-3 mb-4">
                    <img src="https://themewagon.github.io/karma/img/i8.jpg"></img>
                    </div>
                    
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 col-12 pe-5  text-lg-center text-xl-start   mb-5 social">
                    <p className="fw-bold text-start select  ps-xl-0  border-bottom d-inline border-light border-1">Follow Us </p>
                    <div className="pb-1 select">Let us be social</div>
                    <a href="#" className="p-1" ><box-icon name='twitter' type='logo' color='#FFFFFF' ></box-icon></a>
                    <a href="#" className="p-1" ><box-icon name='facebook' type='logo' color='#FFFFFF' ></box-icon></a>
                    <a href="#" className="p-1" ><box-icon type='logo' name='instagram-alt' color="#FFFFFF"></box-icon></a>
                    <a href="#" className="p-1" ><box-icon name='apple' type='logo' color='#FFFFFF' ></box-icon></a>
                </div>

            </div>
            </div>
           <center className="container text-white pb-4">Copyright ©2023 All rights reserved. Design:<a href="#" className="text-danger ps-2">Karthiii</a> </center>
        </footer>
    )
}

export default Footer
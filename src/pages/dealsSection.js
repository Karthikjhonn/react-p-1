import React from "react";
import SmallCard from "./smallcard"

function deals(){
    return(
        <section className="container commenmargine ">
                <center>
                    <h1>Deals of the Week</h1>
                    <p> Nike shoes ever sold. As the name of the shoes suggests, the <br></br> pair is actually made of solid gold.</p>
                </center>
                <div className="row py-3 px-3 px-xl-5">
                    <div className="col-md-12 col-xl-9 ">
                    <div className="row px-lg-4">
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-5">
                    <SmallCard price="180.00" discount="210.00" img="https://themewagon.github.io/karma/img/r6.jpg"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-5">
                    <SmallCard price="180.00" new="New" discount="210.00" img="https://themewagon.github.io/karma/img/r3.jpg"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-5">
                    <SmallCard price="180.00" discount="210.00" img="https://themewagon.github.io/karma/img/r1.jpg"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-5">
                    <SmallCard price="180.00" trending="Trending" discount="210.00" img="https://themewagon.github.io/karma/img/r2.jpg"/>
                    </div>    
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-5">
                    <SmallCard price="180.00" discount="210.00" img="https://themewagon.github.io/karma/img/r4.jpg"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-5">
                    <SmallCard price="180.00" discount="210.00" img="https://themewagon.github.io/karma/img/r5.jpg"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-5">
                    <SmallCard price="180.00" new="New"  discount="210.00" img="https://themewagon.github.io/karma/img/r8.jpg"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-5">
                    <SmallCard price="180.00" discount="210.00" img="https://themewagon.github.io/karma/img/r7.jpg"/>
                    </div> 
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-5 mx-auto">
                    <SmallCard price="180.00" discount="210.00" trending="Trending" new="New" img="https://themewagon.github.io/karma/img/r9.jpg"/>
                    </div>    
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-12  d-none d-lg-block ">
                       <div className=" text-center">
                       <img src="https://themewagon.github.io/karma/img/category/c5.jpg" className="img-fluid"></img>
                       </div>
                    </div>
                </div>  
            </section>
    )
}

export default deals
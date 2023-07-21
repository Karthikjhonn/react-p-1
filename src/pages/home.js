import React from "react";
import Card from "./card"
import Deals from "./dealsSection"
class home extends React.Component{
    render(){
        
        return(
            <main>
            <section className="vh-100 Banner " >
                <div className="container">
            <div className="row " style={{paddingTop:"15rem"}}>
                <div className="col-md-6 ">
                    <h1 className="title">Nike New <br></br> Collection !</h1>
                    <p className="card-text my-4 text-muted">The most popular Nikes out currently are the Air Max, Air Jordan 1, Dunk, SB Dunk, Blazer, Air Force 1 and Air Jordan 4.<br></br>
                        The all-time classic Air Force 1 is the most consistently popular Nike of all time and debatably one of the best sneakers ever made for collectors.</p>
                <a href="/productDetails" className=" border-0 bg-orange px-2 py-2 rounded-circle" style={{width:"35px",height:"35px" }}><box-icon name='plus' color='#ffffff' size="18px"></box-icon></a> ADD TO BAG
                </div>
                <div className="col-md-6">
                <div id="carouselExample" class="carousel slide">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://themewagon.github.io/karma/img/banner/banner-img.png" alt="product image" className="img-fluid"></img>
                        </div>
                        <div class="carousel-item ">
                        <img src="https://themewagon.github.io/karma/img/banner/banner-img.png" alt="product image" className="img-fluid"></img>
                        </div>
                     </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
                </div>
                    
                </div>
            </div>
            </div>
            
            
            </section>
            <section className="container shadow commenmargine ">
                <div className="row py-4">
                <div className="col-sm-6 col-xl-3 text-center border-end p-2">
                    <img src="https://themewagon.github.io/karma/img/features/f-icon1.png" ></img>
                    <h3 className="fw-normal">Free Delivery</h3>
                    <p className="text-muted card-title">Free Shipping on all order</p>
                </div>
                <div className="col-sm-6 col-xl-3 text-center border-end p-2">
                    <img src="https://themewagon.github.io/karma/img/features/f-icon2.png" ></img>
                    <h3 className="fw-normal">Return Policy</h3>
                    <p className="text-muted card-title">Free Shipping on all order</p>
                </div>
                <div className="col-sm-6 col-xl-3 text-center border-end p-2">
                    <img src="https://themewagon.github.io/karma/img/features/f-icon3.png" ></img>
                    <h3 className="fw-normal">24/7 Support</h3>
                    <p className="text-muted card-title">Free Shipping on all order</p>
                </div>
                <div className="col-sm-6 col-xl-3 text-center  ">
                    <img src="https://themewagon.github.io/karma/img/features/f-icon4.png" ></img>
                    <h3 className="fw-normal">Secure Payment</h3>
                    <p className="text-muted card-title">Free Shipping on all order</p>
                </div>
                </div>
            </section>
            <section className="container  commenmargine ">
                <div className="row">
                    <div className="col-lg-8 col-md-12  py-2">
                    <div className="row  w-100 h-100 m-auto   ">
                    <div className="col-md-8 col-lg-8 my-3  position-relative overflow-hidden overlay-hover h-auto ">
                        <img src="https://themewagon.github.io/karma/img/category/c1.jpg" className="img-fluid  h-100  w-100  "></img>
                        <div className="overlay">
                            <p className="fw-bold ">Stocks Left</p>
                        </div>
                        </div> 
                    <div className="col-md-4 col-lg-4 my-3  position-relative overflow-hidden overlay-hover h-auto ">
                        <img src="https://themewagon.github.io/karma/img/category/c2.jpg" className="img-fluid  h-100 w-100 "></img>
                        <div className="overlay">
                            <p className="fw-bold ">Stocks Left</p>
                        </div>
                        </div> 
                    <div className="col-md-4 col-lg-4 my-3  position-relative overflow-hidden overlay-hover ">
                        <img src="https://themewagon.github.io/karma/img/category/c3.jpg" className=" img-fluid h-100 w-100 "></img>
                        <div className="overlay">
                            <p className="fw-bold ">Stocks Left</p>
                        </div>
                        </div> 
                    <div className="col-md-8 col-lg-8 my-3  position-relative overflow-hidden overlay-hover ">
                        <img src="https://themewagon.github.io/karma/img/category/c4.jpg" className="img-fluid  h-100 w-100 "></img>
                        <div className="overlay">
                            <p className="fw-bold ">Stocks Left</p>
                        </div>
                        </div> 
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 m-auto  py-2">
                    <div className="position-relative overflow-hidden overlay-hover">
                        <img src="https://themewagon.github.io/karma/img/category/c5.jpg" className="image-fluid w-100"></img>
                        <div className="overlay">
                            <p className="fw-bold ">Stocks Left</p>
                        </div>
                    </div> 
                    </div>
                </div>
            </section>
            <section className="container commenmargine">
            {/* carousel-start */}
            <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">

             <div class="carousel-inner">

            <div class="carousel-item active">
            <div class="container "> 
            <center>
                <h2 className="fw-bold ">Latest Collection</h2>
                <p className="px-5">Mens Downshifter 12 Running · Men's Revolution 6 Nn Running Shoe · Men's Victori One Shower Slide · Mens Offcourt Slide Flip Flops · Mens WMNS Md Runner 2 Running ...</p>
            </center>   
            </div>
                <div className="container">
                <div className="row">
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$150.00" discount="$210.00" img="https://themewagon.github.io/karma/img/product/p1.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$210.00" discount="$250.00" img="https://themewagon.github.io/karma/img/product/p2.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$50.00" discount="$110.00" img="https://themewagon.github.io/karma/img/product/p3.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$100.00" discount="$180.00" img="https://themewagon.github.io/karma/img/product/p8.jpg"/>  
                            </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item ">
            <div class="container "> 
            <center>
                <h2 className="fw-bold ">Latest Collection</h2>
                <p className="px-5">Mens Downshifter 12 Running · Men's Revolution 6 Nn Running Shoe · Men's Victori One Shower Slide · Mens Offcourt Slide Flip Flops · Mens WMNS Md Runner 2 Running ...</p>
            </center>   
            </div>
                <div className="container">
                    <div className="row">
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$210.00" discount="$250.00" img="https://themewagon.github.io/karma/img/product/p5.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$150.00" discount="$210.00" img="https://themewagon.github.io/karma/img/product/p6.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$100.00" discount="$180.00" img="https://themewagon.github.io/karma/img/product/p7.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$50.00" discount="$110.00" img="https://themewagon.github.io/karma/img/product/p4.jpg"/>  
                            </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item ">
            <div class=" container">
            <center>
                <h2 className="fw-bold ">Comming Product</h2>
                <p className="px-5">What was Nike original brand?
        Blue Ribbon Sports
        Nike, originally known as Blue Ribbon Sports <b>(BRS)</b>, was founded by University of Oregon track athlete Phil Knight and his coach, Bill Bowerman, on January 25, 2024...</p>
                </center>  
            </div>
                    <div className="container">
                    <div className="row">
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$150.00" discount="$210.00" img="https://themewagon.github.io/karma/img/product/p1.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$210.00" discount="$250.00" img="https://themewagon.github.io/karma/img/product/p2.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$50.00" discount="$110.00" img="https://themewagon.github.io/karma/img/product/p3.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$100.00" discount="$180.00" img="https://themewagon.github.io/karma/img/product/p8.jpg"/>  
                            </div>
                    </div>
                    </div>
            </div>

            <div class="carousel-item ">
            <div class=" container">
            <center>
                <h2 className="fw-bold ">Comming Product</h2>
                <p className="px-5">What was Nike original brand?
                Blue Ribbon Sports
                Nike, originally known as Blue Ribbon Sports <b>(BRS)</b>, was founded by University of Oregon track athlete Phil Knight and his coach, Bill Bowerman, on January 25, 2024...</p>
                </center>  
            </div>
                    <div className="container">
                    <div className="row">
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$210.00" discount="$250.00" img="https://themewagon.github.io/karma/img/product/p5.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$150.00" discount="$210.00" img="https://themewagon.github.io/karma/img/product/p6.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$100.00" discount="$180.00" img="https://themewagon.github.io/karma/img/product/p7.jpg"/>  
                            </div>
                            <div className="col-md-6 col-lg-3 mb-4">
                            <Card price="$50.00" discount="$110.00" img="https://themewagon.github.io/karma/img/product/p4.jpg"/>  
                            </div>
                    </div>
                    </div>
            </div>
   
             </div>

             <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
             </button>


            </div>
             {/* carousel-end */}
            </section>
            <section className="container commenmargine">
                <div className=" row h-50">
                <div className="col-12 rounded" id="banner-img">
                    <center className="text-white pt-xl-5 pt-3">
                        <h1>Exclusive <span className="orange px-2 rounded-3">Hot Deal</span>  Ends Soon!</h1>
                        <p className="display-5 ">Who are in extremely love with eco friendly system.</p>
                        <a href="#" className="btn bg-orange rounded-pill fw-bold">Shop Now</a>
                    </center>
                </div>
                </div>
            </section>
            <section className="container px-5 ">
                <div className=" d-flex justify-content-center align-items-center gap-5 flex-wrap">
                <div className="mx-auto" >
                    <a href="#"><img src="https://themewagon.github.io/karma/img/brand/1.png"></img></a>
                </div>
                <div className="mx-auto" >
                    <a href="#"><img src="https://themewagon.github.io/karma/img/brand/2.png"></img></a>
                </div>
                <div className="mx-auto" >
                    <a href="#"><img src="https://themewagon.github.io/karma/img/brand/3.png"></img></a>
                </div>
                <div className="mx-auto" >
                    <a href="#"><img src="https://themewagon.github.io/karma/img/brand/4.png"></img></a>
                </div>
                <div className="mx-auto" >
                    <a href="#"><img src="https://themewagon.github.io/karma/img/brand/5.png"></img></a>
                </div>
                </div>
            </section>
            <Deals/>
            {/* <hr className="" style={{margin:"5rem"}}></hr> */}
            </main>
        )   
    }
}
export default home
import React from "react"
import MultipageBanner from "./multipagebanner";
import Review from "./review";
import Deals from "./dealsSection";
import "./style.css"

function productDetails(){
    return(
        <main>
        <MultipageBanner title="Product Details" link="Product-details "/>
        <section >
            <div className="container my-5">
                <div className="row">
                 <div className="col-lg-6 mb-4">
                <div id="product-details-img" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#product-details-img" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#product-details-img" data-bs-slide-to="1" aria-label="Slide 2"></button>
                 </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://themewagon.github.io/karma/img/category/s-p1.jpg" class="d-block w-100" alt="product image"></img>
                    </div>
                    <div class="carousel-item">
                    <img src="https://themewagon.github.io/karma/img/category/s-p1.jpg" class="d-block w-100" alt="product image"></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#product-details-img" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#product-details-img" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                 </div>
                 <div className="col-lg-6 px-5 ">
                    <div className=" fw-normal fs-3 text-dark">Faded SkyBlue Denim Jeans</div>
                    <span className="fw-bold yellow fs-2">$149.99</span>
                    <ul className="list-unstyled border-bottom pb-3 d-flex gap-2">
                        <div>
                        <li><a href="#" className="text-decoration-none text-dark">Category</a></li>
                        <li><a href="#" className="text-decoration-none text-dark">Availibility</a></li>
                        </div>
                        <div>
                        <li><a href="#" className="text-decoration-none orange">:Household</a></li>
                        <li><a href="#" className="text-decoration-none text-dark">:in stock</a></li>
                        </div>
                    </ul>
                     <p >Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.</p>
                    <div class="mb-3 d-flex align-items-center gap-3 py-5">
                    <label for="quantity" class="form-label text-muted ">Quantity:</label>
                    <input type="number" min={0} max={15}  class="p-1 px-2 border w-auto fw-normal" defaultValue={0} id="quantity" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="d-flex gap-2 align-items-center ">
                    <a href="#" className="btn bg-orange text-white px-5 border-none">ADD TO CART</a>
                    <a href="#"  className="purple"><box-icon name='plus' color='#ffffff'  size="20px"></box-icon></a>
                    <a href="#"  className="purple"><box-icon name='heart' color='#ffffff' size="20px" ></box-icon></a>
                    </div>
                    <div className="row">
                        <strong className="py-4 text-black-50">Review</strong>
                    <div className="col-xl-6 pb-4 ">
                    <Review img="https://themewagon.github.io/karma/img/product/review-1.png" name="Tim David" />
                    </div>
                    <div className="col-xl-6 pb-4">
                    <Review img="https://themewagon.github.io/karma/img/product/review-2.png" name="Jhon" />
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container  border bg-light px-2 py-4 rounded-2 ">
                <h3 className="">Description:</h3>
                <ul>
                <li>
                    <small className="">Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and</small>
                </li>
                <li>
                    <small className="d-block pt-4 ">It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less</small>
                </li>
                <li>
                    <small className="d-block pt-4 "> All reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less</small>
                </li>
                </ul>
            </div>
            <Deals/>
        </section>
        </main>
    )
}
export default productDetails
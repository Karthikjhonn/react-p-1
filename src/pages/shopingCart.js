import React from "react"
import MultipageBanner from "./multipagebanner";
import "./style.css"

function shopingCart(){
    return(
        <main>
             <MultipageBanner title=" Shopping Cart " link="Cart "/>
             <section className="container my-5" >
                <div className="container">
                    <div className="row border-bottom pb-2 mb-2">
                        <div className="col-3 fw-bold text-muted">Product</div>
                        <div className="col-3 fw-bold text-muted text-end">Price</div>
                        <div className="col-3 fw-bold text-muted text-end">Quantity</div>
                        <div className="col-3 fw-bold text-muted text-end">Total</div>
                    </div>

                    <div className="row border-bottom pb-2 mb-2 align-items-center">
                        <div className="col-3  text-muted"><img src="	https://themewagon.github.io/karma/img/cart.jpg"></img><small className="d-block">Minimalistic shop for multipurpose use</small></div>
                        <div className="col-3  text-muted text-end">$360.00</div>
                        <div className="col-3  text-muted text-end"><input type="number" value={2} className="ps-1 border" style={{width:"45px"}}></input></div>
                        <div className="col-3  text-muted text-end">$7120.00</div>
                    </div>

                    <div className="row border-bottom pb-2 mb-2 align-items-center">
                        <div className="col-3  text-muted"><img src="	https://themewagon.github.io/karma/img/cart.jpg"></img><small className="d-block">Minimalistic shop for multipurpose use</small></div>
                        <div className="col-3  text-muted text-end">$360.00</div>
                        <div className="col-3  text-muted text-end"><input type="number" value={2} className="ps-1 border" style={{width:"45px"}}></input></div>
                        <div className="col-3  text-muted text-end">$7120.00</div>
                    </div>

                    <div className="row border-bottom pb-2 mb-2 align-items-center">
                        <div className="col-3  text-muted"><img src="	https://themewagon.github.io/karma/img/cart.jpg"></img><small className="d-block">Minimalistic shop for multipurpose use</small></div>
                        <div className="col-3  text-muted text-end">$360.00</div>
                        <div className="col-3  text-muted text-end"><input type="number" value={2} className="ps-1 border" style={{width:"45px"}}></input></div>
                        <div className="col-3  text-muted text-end">$7120.00</div>
                    </div>   

                    <div className="row border-bottom pb-2 mb-2 align-items-center">
                       <div className="col-md-6 mb-4 mb-lg-0 text-center">
                        <a href="#" className="text-decoration-none bg-info btn rounded-0">UPDATE CART</a>
                       </div>
                       <div className="col-md-6 ">
                        <div className="d-flex justify-content-center">
                        <input type=" text" placeholder="Coupon Code" class="border px-2 py-2" ></input>
                        <div className=" bg-orange fw-bold rounded-0 border-0 py-2 px-5">Apply</div>
                        </div>
                       </div>
                    </div>   

                </div>
             </section>
        </main>
    )
}

export default shopingCart
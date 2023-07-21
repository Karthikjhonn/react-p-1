import React from "react"
import MultipageBanner from "./multipagebanner";
import "./style.css"

function checkout(){
    return(
       <main>
         <MultipageBanner title=" Checkout" link="Checkout "/>
         <section className="container my-5" >
            <div className="container my-5">
            <p className="bg-info p-3">Returning Customer?<a href="#" className="text-danger ms-2">Click here to login</a></p>
            <div className="text-black-50 ps-3">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</div>
            <form className="row my-2">
            <div class="my-2 col-xl-4 col-md-6  ">
             <input type="text" class="w-100 p-1 py-2 border rounded-2" required placeholder="Username or Email *"></input>
            </div>
            <div class="my-2 col-xl-4 col-md-6  ">
             <input type="password" class="w-100 p-1  py-2 border rounded-2"  placeholder="Password *"></input>
            </div>
            <div className=" container d-flex align-items-center ps-5 my-2 ">
                <div className="btn bg-orange px-5">Login</div>
                <div class="form-check  ">
                 <input class="form-check-input mx-auto" type="checkbox" value="" id="Remember"></input>
                 <label class="form-check-label text-black-50 ps-1" for="Remember">Remember me</label>
                </div>
            </div>
            <a href="#" className="text-black-50 text-decoration-none ms-2 ">Lost your password?</a>
            </form>


            </div>
            <div className="container my-5">
            <p className="bg-info p-3">Have a coupon?<a href="#" className="text-danger ms-2">Click here to enter your code</a></p>
            <div className="container">
            <input type="text" class="w-100 p-1 py-2 border rounded-2"  placeholder="Enter coupon code"></input>
            <div className="btn bg-y rounded-0 text-white fw-normal border-0 mt-3">APPLY COUPON</div>
            </div>
            </div>
            <div className="container my-5">
                <div className="row">

                    <div className="col-xl-8 mb-4">
                    <p className="border-bottom pb-1"><strong >Billing Details</strong></p>
                    <form className="container">
                        {/* doubel--row */}
                        <div className="row">
                            <div class="my-2  col-lg-6  ">
                             <input type="text" class="w-100 ps-2 py-2 border rounded-2" required placeholder="First name*"></input>
                            </div> 
                            <div class="my-2  col-lg-6  ">
                             <input type="text" class="w-100 ps-2 py-2 border rounded-2" required placeholder="Last name*"></input>
                            </div> 
                        </div>
                        {/* singel--row */}
                        <div className="row">
                             <div class="my-2  col-12  ">
                                <input type="text" class="w-100 p-2 py-2 border rounded-2" required placeholder="Company name*"></input>
                            </div> 
                        </div>
                         {/* doubel--row */}
                         <div className="row">
                            <div class="my-2  col-lg-6  ">
                             <input type="Number" max={10} class="w-100 ps-2 py-2 border rounded-2" required placeholder="Phone Number *"></input>
                            </div> 
                            <div class="my-2  col-lg-6  ">
                             <input type="email" class="w-100 ps-2 py-2 border rounded-2" required placeholder="Email *"></input>
                            </div> 
                        </div>
                        {/* singel--row  selection*/}
                        <div className="row">
                             <div class="my-2  col-12  ">
                                <select type="select" class="w-100 p-2 py-2 border rounded-2 text-black-50"  placeholder="Country *">
                                    <option>Country *</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div> 
                        </div>
                        {/* singel--row */}
                        <div className="row">
                             <div class="my-2  col-12  ">
                                <input type="text" class="w-100 p-2 py-2 border rounded-2" required placeholder="Address line 01 *"></input>
                            </div> 
                        </div>
                         {/* singel--row */}
                         <div className="row">
                             <div class="my-2  col-12  ">
                                <input type="text" class="w-100 p-2 py-2 border rounded-2" required placeholder="Address line 02 *"></input>
                            </div> 
                        </div>
                         {/* singel--row */}
                         <div className="row">
                             <div class="my-2  col-12  ">
                                <input type="text" class="w-100 p-2 py-2 border rounded-2" required placeholder="Town/City *"></input>
                            </div> 
                        </div>
                         {/* singel--row  selection*/}
                         <div className="row">
                             <div class="my-2  col-12  ">
                                <select type="select" class="w-100 p-2 py-2 border rounded-2 text-black-50"  placeholder="Distric *">
                                    <option>Distric *</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div> 
                        </div>
                        {/* singel--row */}
                        <div className="row">
                             <div class="my-2  col-12  ">
                                <input type="text" class="w-100 p-2 py-2 border rounded-2" required placeholder="Postcode/Zip *"></input>
                            </div> 
                        </div>
                        {/* singel--row check-box*/}
                        <div className="row">
                             <div class="my-2  col-12 form-check ">
                                <input class="form-check-input ms-auto" type="checkbox" value="" id="create-account"></input>
                                <label class="form-check-label ps-1" for="create-account">Create an account?</label>
                            </div> 
                        </div>
                    </form>
                    <p className="border-bottom pb-1 my-2"><strong >Shipping Details</strong></p>
                    {/* singel--row check-box*/}
                        <div className="row">
                             <div class="my-2  col-12 form-check ">
                                <input class="form-check-input ms-auto" type="checkbox" value="" id="ship-address"></input>
                                <label class="form-check-label ps-1" for="ship-address">Ship to a different address?</label>
                            </div> 
                        </div>
                        {/* singel--row textarea-box*/}
                        <div>
                            <textarea class="w-100 px-2 py-2 h-50 border rounded-2" placeholder="Order Notes" ></textarea>
                        </div>
                    </div>

                    <div className="col-xl-4 bg-info">
                        <div className=" container pt-5">
                        <p className=" border-bottom pb-1 text-dark">Your Order</p>
                        <table class="table">                         
                             <tbody>
                             <tr className="border-bottom">
                                 <td><a href="#" className="text-decoration-none text-dark">Product</a></td>
                                 <td><a href="#" className="text-decoration-none text-dark"></a></td>
                                 <td className=" text-end"><a href="#" className="text-decoration-none text-dark">Total</a></td>
                             </tr>
                             <tr className="border-bottom">
                                 <td><a href="#" className="text-decoration-none text-dark">Fresh Blackberry</a></td>
                                 <td><a href="#" className="text-decoration-none text-dark">X 02</a></td>
                                 <td className=" text-end"><a href="#" className="text-decoration-none text-dark">$720.00</a></td>
                             </tr>
                             <tr className="border-bottom">
                                 <td><a href="#" className="text-decoration-none text-dark">Fresh Blackberry</a></td>
                                 <td><a href="#" className="text-decoration-none text-dark">X 02</a></td>
                                 <td className=" text-end"><a href="#" className="text-decoration-none text-dark">$720.00</a></td>
                             </tr>
                             <tr className="border-bottom">
                                 <td><a href="#" className="text-decoration-none text-dark">Fresh Blackberry</a></td>
                                 <td><a href="#" className="text-decoration-none text-dark">X 02</a></td>
                                 <td className=" text-end"><a href="#" className="text-decoration-none text-dark">$720.00</a></td>
                             </tr>
                             <tr className="border-bottom">
                                 <td><a href="#" className="text-decoration-none text-dark fw-bold">SUBTOTAL</a></td>
                                 <td><a href="#" className="text-decoration-none text-dark"></a></td>
                                 <td className=" text-end"><a href="#" className="text-decoration-none text-dark">$2160.00</a></td>
                             </tr>
                             <tr className="border-bottom">
                                 <td><a href="#" className="text-decoration-none text-dark fw-bold">SHIPPING</a></td>
                                 <td><a href="#" className="text-decoration-none text-dark"></a></td>
                                 <td className=" text-end"><a href="#" className="text-decoration-none text-dark">Flat Rate $50.00</a></td>
                             </tr>
                             <tr className="border-bottom">
                                 <td><a href="#" className="text-decoration-none text-dark fw-bold">TOTAL</a></td>
                                 <td><a href="#" className="text-decoration-none text-dark"></a></td>
                                 <td className=" text-end"><a href="#" className="text-decoration-none text-dark">$2210.00</a></td>
                             </tr>
                               
                             </tbody>
                         </table>
                         <div class="form-check">
                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="CHECK-PAYMENTS"></input>
                             <label class="form-check-label" for="CHECK-PAYMENTS">CHECK PAYMENTS</label>
                         </div>
                         <p className="bg-white text-muted  p-4">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                         <div class="form-check">
                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="paypal"></input>
                             <label class="form-check-label" for="paypal">PAYPAL</label>
                         </div>
                         <p className="bg-white text-muted  p-4">Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                            {/* singel--row check-box*/}
                        <div className="row">
                             <div class="my-2  col-12 form-check ">
                                <input class="form-check-input ms-auto" type="checkbox" value="" id="terms"></input>
                                <label class="form-check-label ps-1" for="terms">I’ve read and accept the <a href="#" className="text-danger">terms & conditions*</a></label>
                            </div> 
                        </div>
                        <div className="bg-orange btn mb-2 w-100 fw-bold rounded-0 border-0 text-uppercase">Proceed to paypal</div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            </section>
       </main>
    )
}

export default checkout
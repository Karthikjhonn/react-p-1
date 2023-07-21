import React from "react"
import MultipageBanner from "./multipagebanner";
import "./style.css"

function conformation(){
    return(
        <main>
            <MultipageBanner title=" Confirmation " link="Confirmation "/>
            <section className="container my-5 ">
                <center className="text-success fw-bold ">Thank you. Your order has been received.</center>
                <div className="row my-5">
                    <div className="col-lg-4">
                        <h5 className="text-dark border-bottom pb-2 ps-3">Order Info</h5>
                        <ul className="list-unstyled   px-4 align-items-center">
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Order number</li>
                            <li className="text-dark w-50">: 60235</li>
                            </div>
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Date</li>
                            <li className="text-dark w-50">: 22/01/2024</li>
                            </div>
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Total</li>
                            <li className="text-dark w-50">: $2102.00</li>
                            </div>
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Payment method</li>
                            <li className="text-dark w-50">: Check payments</li>
                            </div>
                            
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <h5 className="text-dark border-bottom pb-2 ps-3">Billing Address</h5>
                        <ul className="list-unstyled   px-4 align-items-center">
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Street</li>
                            <li className="text-dark w-50">: 56/8</li>
                            </div>
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">City</li>
                            <li className="text-dark w-50">: Chennai</li>
                            </div>
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Country</li>
                            <li className="text-dark w-50">: India</li>
                            </div>
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Postcode</li>
                            <li className="text-dark w-50">: 600010</li>
                            </div>
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <h5 className="text-dark border-bottom pb-2 ps-3">Shipping Address</h5>
                        <ul className="list-unstyled   px-4 align-items-center">
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Street</li>
                            <li className="text-dark w-50">: 56/8</li>
                            </div>
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">City</li>
                            <li className="text-dark w-50">: Chennai</li>
                            </div>
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Country</li>
                            <li className="text-dark w-50">: India</li>
                            </div>
                            <div className="d-flex justify-content-between ">
                            <li className="text-muted w-50">Postcode</li>
                            <li className="text-dark w-50">: 600010</li>
                            </div>
                        </ul>
                    </div>

                </div>
                <div className="row px-lg-5 px-1">
                    <div className="col bg-info px-lg-5">
                        <div className=" container pt-5 px-lg-5">
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
                                 <td><a href="#" className="text-decoration-none text-dark fw-bold">X 02</a></td>
                                 <td className=" text-end"><a href="#" className="text-decoration-none text-dark">$720.00</a></td>
                             </tr>
                             <tr className="border-bottom">
                                 <td><a href="#" className="text-decoration-none text-dark">Fresh Blackberry</a></td>
                                 <td><a href="#" className="text-decoration-none text-dark fw-bold">X 02</a></td>
                                 <td className=" text-end"><a href="#" className="text-decoration-none text-dark">$720.00</a></td>
                             </tr>
                             <tr className="border-bottom">
                                 <td><a href="#" className="text-decoration-none text-dark">Fresh Blackberry</a></td>
                                 <td><a href="#" className="text-decoration-none text-dark fw-bold">X 02</a></td>
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
                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}

export default conformation
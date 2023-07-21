import React from "react";
import MultipageBanner from "./multipagebanner";
function traking(){
    return(
        <main>
             <MultipageBanner title="Order Tracking" link="Fashon Category"/>
             <section className="container my-5 px-5" >
                <div className="row pb-5 ps-xl-5">
               <p className="text-dark">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <form className="w-75">
                <div className="form-group ">
                <input type="text" placeholder="Order ID" className=" rounded-0 form-control px-2 py-2  mb-3"></input>
                </div>
                <div className="form-group ">
                <input type="email" placeholder="Billing Email Address" required className=" rounded-0 form-control px-2 py-2 mb-3 "></input>
                </div>
                <div className="btn bg-orange rounded-0 border-0 px-5 py-2" type="submit">TRACK ORDER</div>
                
                </form>
                </div>
             </section>
        </main>
    )
}
export default traking
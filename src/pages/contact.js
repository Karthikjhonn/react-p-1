import React from "react";
import MultipageBanner from "./multipagebanner";

function about(){
    return(
        <main>
        <MultipageBanner title=" Contact Us" link="Contact "/>
        <section className="container my-5  " style={{height:"350px"}} >
            <div className="row h-100">
                <div className="col-xl-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64592.35482680292!2d80.1715233702557!3d13.059745198488645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1675356430222!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-100 h-100"></iframe>
                </div>
                <div className="col-xl-4 d-flex justify-content-center align-items-center d-none d-xl-flex">
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jSLT27hB8W73haLiHZ048R60giK2FFCi4w&usqp=CAU" ></img></div>
                </div>
            </div>
        </section>
        <section className="container my-5 ">
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex gap-1 align-items-center mb-2">
                        <div>
                        <box-icon name='home' color='#ffb500'size="md" ></box-icon>
                        </div>
                        <div>
                            <p className="fw-bold m-0">Chennai,TamilNadu</p>
                            <span className="text-black-50">Chennai 600001</span>
                        </div>
                    </div>
                    <div className="d-flex gap-1 align-items-center mb-2">
                        <div>
                        <box-icon name='phone' color='#ffb500'size="md" ></box-icon>
                        </div>
                        <div>
                            <p className="fw-bold m-0">00 (91+)985632584</p>
                            <span className="text-black-50">Mon to Fri 9am to 6pm</span>
                        </div>
                    </div>
                    <div className="d-flex gap-1 align-items-center mb-2">
                        <div>
                        <box-icon name='envelope' color='#ffb500'size="md" ></box-icon>
                        </div>
                        <div>
                            <p className="fw-bold m-0">Karma@gmail.com</p>
                            <span className="text-black-50">Send Us Your Query Anytime!</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <form>
                        <div className="row">
                            <div className="col-lg-6 mb-2 mb-xl-0 ">
                                <input type="text" placeholder="Enter your name:" className="border px-2 py-2 w-100 rounded-1 mb-3"></input>
                                <input type="email" placeholder="Enter email address:" className="border px-2 py-2 w-100 rounded-1 mb-3"></input>
                                <input type="text" placeholder="Enter subject:" className="border px-2 py-2 w-100 rounded-1 "></input>
                            </div>
                            <div className="col-lg-6">
                                <textarea placeholder="Enter message" className="border px-2 py-2 w-100 h-75"></textarea>
                                <div className="btn bg-y text-white rounded-0 fw-bold w-100">Send message</div>
                            </div>
                        </div>  
                    </form>
                </div>
            </div>
        </section>
        </main>
    )
}
export default about
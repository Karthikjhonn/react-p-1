import React from "react";
import MultipageBanner from "./multipagebanner";
function page(){
    return(
        <main>
            <MultipageBanner title=" Login/Register " link="Login/Register"/>
             <section className="container my-5 px-5" >
                <div className="row shadow-sm p-0">
                    <div className="col-lg-6  login">
                        <img src="	https://themewagon.github.io/karma/img/login.jpg" className="w-100 h-100"></img>
                        <div className=" text-center text-white  overlay">
                            <div>
                            <h2>New to our website?</h2>
                            <h6 className="px-5 pb-2">There are advances being made in science and technology everyday, and a good example of this is the</h6>
                            <div className="btn px-5 py-2 bg-orange rounded-0 border-0" type="button">CREAT AN ACCOUNT</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5">
                        <form className="text-center p-lg-5">
                            <center><h4 className="text-dark mb-4">LOG IN TO ENTER</h4></center>
                            <div className="form-group ">
                                <input type="text" placeholder="Username" className="border-0 border-bottom rounded-0 form-control px-4 py-2 "></input>
                            </div>
                            <div className="form-group ">
                                <input type="password" placeholder="Password" className="border-0 border-bottom rounded-0 form-control px-4 py-2 "></input>
                            </div>
                            <div class="form-check my-3 text-start ms-3">
                                <input class="form-check-input" type="checkbox" value="" id="login-form"></input>
                                <label class="form-check-label " for="login-form">Keep me logged in</label>
                            </div>
                            <div className="btn px-5 py-2 my-3 bg-orange rounded-0 border-0" type="submit">CREAT AN ACCOUNT</div>
                            <a href="#" className="d-block text-decoration-none text-black-50">Forgot Password?</a>
                        </form>
                    </div>
                </div>
             </section>
        </main>
    )
}
export default page
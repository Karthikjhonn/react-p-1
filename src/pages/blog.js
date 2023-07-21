import React from "react";
import MultipageBanner from "./multipagebanner";
import BlogComponent from "./blogComponent";
function bloge(){
    return(
        <main>
            <MultipageBanner title=" Blog Page " link="Blog"/>
             <section className="container my-5 " >
                <div className= "row ">
                    <div className="col-lg-4 mb-4 mb-xl-0 text-center px-lg-2 blog-hover position-relative ">
                        <img src="https://themewagon.github.io/karma/img/blog/cat-post/cat-post-3.jpg" className="img-fluid"></img>
                        <div className="overlay">
                            <div className="text-white">
                                <h5 className="border-bottom text-white pb-2">SOCIAL LIFE</h5>
                                Enjoy your social life together
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4 mb-xl-0 text-center px-lg-2 blog-hover position-relative ">
                        <img src="https://themewagon.github.io/karma/img/blog/cat-post/cat-post-1.jpg" className="img-fluid"></img>
                        <div className="overlay">
                            <div className="text-white">
                                <h5 className="border-bottom text-white pb-2">FOOD</h5>
                                Let the food be finished
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4 mb-xl-0 text-center px-lg-2 blog-hover position-relative ">
                        <img src="https://themewagon.github.io/karma/img/blog/cat-post/cat-post-2.jpg" className="img-fluid"></img>
                        <div className="overlay">
                            <div className="text-white">
                                <h5 className="border-bottom text-white pb-2">POLITICS </h5>
                                Be a part of politics
                            </div>
                        </div>
                    </div>
                   
                </div>
             </section>
             <section className="container my-5">
                <div className="row">

                    <div className="col-lg-8 px-5">
                    <BlogComponent img="https://themewagon.github.io/karma/img/blog/main-blog/m-blog-1.jpg" title="Astronomy Binoculars A Great Alternative" />
                    <BlogComponent img="https://themewagon.github.io/karma/img/blog/main-blog/m-blog-2.jpg" title="The Basics Of Buying A Telescope" />
                    <BlogComponent img="https://themewagon.github.io/karma/img/blog/main-blog/m-blog-3.jpg" title="The Glossary Of Telescopes" />
                    <BlogComponent img="https://themewagon.github.io/karma/img/blog/main-blog/m-blog-4.jpg" title="The Night Sky" />
                    <BlogComponent img="https://themewagon.github.io/karma/img/blog/main-blog/m-blog-5.jpg" title="Telescopes 101" />
                    
                        <ul class="pagination justify-content-center mt-5">
                          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                        
                    </div>

                    <div className="col-lg-4 bg-light py-4 px-5">
                       <div className="d-flex">
                       <input type="text" class="px-2 py-2 w-100 border border-white rounded-pill bg-y text-white  d-block" placeholder="Search Post" ></input>
                        <p className="btn p-0"><box-icon name='search'  color='#FFFFFF' class="position-relative d-block" style={{top:"10px",right:"50px"}} ></box-icon></p>
                       </div>
                       <div className="text-center pt-5 my-5 border-top border-bottom ">
                        <img src="	https://themewagon.github.io/karma/img/blog/author.png"></img>
                        <p className="card-title m-0">Charlie Barber</p>
                        <small className="text-black-50">Senior blog writer</small>
                        <p className="text-black-50">Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                       </div>
                        {/* popularpost img */}
                       <p className="bg-y fw-bold text-white btn w-100 rounded-0">Popular Posts</p>
                        <section>
                       <div className="d-flex gap-2 align-items-center mb-3">
                         <img src="https://themewagon.github.io/karma/img/blog/popular-post/post1.jpg"></img>
                         <div>
                         <p className="text-black m-0">Space The Final Frontier</p>
                        <small className="text-black-50">2 hours ago</small>
                         </div>
                       
                       </div>

                       <div className="d-flex gap-2 align-items-center mb-3">
                         <img src="https://themewagon.github.io/karma/img/blog/popular-post/post2.jpg"></img>
                         <div>
                         <p className="text-black m-0">The Amazing Hubble</p>
                        <small className="text-black-50">2 hours ago</small>
                         </div>
                       </div>

                       <div className="d-flex gap-2 align-items-center mb-3">
                         <img src="https://themewagon.github.io/karma/img/blog/popular-post/post3.jpg"></img>
                         <div>
                         <p className="text-black m-0">Astronomy Or Astrology</p>
                        <small className="text-black-50">03 hours ago</small>
                         </div>
                       </div>

                       <div className="d-flex gap-2 align-items-center">
                         <img src="https://themewagon.github.io/karma/img/blog/popular-post/post4.jpg"></img>
                         <div>
                         <p className="text-black m-0">Asteroids telescope</p>
                        <small className="text-black-50">01 hours ago</small>
                         </div>
                       </div>
                       </section>
                        <hr className="my-5"></hr>
                            {/* AD*/}
                        <div className="w-100  bg-white d-flex justify-content-center align-items-center shadow-sm mb-5 " style={{height:"250px"}}>
                            <a href="#" className="text-decoration-none fw-bold h2 text-muted">300X250 PX<br></br>AD GOES HERE</a>
                        </div>
                        <p className="bg-y fw-bold text-white btn w-100 rounded-0">Post Catgories</p>
                          <ul className="w-100  p-0">
                            <li className="d-flex justify-content-between border-h text-y  border-dot pb-1 mb-4">
                              <div >Technology</div>
                              <div >37</div>
                            </li>
                            <li className="d-flex justify-content-between border-h text-y  border-dot pb-1 mb-4">
                              <div >Lifestyle</div>
                              <div >24</div>
                            </li>
                            <li className="d-flex justify-content-between border-h text-y  border-dot pb-1 mb-4">
                              <div >Fashion</div>
                              <div >44</div>
                            </li>
                            <li className="d-flex justify-content-between border-h text-y  border-dot pb-1 mb-4">
                              <div >Art</div>
                              <div >59</div>
                            </li>
                            <li className="d-flex justify-content-between border-h text-y  border-dot pb-1 mb-4">
                              <div >FOOD</div>
                              <div >15</div>
                            </li>
                            <li className="d-flex justify-content-between border-h text-y  border-dot pb-1 mb-4">
                              <div >Architecture</div>
                              <div >09</div>
                            </li>
                            <li className="d-flex justify-content-between border-h text-y  border-dot pb-1 mb-4">
                              <div >ADVENTURE</div>
                              <div >44</div>
                            </li>
                          </ul>
                        <hr></hr>
                        <p className="bg-y fw-bold text-white btn w-100 rounded-0">Newsletter</p>
                        <p className="text-black-50 text-center py-3">Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>
                        <form className="d-flex justify-content-center">
                            <input placeholder="Email:" className="py-2 px-2 w-auto border rounded-start " required ></input>
                            <button className="py-2 px-2 m-0 bg-y text-white fs-10 fw-bold border-0 rounded-end d-block">Subscribe</button>
                        </form>
                            <small className="fs-10 text-center d-block my-2 text-muted">You can unsubscribe at any time</small>
                            <hr></hr>
                        <p className="bg-y fw-bold text-white btn w-100 rounded-0">Tag Clouds</p>
                        <div className="d-flex flex-wrap gap-3 px-3"> 
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Technology</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Fashion</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Food</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Architecture</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Lifestyle</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Art</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Technology</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Random</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">ADVENTURE</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Fashion</smal>
                            <smal class="border-warning border-1 border bg-white px-2 py-1 tag fs-13">Food</smal>
                        </div>
                    </div>

                </div>
             </section>
        </main>
    )
}
export default bloge
import React from "react";
import MultipageBanner from "./multipagebanner";
import Accordion from "./accordion";
import Card from "./card";
import Deals from "./dealsSection"


function shop(){
    return(
        <main>
          <MultipageBanner title="Shop Category" link="Shop"/>
          <section className="commenmargine">
            <div className="container">

                <div className="row">
                    <div className="col-md-4">
                    <div className="btn h-100 bg-p rounded-0 text-white p-lg-3 fw-bold w-100">Browser Category</div>
                    </div>
                    <div className="col-md-8">
                    <div className="btn h-100  bg-p rounded-0 text-white p-lg-3 fw-bold w-100">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="d-flex gap-2 justify-content-center justify-content-md-start mb-3 mb-md-0">
                    
                    <div class="dropdown p-0  ">
                <div class="btn btn-white p-0 rounded-0 dropdown-toggle " type="button" id="defaultsorting" data-bs-toggle="dropdown" aria-expanded="false">Default sorting</div>
                <ul class="dropdown-menu " aria-labelledby="defaultsorting">
                  <li><a class="dropdown-item" href="#">Default sorting</a></li>
                  <li><a class="dropdown-item" href="#">Default sorting</a></li>
                  <li><a class="dropdown-item" href="#">Default sorting</a></li>
                </ul>
                     </div>

                     <div class="dropdown p-0 ">
                <div class="btn btn-white p-0 rounded-0 dropdown-toggle" type="button" id="show" data-bs-toggle="dropdown" aria-expanded="false">Show 12</div>
                <ul class="dropdown-menu" aria-labelledby="show">
                  <li><a class="dropdown-item" href="#">Show 12</a></li>
                  <li><a class="dropdown-item" href="#">Show 12</a></li>
                  <li><a class="dropdown-item" href="#">Show 12</a></li>
                </ul>
                     </div>

                        </div>
                        </div>
                        <div className="col-md-6 ">
                        <div className="d-flex justify-content-center justify-content-md-end ">
                        <ul class="pagination m-0  ">
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                        </div>
                    </div>
                     
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                      {/* Browser Category */}
                      <div>
                      <Accordion title="Fruits and Vegetables " items="Apple" id="fruits" idtarget="#fruits"/>
                      <Accordion title="meat and fish" items="Apple" id="cooking" idtarget="#cooking"/>
                      <Accordion title="cooking" items="Apple" id="fish" idtarget="#fish"/>
                      <Accordion title="beverages" items="Apple" id="beverages" idtarget="#beverages"/>
                      <Accordion title="home and cleaning" items="Apple" id="cleaning" idtarget="#cleaning"/>
                      <Accordion title="pets care" items="Apple" id="pet" idtarget="#pet"/>
                      <Accordion title="office product" items="Apple" id="officeproduct" idtarget="#officeproduct"/>
                      <Accordion title="beauty product" items="Apple" id="beauty" idtarget="#beauty"/>
                      <Accordion title="health product" items="Apple" id="health" idtarget="#health"/>
                      <Accordion title="baby care" items="Apple" id="petcare" idtarget="#petcare"/>
                      <Accordion title="home appliances" items="Apple" id="baby" idtarget="#baby"/>
                      </div>
                       {/* product Filters */}
                      <div className="btn  bg-p rounded-0 text-white p-lg-3 fw-bold w-100">Product Filters</div>
                      {/* brand */}
                      <div className="pt-2 border-bottom shadow-sm">
                      <p className="fw-bold ps-3 ">BRANDS</p>
                      <div class="form-check mb-4 ps-5">
                     <input class="form-check-input" type="radio" name="brand" id="apple"></input>
                     <label class="form-check-label text-capitalize ps-1" for="apple">Apple <span className="text-white fw-bold rounded-pill ms-1 badge bg-danger"> (8)</span></label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                     <input class="form-check-input" type="radio" name="brand" id="asus"></input>
                     <label class="form-check-label text-capitalize ps-1" for="asus">Asus <span className="text-white fw-bold rounded-pill ms-1 badge bg-danger"> (44)</span></label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                     <input class="form-check-input" type="radio" name="brand" id="oppo"></input>
                     <label class="form-check-label text-capitalize ps-1" for="oppo">oppo v12 <span className="text-white fw-bold rounded-pill ms-1 badge bg-danger"> (44)</span></label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                     <input class="form-check-input" type="radio" name="brand" id="micro"></input>
                     <label class="form-check-label text-capitalize ps-1" for="micro">micromax <span className="text-white fw-bold rounded-pill ms-1 badge bg-danger"> (16)</span></label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                     <input class="form-check-input" type="radio" name="brand" id="lenov"></input>
                     <label class="form-check-label text-capitalize ps-1" for="lenov">lenovo <span className="text-white fw-bold rounded-pill ms-1 badge bg-danger"> (14)</span></label>
                      </div>
                      </div>
                        {/* color */}
                      <div className="pt-2 mt-2 border-bottom shadow-sm">
                      <p className="fw-bold ps-3 ">COLOR</p>
                      <div class="form-check mb-4 ps-5">
                     <input class="form-check-input" type="radio" name="color" id="black"></input>
                     <label class="form-check-label text-capitalize ps-1" for="black">black <span className="text-muted fw-lighter"> (8)</span></label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                     <input class="form-check-input" type="radio" name="color" id="red"></input>
                     <label class="form-check-label text-capitalize ps-1" for="red">black with red <span className="text-muted fw-lighter"> (2)</span></label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                     <input class="form-check-input" type="radio" name="color" id="gold"></input>
                     <label class="form-check-label text-capitalize ps-1" for="gold">gold <span className="text-muted fw-lighter"> (15)</span></label>
                      </div>
                       <div class="form-check mb-4 ps-5">
                     <input class="form-check-input" type="radio" name="color" id="spa"></input>
                     <label class="form-check-label text-capitalize ps-1" for="spa">spacegrey <span className="text-muted fw-lighter"> (28)</span></label>
                      </div>
                     
                      </div>
                        {/* price */}
                      <div className="pt-2 mt-2 border-bottom shadow-sm">
                      <p className="fw-bold ps-3 ">PRICE</p>
                      <div class="form-check mb-4 ps-5">
                      <input class="form-check-input" type="checkbox" value="" id="20000"></input>
                      <label class="form-check-label text-muted ps-2" for="20000">$0 - $20,000</label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                      <input class="form-check-input" type="checkbox" value="" id="40000"></input>
                      <label class="form-check-label text-muted ps-2" for="40000">$20,000 - $40,000</label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                      <input class="form-check-input" type="checkbox" value="" id="60000"></input>
                      <label class="form-check-label text-muted ps-2" for="60000">$40,000 - $60,000</label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                      <input class="form-check-input" type="checkbox" value="" id="80000"></input>
                      <label class="form-check-label text-muted ps-2" for="80000">$60,000 - $80,000</label>
                      </div>
                      <div class="form-check mb-4 ps-5">
                      <input class="form-check-input" type="checkbox" value="" id="100000"></input>
                      <label class="form-check-label text-muted ps-2" for="100000">$80,000 - $1,00000</label>
                      </div>
                     
                      </div>

                    </div>
                    <div className="col-md-8">
                    <div className="row py-2">
                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                    <Card img="https://themewagon.github.io/karma/img/product/p1.jpg" price="$180.00" discount="$200.00" />  
                    </div> 
                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                    <Card img="https://themewagon.github.io/karma/img/product/p2.jpg" price="$180.00" discount="$200.00" />  
                    </div> 
                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                    <Card img="https://themewagon.github.io/karma/img/product/p4.jpg" price="$180.00" discount="$200.00" />  
                    </div> 
                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                    <Card img="https://themewagon.github.io/karma/img/product/p6.jpg" price="$180.00" discount="$200.00" />  
                    </div> 
                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                    <Card img="https://themewagon.github.io/karma/img/product/p7.jpg" price="$180.00" discount="$200.00" />  
                    </div> 
                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                    <Card img="https://themewagon.github.io/karma/img/product/p3.jpg" price="$180.00" discount="$200.00" />  
                    </div> 
                    </div>
                    <div className="row">
                    <div className="btn h-100  bg-p rounded-0 text-white p-lg-3 fw-bold w-100 ">
                    <div className="row">
                        <div className="col ">
                        <div className="d-flex justify-content-center ">
                        <ul class="pagination m-0  ">
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>

            </div>
          </section> 
          <Deals/>
        </main>
    )
}
export default shop
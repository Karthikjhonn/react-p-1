import React from "react";
import Home from './home'
import Shop from './shop'
import ProductDetails from './productDetails'
import Productcheckout from './checkout'
import ShopingCart from './shopingCart'
import Conformation from './conformation'
import Blog from './blog'
import Login from './login'
import Tracking from './tracking'
import Contact from './contact'
import PageNotFound from '../NotFound'
import "./style.css"
// import NotFound from '../NotFound'
import {BrowserRouter ,Route,NavLink, Routes, redirect} from 'react-router-dom'


function Menu(){
  // console.log(sticky);
  window.addEventListener("scroll",()=>{
        let headerEl = document.querySelector("#header")
        console.log(55);
        headerEl.classList.toggle("sticky",window.scrollY>250)
      })
    return(
      <BrowserRouter>
      <header className="bg-white   rounded shadow border-0 p-0 mb-5 bg-body rounded mx-auto " id="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
         <a class="navbar-brand" href="/"><img src="https://themewagon.github.io/karma/img/logo.png" className="navbar-brand" alt='Logoimage'></img></a>
         {/* menu btn */}
         <div class="navbar-toggler border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#Navbar" aria-controls="Navbar" aria-expanded="false" aria-label="Toggle navigation">
         <box-icon name='menu' size="md"></box-icon>
         </div>
        <div class="collapse navbar-collapse" id="Navbar">
        <ul className="  bg-white navbar-nav mx-auto mb-2 mb-lg-0 " id="mobile-menu">
      <li className="nav-item">
        <NavLink  to="/"   className="nav-link text-black orangeactive ">Home</NavLink>
      </li>
      {/* dropdown--1 */}
      <li className="nav-item dropdown">
        <NavLink to=""  className="nav-link text-black dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown">Shop</NavLink>
        <ul className="list-unstyled dropdown-menu">
        <li className="nav-item dropdown-item">
        <NavLink  to="/shop"   className="nav-link text-black text-uppercase">ShopCategory</NavLink>
        </li>
        <li className="nav-item dropdown-item">
        <NavLink  to="/productDetails"   className="nav-link text-black text-uppercase">productDetails</NavLink>
        </li>
        <li className="nav-item dropdown-item">
        <NavLink  to="/productcheckout"   className="nav-link text-black text-uppercase">Product checkout</NavLink>
        </li>
        <li className="nav-item dropdown-item">
        <NavLink  to="/shopingCart"   className="nav-link text-black text-uppercase">Shoping Cart</NavLink>
        </li>
        <li className="nav-item dropdown-item border-0">
        <NavLink  to="/conformation"   className="nav-link text-black text-uppercase">conformation</NavLink>
        </li>
        </ul>
      </li>

      <li className="nav-item">
        <NavLink to="/blog" className="nav-link text-black ">Blog</NavLink>
      </li>

      {/* dropdown--2 */}
      <li className="nav-item dropdown">
        <NavLink to="" className="nav-link text-black dropdown-toggle "id="navbarDropdown2" role="button" data-bs-toggle="dropdown" >Page</NavLink>
        <ul className="list-unstyled dropdown-menu">
        <li className="nav-item dropdown-item">
        <NavLink  to="/Login"   className="nav-link text-black text-uppercase">Login</NavLink>
        </li>
        <li className="nav-item dropdown-item border-0">
        <NavLink  to="/Tracking"   className="nav-link text-black text-uppercase ">Tracking</NavLink>
        </li>
        </ul>
      </li>
      
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link text-black ">Contact</NavLink>
      </li>
        </ul>
        {/* nav-icons */}
        <div className=" d-flex align-items-center justify-content-end d-lg-none ">
        <a href="/shop" className="ps-2" ><box-icon size="28px" name='shopify' type='logo' ></box-icon></a>
        <a href="#product-search" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample"><box-icon size="28px" name='search' ></box-icon></a>
        </div>
        </div> 
       {/* navbar-icons */}
       <div className=" d-flex align-items-center d-none  d-lg-flex gap-2">
        <a href="/shop"><box-icon size="28px" name='shopify' type='logo' ></box-icon></a>
        <a href="#product-search" data-bs-toggle="collapse"  aria-expanded="false" aria-controls="collapseExample"><box-icon size="28px" name='search'  ></box-icon></a>
       </div>
        </div>
      </nav>
      {/* search-box-collapse */}
      <div class="collapse w-100" id="product-search">
        <div class="form-group w-100">
         <input type="text" placeholder="Search" className="w-100 px-2 py-2 border-0 bg-orange "></input>
        </div>
      </div>
      </header>    
      <Routes> 
      <Route exact path="/" element={<Home/>}/>
      <Route path="/shop"  element={<Shop/>}/>
      <Route path="/productDetails"  element={<ProductDetails/>}/>
      <Route path="/productcheckout"  element={<Productcheckout/>}/>
      <Route path="/shopingCart"  element={<ShopingCart/>}/>
      <Route path="/conformation"  element={<Conformation/>}/>
      <Route path="/blog"  element={<Blog/>}/>
      <Route path="/Login"  element={<Login/>}/>
      <Route path="/Tracking"  element={<Tracking/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="*"  element={<PageNotFound/>}/>
      
      </Routes>
      </BrowserRouter> 
    )
} 
export default Menu

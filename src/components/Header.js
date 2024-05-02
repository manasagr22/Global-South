import React, { useState } from 'react'
import icon from "../Images/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header(props) {

  return (
    <header
      id="headerId"
      className={
        props.homePage
          ? "flex w-full justify-between items-center px-5 lg:px-10 py-5 top-0 z-[101] fixed font-medium drop-shadow bg-transparent text-white transition-five"
          : "border-gray-200 bg-gray-100 backdrop-filter backdrop-blur-sm flex w-full justify-between items-center px-5 lg:px-10 py-3 top-0 z-[101] fixed font-medium text-gray-900 transition-five"
      }
      style={{ fontWeight: "600", fontSize: "1.1rem" }}
    >
      <div class="flex items-center gap-4">
        <div>
          <span
            className="headerSpan"
            style={{ width: "14rem", top: "1.2px" }}
          >
            {/* <span className='headerSpan1'>
              <img className='headerImg' alt="" aria-hidden="true" src={icon}/>
            </span> */}
            <img alt="logo" src={icon} class="cursor-pointer headerImg" />
          </span>
        </div>
        {/* <div class="text-xl font-semibold cursor-pointer hover:border-b-2 hover:border-b-primary transition-one border-b-2 border-b-primary">
          <div>
            <span className="headerSpan" style={{ width: "10rem" }}>
              <img
                alt="logo"
                src={props.productName}
                class="cursor-pointer headerImg"
              />
            </span>
          </div>
        </div> */}
      </div>

      <nav
        class="hidden lg:flex lg:flex-[.8] xl:flex-[.6]"
        style={{ flexGrow: "0.6" }}
      >
        <ul class="flex flex-1 gap-2 items-center justify-evenly">
          <li class={props.page === "home" ? "text-blue-600 border-b-blue-600 border-b-2 transition-one" : props.homePage ? "text-white hover:border-b-2 hover:border-b-gray-400 transition-one" : "text-gray-900 hover:border-b-2 hover:border-b-gray-400 transition-one "}>
            <Link to="/">Home</Link>
          </li>
          <li class={props.page === "about" ? "text-blue-600 border-b-blue-600 border-b-2 transition-one" : props.homePage ? "text-white hover:border-b-2 hover:border-b-gray-400 transition-one" : "text-gray-900 hover:border-b-2 hover:border-b-gray-400 transition-one "}>
            <Link to="/about">About</Link>
          </li>
          <li class={props.page === "services" ? "text-blue-600 border-b-blue-600 border-b-2 transition-one" : props.homePage ? "text-white hover:border-b-2 hover:border-b-gray-400 transition-one" : "text-gray-900 hover:border-b-2 hover:border-b-gray-400 transition-one "}>
            <Link to="/services">Services</Link>
          </li>
          <li class={props.page === "contact" ? "text-blue-600 border-b-blue-600 border-b-2 transition-one" : props.homePage ? "text-white hover:border-b-2 hover:border-b-gray-400 transition-one" : "text-gray-900 hover:border-b-2 hover:border-b-gray-400 transition-one "}>
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li>
            <button
              class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-green-800"
              style={{ fontWeight: "600", fontSize: "0.96rem" }}
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              </span>
            </button>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

import React from "react";
import logo from "../imges/logo.png"
import {BiSearchAlt} from 'react-icons/bi'


function Nav() {
  return (
    <>
      <div className="nav sticky mt-[0px] z-[2] flex justify-center">
        <div className=" w-[82%] flex justify-between">
            <div className="logo h-[13vh] w-[180px] flex justify-start items-center ">
            <img className="logo" src={logo} alt="" />
            </div>
            <div className="logo h-[13vh] w-[50rem] text-white  flex justify-between items-center ">
            <ul class="flex justify-between w-[35rem]   rounded-lg   ">
                <div class="dropdown">
                  <button class="dropbtn p-2  text-lg cursor-pointer">Home</button>
                    <div class="dropdown-content text-gray-500 leading-relaxed font-semibold bg-white rounded p-3 w-[240px]">
                        <li className="hover:text-pink-500 cursor-pointer ">Home Classic</li>
                        <li className="hover:text-pink-500 cursor-pointer">Home Conference</li>
                        <li className="hover:text-pink-500 cursor-pointer">Home Meetup</li>
                        <li className="hover:text-pink-500 cursor-pointer">Home Page Four</li>
                    </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn p-2 text-lg cursor-pointer">About</button>
                    <div class="dropdown-content text-gray-500 leading-relaxed font-semibold bg-white rounded p-3 w-[240px]">
                        <li className="hover:text-pink-500 cursor-pointer">About Us</li>
                        <li className="hover:text-pink-500 cursor-pointer">Pricing</li>
                        <li className="hover:text-pink-500 cursor-pointer">FAQ,s</li>
                        <li className="hover:text-pink-500 cursor-pointer" >Gallery</li>
                    </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn p-2 text-lg cursor-pointer">Speakers</button>
                    <div class="dropdown-content text-gray-500 leading-relaxed font-semibold bg-white rounded p-3 w-[240px]">
                        <li className="hover:text-pink-500 cursor-pointer">Speakers</li>
                        <li className="hover:text-pink-500 cursor-pointer">Speakers Detail</li>
                    </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn p-2 text-lg cursor-pointer">Schedule</button>
                    <div class="dropdown-content text-gray-500 leading-relaxed font-semibold bg-white rounded p-3 w-[240px]">
                        <li className="hover:text-pink-500 cursor-pointer">Schedule</li>
                        <li className="hover:text-pink-500 cursor-pointer">Event Detail</li>
                        <li className="hover:text-pink-500 cursor-pointer">Buy Tickets</li>
                    </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn p-2 text-lg cursor-pointer">Blog</button>
                    <div class="dropdown-content leading-relaxed text-gray-500 font-semibold bg-white rounded p-3 w-[240px]">
                        <li className="hover:text-pink-500 cursor-pointer">Blog With Sidebar</li>
                        <li className="hover:text-pink-500 cursor-pointer">Blog Single</li>
                        <li className="hover:text-pink-500 cursor-pointer">Bog Grid</li>
                        
                    </div>
                </div>
                <li className="p-2  text-lg cursor-pointer">Contact</li>
            </ul>            
              <BiSearchAlt className="text-4xl"/>
                <div class="btn relative  ">
                    <div class="single-btn ">
                        <button className="rounded-xl px-4 py-2 text-md"><span>Get Tickets</span></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Nav;

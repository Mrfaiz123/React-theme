import React from "react";
import {BiChair} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go';
import {BsFillPersonFill} from 'react-icons/bs';

function Hero() {
    return (
      <>
        <div className="hero h-[110vh] w-[100%] flex justify-center ">
          <div className="h-[60vh] w-[50%] mt-[100px] text-center flex flex-col items-center">
            <h1 className="text-pink-500 font-semibold text-3xl">January 20,2023</h1>
            <h1 className=" font-bold text-white text-7xl mt-4 leading-tight">World Digital<br/>Conference 2023</h1>
            <div className="h-[7vh] w-[80%] mt-3 flex justify-between ">
              <div className="w-[150px] h-[100%] flex items-center justify-between">
                <BiChair className="text-pink-500 text-2xl"/>
                <h1 className="text-white font-semibold text-md">5000 SEATS</h1>
              </div>
              <div className="w-[150px] h-[100%] flex items-center justify-between">
                <BsFillPersonFill className="text-pink-500 text-2xl"/>
                <h1 className="text-white font-semibold text-sd">12 SPEAKERS</h1>
              </div>
              <div className="w-[180px] h-[100%] flex items-center justify-between">
                <GoLocation className="text-pink-500 text-2xl"/>
                <h1 className="text-white font-semibold text-md">PALO, CALIFORNIA</h1>
              </div>
            </div>
            <div class="btn relative mt-4 ">
                <div class="single-btn ">
                        <button className="rounded-xl px-4 py-2 text-lg"><span>Book Now</span></button>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Hero;
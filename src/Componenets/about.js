import React from "react";
import {AiOutlineCheckCircle} from 'react-icons/ai'
//import {imge} from '../imges/img2.jpg'

function About() {
    return (
      <>
        <div className="about h-[100vh] w-[100%] flex ">
            <div className=" h-[100%] w-[50%]  relative">
              
                <div className="aboutside-div z-[-2] absolute mt-[-200px] ml-[-250px] h-[80vh] w-[86%] "></div>
                <div className="h-[70vh] w-[80%] mt-[100px] ml-[80px] absolute"> 
                  <h1 className="about-h font-bold   text-xl  ">ABOUT EVENT</h1> 
                  <h1 className="text-4xl font-bold mt-2">Welcome to the World <br/> Digital Conference 2023</h1>
                  <p className="text-gray-400 text-lg mt-3">Dolor sit amet consectetur elit sed do eiusmod tempor incd
                  <br/> idunt labore et dolore magna aliqua enim ad minim veniam
                  <br/> quis nostrud exercitation ullamco laboris nisi ut aliquip exea<br/> commodo consequat.</p>
                  <div className="h-[25vh] w-[100%] flex mt-[30px]">
                    <div className="h-[100%] w-[7%] flex flex-col ">
                      <AiOutlineCheckCircle className="text-xl text-pink-500 mt-[10px]"/>
                      <AiOutlineCheckCircle className="text-xl text-pink-500 mt-[17px]"/>
                      <AiOutlineCheckCircle className="text-xl text-pink-500 mt-[15px]"/>
                      <AiOutlineCheckCircle className="text-xl text-pink-500 mt-[15px]"/>

                    </div>
                    <div className="h-[100%] w-[70%]  flex flex-col ">
                      <h1 className="text-gray-600 leading-loose text-lg">Multiple Announcements during the event.</h1>
                      <h1 className="text-gray-600 leading-loose text-lg">Logo & company details on the WordCamp.</h1>
                      <h1 className="text-gray-600 leading-loose text-lg">Dedicated blog post thanking each Gold.</h1>
                      <h1 className="text-gray-600 leading-loose text-lg">Acknowledgment and opening and closing.</h1>
                    </div>
                  </div>
                  <div class="btn relative mt-4 ml-2 ">
                    <div class="single-btn ">
                            <button className="rounded-xl px-4 py-2 text-lg"><span>Book Now</span></button>
                    </div>
                </div>
                </div>
            </div>
            <div className="h-[100%] w-[50%] relative">
              <div className="aboutdiv-right h-[11vh] absolute mt-[180px] w-[90px]"></div>
              <div className="aboutdiv-mid p-10 h-[60vh] w-[70%] absolute  mt-[150px] ml-[120px]"></div>
            </div>
        </div>
      </>
    );
  }
  
  export default About;
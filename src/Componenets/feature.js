import React from "react";
import img3 from '../imges/circul2.png'
import {BiSearchAlt} from 'react-icons/bi';
import {IoDiamondOutline} from 'react-icons/io5';
import {GiPublicSpeaker} from 'react-icons/gi';
import {BsFillPeopleFill} from 'react-icons/bs';
import {GiPartyPopper} from 'react-icons/gi';



function Feature() {
    return (
      <>
        <div className="h-[100vh] w-[100%] border relative overflow-hidden">
            <img src={img3} className="circule2 absolute  ml-[1200px] h-[50vh]  " />
            
            <div className="spring1 absolute h-[10vh] w-[80px] ml-[200px] mt-[135px]" ></div>
            <div className="spring2 absolute h-[10vh] w-[50px] ml-[-20px] mt-[180px]" ></div>
            <div className="spring absolute h-[10vh] w-[80px] ml-[-20px] mt-[350px]" ></div>

            <div className=" absolute h-[60vh] w-[80%] flex flex-wrap justify-between mt-[200px] ml-[130px]">
                <div className=" h-[25vh] w-[32%] p-3">
                    <p className="about-h mt-4 font-semibold text-lg tracking-widest">FEATURES</p>
                    <h1 className="text-5xl text-blue-900 font-bold">Our Feature</h1>
                </div>
                <div className="feature-div h-[25vh] w-[32%] p-3 flex items-center justify-evenly border">
                    <GiPublicSpeaker className="icon text-pink-500 text-6xl"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-blue-900 font-bold hover:text-pink-500 cursor-pointer">Great Speakers</h1>
                        <p className="text-gray-600 mt-2">Dolor sit amet consectetur elit <br/> sed do eiusmod tempor incd.</p>
                    </div>
                </div>
                <div className="feature-div h-[25vh] w-[32%] p-3 flex items-center justify-evenly border">
                    <BiSearchAlt className="icon text-pink-500 text-6xl"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-blue-900 font-bold hover:text-pink-500 cursor-pointer">Experience</h1>
                        <p className="text-gray-600 mt-2">Dolor sit amet consectetur elit <br/> sed do eiusmod tempor incd.</p>
                    </div>
                </div>
                <div className="feature-div h-[25vh] w-[32%] p-3 flex items-center justify-evenly border">
                    <IoDiamondOutline className="icon text-pink-500 text-6xl"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-blue-900 font-bold hover:text-pink-500 cursor-pointer">Networking</h1>
                        <p className="text-gray-600 mt-2">Dolor sit amet consectetur elit <br/> sed do eiusmod tempor incd.</p>
                    </div>
                </div>
                <div className="feature-div h-[25vh] w-[32%] p-3 flex items-center justify-evenly border">
                    <GiPartyPopper className="icon text-pink-500 text-6xl"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-blue-900 font-bold hover:text-pink-500 cursor-pointer">Party</h1>
                        <p className="text-gray-600 mt-2">Dolor sit amet consectetur elit <br/> sed do eiusmod tempor incd.</p>
                    </div>
                </div>
                <div className="feature-div h-[25vh] w-[32%] p-3 flex items-center justify-evenly border">
                    <BsFillPeopleFill className="icon text-pink-500 text-6xl"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-blue-900 font-bold hover:text-pink-500 cursor-pointer">New People</h1>
                        <p className="text-gray-600 mt-2">Dolor sit amet consectetur elit <br/> sed do eiusmod tempor incd.</p>
                    </div>
                </div>
                

            </div>
        </div>
      </>
    );
  }
  
  export default Feature;
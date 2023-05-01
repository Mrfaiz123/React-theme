import React from "react";
import man from "../imges/circule3.jpg"
import man1 from "../imges/circule4.jpg"
import man2 from "../imges/circule5.jpg"
import man3 from "../imges/circule6.jpg"
import man4 from "../imges/circule7.jpg"
import man5 from "../imges/circule8.jpg"
import man6 from "../imges/circule9.jpg"
import man7 from "../imges/circule10.jpg"

import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {IoIosFootball} from "react-icons/io"
import {TbBrandProducthunt} from "react-icons/tb"




function Speakers() {
    return (
      <>
            <div className="speakers h-[130vh] w-[100%] text-center">
                <h1 className=" pt-[100px] font-semibold text-lg tracking-widest text-white">SPEAKERS</h1>
                <h1 className=" mt-[20px] font-bold text-5xl  text-white">Todays Performers</h1>
                <div className="h-[85vh] w-[80%]  flex flex-wrap justify-between mt-[70px] ml-[130px]">
                    <div className="Speaker-circule relative overflow-hidden rounded-full  h-[38vh] ">
                        <div className="mid absolute flex justify-center items-center flex-col rounded-full ml-[-275px] mt-[-10px] h-[38vh] w-[265px]">
                            <h1 className="text-white text-2xl font-bold">Dale Marke</h1>
                            <p className="text-white text-md font-semibold mt-1">Event Manager</p>
                            <div className="flex justify-between h-[5vh] w-[70%] mt-2">
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><FaFacebookF className="text-lg text-blue-900"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><AiOutlineTwitter className="text-xl text-blue-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><TbBrandProducthunt className="text-xl text-red-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><IoIosFootball className="text-xl text-pink-500"/></div>
                            </div>
                        </div>
                        <img src={man} className="Speaker-circule-img rounded-full h-[100%] w-[100%]"/>
                    </div>
                    <div className="Speaker-circule relative overflow-hidden rounded-full  h-[38vh]">
                        <div className="mid absolute flex justify-center items-center flex-col rounded-full ml-[-275px] mt-[-10px] h-[38vh] w-[265px]">
                            <h1 className="text-white text-2xl font-bold">Natisha Decoux</h1>
                            <p className="text-white text-md font-semibold mt-1">Event Manager</p>
                            <div className="flex justify-between h-[5vh] w-[70%] mt-2">
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><FaFacebookF className="text-lg text-blue-900"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><AiOutlineTwitter className="text-xl text-blue-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><TbBrandProducthunt className="text-xl text-red-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><IoIosFootball className="text-xl text-pink-500"/></div>
                            </div>
                        </div>
                        <img src={man1} className="Speaker-circule-img rounded-full h-[100%] w-[100%]"/>
                    </div>
                    <div className="Speaker-circule relative overflow-hidden rounded-full  h-[38vh]">
                        <div className="mid absolute flex justify-center items-center flex-col rounded-full ml-[-275px] mt-[-10px] h-[38vh] w-[265px]">
                            <h1 className="text-white text-2xl font-bold">Adolfo Plahs</h1>
                            <p className="text-white text-md font-semibold mt-1">Event Manager</p>
                            <div className="flex justify-between h-[5vh] w-[70%] mt-2">
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><FaFacebookF className="text-lg text-blue-900"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><AiOutlineTwitter className="text-xl text-blue-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><TbBrandProducthunt className="text-xl text-red-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><IoIosFootball className="text-xl text-pink-500"/></div>
                            </div>
                        </div>
                        <img src={man2} className="Speaker-circule-img rounded-full h-[100%] w-[100%]"/>
                    </div>
                    <div className="Speaker-circule relative overflow-hidden rounded-full  h-[38vh]">
                        <div className="mid absolute flex justify-center items-center flex-col rounded-full ml-[-275px] mt-[-10px] h-[38vh] w-[265px]">
                            <h1 className="text-white text-2xl font-bold">Mitchell <br/> Heggestad</h1>
                            <p className="text-white text-md font-semibold mt-1">Event Manager</p>
                            <div className="flex justify-between h-[5vh] w-[70%] mt-2">
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><FaFacebookF className="text-lg text-blue-900"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><AiOutlineTwitter className="text-xl text-blue-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><TbBrandProducthunt className="text-xl text-red-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><IoIosFootball className="text-xl text-pink-500"/></div>
                            </div>
                        </div>
                        <img src={man3} className="Speaker-circule-img rounded-full h-[100%] w-[100%]"/>
                    </div>
                    <div className="Speaker-circule relative overflow-hidden rounded-full  h-[38vh] ">
                        <div className="mid absolute flex justify-center items-center flex-col rounded-full ml-[-275px] mt-[-10px] h-[38vh] w-[265px]">
                            <h1 className="text-white text-2xl font-bold">Kenyetta Lesley</h1>
                            <p className="text-white text-md font-semibold mt-1">Event Manager</p>
                            <div className="flex justify-between h-[5vh] w-[70%] mt-2">
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><FaFacebookF className="text-lg text-blue-900"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><AiOutlineTwitter className="text-xl text-blue-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><TbBrandProducthunt className="text-xl text-red-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><IoIosFootball className="text-xl text-pink-500"/></div>
                            </div>
                        </div>
                        <img src={man4} className="Speaker-circule-img rounded-full h-[100%] w-[100%]"/>
                    </div>
                    <div className="Speaker-circule relative overflow-hidden rounded-full  h-[38vh]">
                        <div className="mid absolute flex justify-center items-center flex-col rounded-full ml-[-275px] mt-[-10px] h-[38vh] w-[265px]">
                            <h1 className="text-white text-2xl font-bold">Shelly Verghese</h1>
                            <p className="text-white text-md font-semibold mt-1">Event Manager</p>
                            <div className="flex justify-between h-[5vh] w-[70%] mt-2">
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><FaFacebookF className="text-lg text-blue-900"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><AiOutlineTwitter className="text-xl text-blue-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><TbBrandProducthunt className="text-xl text-red-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><IoIosFootball className="text-xl text-pink-500"/></div>
                            </div>
                        </div>
                        <img src={man5} className="Speaker-circule-img rounded-full h-[100%] w-[100%]"/>
                    </div>
                    <div className="Speaker-circule relative overflow-hidden rounded-full  h-[38vh]">
                        <div className="mid absolute flex justify-center items-center flex-col rounded-full ml-[-275px] mt-[-10px] h-[38vh] w-[265px]">
                            <h1 className="text-white text-2xl font-bold">Cassandra <br/> Kopka</h1>
                            <p className="text-white text-md font-semibold mt-1">Event Manager</p>
                            <div className="flex justify-between h-[5vh] w-[70%] mt-2">
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><FaFacebookF className="text-lg text-blue-900"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><AiOutlineTwitter className="text-xl text-blue-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><TbBrandProducthunt className="text-xl text-red-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><IoIosFootball className="text-xl text-pink-500"/></div>
                            </div>
                        </div>
                        <img src={man6} className="Speaker-circule-img rounded-full h-[100%] w-[100%]"/>
                    </div>
                    <div className="Speaker-circule relative overflow-hidden rounded-full  h-[38vh] ">
                        <div className="mid absolute flex justify-center items-center flex-col rounded-full ml-[-275px] mt-[-10px] h-[38vh] w-[265px]">
                            <h1 className="text-white text-2xl font-bold">Eugene <br/> Clumpner</h1>
                            <p className="text-white text-md font-semibold mt-1">Event Manager</p>
                            <div className="flex justify-between h-[5vh] w-[70%] mt-2">
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><FaFacebookF className="text-lg text-blue-900"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><AiOutlineTwitter className="text-xl text-blue-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><TbBrandProducthunt className="text-xl text-red-500"/></div>
                                <div className="h-[100%] w-[22%] bg-white cursor-pointer flex justify-center items-center border"><IoIosFootball className="text-xl text-pink-500"/></div>
                            </div>
                        </div>
                        <img src={man7} className="Speaker-circule-img rounded-full h-[100%] w-[100%]"/>
                    </div>

                </div>
            </div>
      </>
    );
  }
  
  export default Speakers;
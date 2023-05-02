import React from "react";
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {RiProductHuntFill} from 'react-icons/ri'
import {AiFillYoutube} from 'react-icons/ai'
import {BiFootball} from 'react-icons/bi'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {BiPaperPlane} from 'react-icons/bi'
import {IoEarthOutline} from 'react-icons/io5'




import logo1 from '../imges/logo.png'
import foot1 from '../imges/footer1.jpg'
import foot2 from '../imges/footer2.jpg'
import foot3 from '../imges/footer3.jpg'
import foot4 from '../imges/footer4.jpg'
import foot5 from '../imges/footer5.jpg'
import foot6 from '../imges/footer6.jpg'


function Footer() {
    return (
      <>
        <div className="footer relative overflow-hidden flex items-center justify-center h-[90vh] w-[100%]">
            <div className="w-[85%] h-[60%] flex justify-between ">
                <div className="h-[100%] w-[32%] ">
                    <img className="" src={logo1}/>
                    <h1 className="text-lg text-gray-500 mt-3">We have very good strength in innovative
                    <br/> technology and tools with over 35 years of<br/>
                    experience. We makes long-term<br/> investments goal in global companies in<br/>
                    different sectors, mainly in Europe and other<br/> countries.</h1>
                    <div className="w-[70%] h-[6vh] mt-3 flex justify-between ">
                        <div className="footer-div cursor-pointer h-[100%] w-[3vw] text-xl bg-gray-500 hover:text-white hover:bg-blue-900 flex items-center justify-center"><FiFacebook/></div>
                        <div className="footer-div cursor-pointer h-[100%] w-[3vw] text-xl bg-gray-500 hover:text-white hover:bg-blue-500 flex items-center justify-center"><AiOutlineTwitter/></div>
                        <div className="footer-div cursor-pointer h-[100%] w-[3vw] text-xl bg-gray-500 hover:text-white hover:bg-red-500 flex items-center justify-center"><RiProductHuntFill/></div>
                        <div className="footer-div cursor-pointer h-[100%] w-[3vw] text-xl bg-gray-500 hover:text-white hover:bg-red-500 flex items-center justify-center"><AiFillYoutube /></div>
                        <div className="footer-div cursor-pointer h-[100%] w-[3vw] text-xl bg-gray-500 hover:text-white hover:bg-pink-500 flex items-center justify-center"><BiFootball /></div>
                    </div>
                </div>


                <div className="h-[100%] w-[14%] ">
                    <h1 className="text-white font-bold text-2xl">Useful Links</h1>
                    <div className="h-[2px] w-[28%] bg-pink-700 mt-2"></div>
                    <div className="h-[100%] flex ">
                        <div className="h-[55%] w-[1vw] flex flex-col justify-between  mt-[40px]">
                            <div className="h-[4vh] w-[2px] bg-pink-700"></div>
                            <div className="h-[4vh] w-[2px] bg-pink-700"></div>
                            <div className="h-[4vh] w-[2px] bg-pink-700"></div>
                            <div className="h-[4vh] w-[2px] bg-pink-700"></div>
                            <div className="h-[4vh] w-[2px] bg-pink-700"></div>
                            <div className="h-[4vh] w-[2px] bg-pink-700"></div>
                        </div>
                        <div className="h-[55%] w-[1vw] flex flex-col justify-between list-none mt-[40px]">
                            <li className=" text-white cursor-pointer w-[10vw]  hover:text-pink-700">Home</li>
                            <li className=" text-white cursor-pointer w-[10vw]  hover:text-pink-700">About Us</li>
                            <li className=" text-white cursor-pointer w-[10vw]  hover:text-pink-700">Services</li>
                            <li className=" text-white cursor-pointer w-[10vw]  hover:text-pink-700">Projects</li>
                            <li className=" text-white cursor-pointer w-[10vw]  hover:text-pink-700">Blogs</li>
                            <li className=" text-white cursor-pointer w-[10vw]  hover:text-pink-700">Contact Us</li>
                        </div>
                    </div>
                </div>



                <div className="h-[100%] w-[20%] ">
                    <h1 className="text-white font-bold text-2xl">Contact Us</h1>
                    <div className="h-[2px] w-[20%] bg-pink-700 mt-2"></div>
                    <div className="h-[100%] flex ">
                        <div className="h-[55%] w-[3vw] text-white text-2xl flex flex-col justify-between  mt-[40px]">
                            <AiOutlineClockCircle/>
                            <BiPhoneCall/>
                            <BiPaperPlane/>
                            <IoEarthOutline/>
                        </div>
                        <div className="h-[60%] w-[15vw] flex flex-col justify-between list-none mt-[40px]">
                            <li className=" text-white cursor-pointer w-[100%]  hover:text-pink-700">Mon - Fri: 09:00 - 18:00</li>
                            <li className=" text-white cursor-pointer w-[100%] mt-2  hover:text-pink-700">+1-345-5678-77</li>
                            <li className=" text-white cursor-pointer w-[100%] mt-2  hover:text-pink-700">support@example.com</li>
                            <li className=" text-white cursor-pointer w-[100%] mt-2  hover:text-pink-700">13005 Greenville Avenue <br/>California, TX 70240</li>
                        </div>
                    </div>

                </div>
                <div className="h-[100%] w-[27%] ">
                    <h1 className="text-white font-bold text-2xl">Instagram Gallery</h1>
                    <div className="h-[2px] w-[15%] bg-pink-700 mt-2"></div>
                    <div className="h-[27vh] w-[100%] mt-6  justify-between flex flex-wrap">
                        <img className="h-[12vh] w-[7vw] " src={foot1}/>
                        <img className="h-[12vh] w-[7vw] " src={foot2}/>
                        <img className="h-[12vh] w-[7vw] " src={foot3}/>
                        <img className="h-[12vh] w-[7vw] " src={foot4}/>
                        <img className="h-[12vh] w-[7vw] " src={foot5}/>
                        <img className="h-[12vh] w-[7vw] " src={foot6}/>
                        {/*src="/image/news-2.jpg"*/}
                    </div>
                </div>

            </div>
        </div>
      </>
    );
}

export default Footer;
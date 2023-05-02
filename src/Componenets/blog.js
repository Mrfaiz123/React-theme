import React from "react";
import {BiUser} from 'react-icons/bi'
import {FaRegComments} from 'react-icons/fa'
import img3 from '../imges/circul2.png'
import New from '../imges/news-1.jpg'
import New1 from '../imges/news-2.jpg'
import New2 from '../imges/news-3.jpg'
import img09 from '../imges/img09.png'
import img10 from '../imges/img10.png'
import img11 from '../imges/img11.png'


//news-1.jpg
function Blogs(){

    return(
        <>
  <section class="blog text-gray-600 overflow-hidden border body-font w-[100%]  ">
   
  <div class="container  px-5 py-24 mx-auto ">
        <h2 class="text-base title-font text-[#980867] font-bold tracking-widest tracking-widest mt-6">BLOGS</h2>
        <h1 class="text-gray-900 text-[42px] title-font font-bold mb-[10vh] mt-4">Latest News</h1>

        <div className="h-[73px] w-[70px] -mx-[4vw]  absolute">
          <img src={img09}/>
        </div>
        <div className="h-[73px] w-[70px] -my-[29vh] -mx-[6vw] absolute">
          <img src={img10}/>
        </div>
        <div className="h-[73px] w-[70px] -my-[35vh] mx-[10vw]  absolute">
          <img src={img11}/>
        </div>

    <div class="flex sm:-m-4 -mx-4 -mb-10 -mt-4 pl-4  ">
      
    <div class=" crd lg:w-[28vw] border m-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="h-58 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={New}/>
        </div>
        <div className='flex  leading-10 font-medium mt-4  items-center text-start ml-[2vw]' >
                <h1 className="text-[#1d95d2] pr-2  text-[18px]  "><BiUser/></h1>
                <p className="pr-10 text-[15px] text-[#909090] ">Admin</p>
                <h1 className="text-[#1d95d2]   pr-2  text-[18px]  "><FaRegComments/></h1>
                <p className="pr-10 text-[15px] text-[#909090] ">Comment 03</p>
                </div>
        <h2 class="text-[22px] font-semibold title-font text-gray-900 text-start hover:text-pink-500 cursor-pointer ml-[2vw] ">International Conference on Art Business</h2>
        <button className=" py-2 px-3 text-white bg-blue-500 hover:text-blue-500 hover:bg-white ml-7 mt-3">Read More</button>
      
      </div>


      <div class="border lg:w-[28vw] m-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="h-58 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={New1}/>
        </div>
        <div className='flex  leading-10 font-medium mt-4  items-center text-start ml-[2vw]' >
                <h1 className="text-[#1d95d2] pr-2  text-[18px]  "><BiUser/></h1>
                <p className="pr-10 text-[15px] text-[#909090] ">Admin</p>
                <h1 className="text-[#1d95d2]   pr-2  text-[18px]  "><FaRegComments/></h1>
                <p className="pr-10 text-[15px] text-[#909090] ">Comment 03</p>
                </div>
                <h2 class="text-[22px] font-semibold title-font text-gray-900 text-start hover:text-pink-500 cursor-pointer ml-[2vw] ">International Conference on Art Business</h2>
                <button className=" py-2 px-3 text-white bg-blue-500 hover:text-blue-500 hover:bg-white ml-7 mt-3">Read More</button>          
      </div>


      <div class="border lg:w-[28vw] m-4 md:w-1/3 sm:mb-0 mb-6 ">
        <div class=" h-58 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={New2}/>
        </div>
        <div className='flex  leading-10 font-medium mt-4  items-center text-start ml-[2vw]' >
                <h1 className="text-[#1d95d2] pr-2  text-[18px]  "><BiUser/></h1>
                <p className="pr-10 text-[15px] text-[#909090] ">Admin</p>
                <h1 className="text-[#1d95d2]   pr-2  text-[18px]  "><FaRegComments/></h1>
                <p className="pr-10 text-[15px] text-[#909090] ">Comment 03</p>
                </div>
                <h2 class="text-[22px] font-semibold title-font text-gray-900 text-start hover:text-pink-500 cursor-pointer ml-[2vw] ">International Conference on Art Business</h2>
                <button className=" py-2 px-3 text-white bg-blue-500 hover:text-blue-500 hover:bg-white ml-7 mt-3">Read More</button>          
      </div>
    </div>
  </div>
  <div className="h-[35vh] relative ml-[1280px] mt-[-30vh] w-[32vw] ">
      <img src={img3} className="circule2 absolute  h-[35vh]  " />
    </div>
</section>
        </>
    )
}

export default Blogs
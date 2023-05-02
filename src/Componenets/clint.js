import React from "react";
import brand from '../imges/img30.png'
import brand1 from '../imges/img31.png' 
import brand2 from '../imges/img32.png'
import brand3 from '../imges/img33.png' 
import brand4 from '../imges/img  34.png' 
import brand5 from '../imges/img30.png' 
import brand6 from '../imges/img33.png' 
import brand7 from '../imges/img32.png' 
import brand8 from '../imges/img33.png' 
import brand9 from '../imges/img32.png' 
import brand10 from '../imges/img30.png' 
import brand11 from '../imges/img  34.png' 
import brand15 from '../imges/icon-dots-3.png' 





export default function Client() {
    
    return (
        <>
        <div>


        <div className='h-[150vh] w-[100%]  bg-white  '>
    
    <div className='  text-start mx-20 mt-16 '>

<h2 class="text-base title-font text-[#980867]  tracking-widest tracking-widest mt-6">CLIENTS</h2>
        <h1 class="text-gray-900 text-[42px] title-font font-bold ">Offcial Sponsors</h1>
        </div>
        <div className=' h-[25vh] w-[20vw] mx-6 '>

        <img src={brand15} className='h-[100%] w-[100%]  border-red-500' />
    </div>
<div className="m-12  -my-20">
<div className="" >
<button  class="clint text-start text-[20px] rounded-lg py-[10px] px-[30px] mr-[75%] font-semibold text-white bg-[#40cbb4]">Platinum Sponsors</button>
<div class="grid grid-cols-4 gap-6 m-8">
  <div className="card h-32 cursor-pointer shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand8} className="h-[100%] w-[50%] mx-20 "/>
  </div>

  <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand9} className="h-[100%] w-[50%] mx-20 "/>
  </div>

  <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand10} className="h-[100%] w-[50%] mx-20 "/>
  </div>
 
    <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand11} className="h-[100%] w-[50%] mx-20 "/>
    </div>
  </div>
</div>


<div className="  mt-20" >
<button  class="clint text-start text-[20px] rounded-lg py-[10px] px-[30px] mr-[78%] font-semibold text-white bg-[#1D95D2]">Gold Sponsors</button>
<div class="grid grid-cols-4 gap-6 m-8">

    <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand4} className="h-[100%] w-[50%] mx-20 "/>
    </div>

    <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand5} className="h-[100%] w-[50%] mx-20 "/>
    </div>

    <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand6} className="h-[100%] w-[50%] mx-20 "/>
    </div>

    <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)]  hover:none ">
        <img src={brand7} className="h-[100%] w-[50%] mx-20 "/>
    </div>
</div>
</div>


<div className="  mt-20" >
<button  class="clint text-start text-[20px] rounded-lg py-[10px] px-[30px] mr-[78%] font-semibold text-white bg-[#EC167F]">Silver Sponsors</button>
<div class="grid grid-cols-4 gap-6 m-8">
    <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand} className="h-[100%] w-[50%] mx-20 "/>
    </div>

    <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand1} className="h-[100%] w-[50%] mx-20 "/>
    </div>

    <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] ">
        <img src={brand2} className="h-[100%] w-[50%] mx-20 "/>
    </div>

    <div className="card h-32 cursor-pointer  shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)]  ">
        <img src={brand3} className="h-[100%] w-[50%] mx-20 "/>
    </div>
</div>



</div>
</div>
    </div>
        </div>
        
    </>
    )
}
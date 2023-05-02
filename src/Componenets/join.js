import React from "react";

 import brand21 from '../imges/imgli2.png'
 import brand22 from '../imges/img  28.jpg'


export default function Join() {
    return(
        <>
        <section class="text-gray-600 body-font overflow-hidden bg-[#FAFAFA]">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/4 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded " src={brand22}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-start">
      <h2 class="text-base title-font text-[#980867] font-bold tracking-widest tracking-widest mt-6">JOIN THE EVENT</h2>
        <h1 class="text-gray-900 text-[42px] title-font font-bold mt-4">Why Choose Eventrox?</h1>
    
        <p className='text-[16px] leading-[28px] text-[#888888] font-medium'>Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.</p>
    
        <div className='flex  leading-10 font-medium mt-4  items-center text-start' >
            <img src={brand21}/>
        </div>
                <div class="btn relative mt-[40px] ml-2">
                    <div class="single-btn ">
                        <button className="rounded-xl px-4 py-2 text-md"><span>Get Tickets</span></button>
                    </div>
                </div>

      </div>
    </div>
  </div>
</section>
        </>
    )
}
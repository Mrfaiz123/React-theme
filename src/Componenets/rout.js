import React from "react";
import { Link } from "react-router-dom";

export default function Rout() {
    return(

        <>
  <section class="route text-gray-600 body-font bg-[ #FAFAFA] h-[85vh]  ">
        
       
        <div class="container px-5 py-24 mx-auto ">
    
    <h2 class="text-base title-font text-[#980867] font-bold tracking-widest tracking-widest ">ABOUT CONFERENCE</h2>
    <h1 class="text-gray-900 text-[48px] title-font font-extrabold ">Schedule Plan</h1>
    </div>
    <div class="grid grid-cols-4 gap-6 w-[60%] mx-[25%]">

    <Link to="/Route1">
<button className="h-[25vh] w-[13vw] border rounded-3xl border-[#FFC20B]">
    <div className="h-8 font-bold text-white pt-1 w-20 mt-6 bg-[#FFC20B] rounded-r-full">Day 01</div>
    <div  className="flex justify-between w-28  ml-6">
        <h1 className="text-[#ffc20b] text-[38px] font-semibold">01</h1>
        <h1 className="text-[#222222] text-xl font-bold" ><span  className="text-[#ffc20b]">JAN</span><br/>2023</h1>
    </div>
    </button>
    </Link>

    <Link to="/Route2">

    <button className="h-[25vh] w-[13vw] border rounded-3xl border-[#40CBB4]">
    <div className="h-8 font-bold text-white pt-1 w-20 mt-6 bg-[#40CBB4] rounded-r-full">Day 01</div>
    <div  className="flex justify-between w-28  ml-6">
        <h1 className="text-[#ffc20b] text-[38px] font-semibold">01</h1>
        <h1 className="text-[#222222] text-xl font-bold" ><span  className="text-[#40CBB4]">JAN</span><br/>2023</h1>
    </div>
    </button>
    </Link>
    <Link to="/Route3">

    <button className="h-[25vh] w-[13vw] border rounded-3xl border-[#4C35A9]">
    <div className="h-8 font-bold text-white pt-1 w-20 mt-6 bg-[#4C35A9] rounded-r-full">Day 01</div>
    <div  className="flex justify-between w-28  ml-6">
        <h1 className="text-[#ffc20b] text-[38px] font-semibold">01</h1>
        <h1 className="text-[#222222] text-xl font-bold" ><span  className="text-[#4C35A9]">JAN</span><br/>2023</h1>
    </div>
    </button>
    </Link>
    <Link to="/Route4">
    <button className="h-[25vh] w-[13vw] border rounded-3xl border-[#E6275A]">
    <div className="h-8 font-bold text-white pt-1 w-20 mt-6 bg-[#E6275A] rounded-r-full">Day 01</div>
    <div  className="flex justify-between w-28  ml-6">
        <h1 className="text-[#ffc20b] text-[38px] font-semibold">01</h1>
        <h1 className="text-[#222222] text-xl font-bold" ><span  className="text-[#E6275A]">JAN</span><br/>2023</h1>
    </div>
    </button>
    </Link>

    </div>
        </section>
        </>
    )
}

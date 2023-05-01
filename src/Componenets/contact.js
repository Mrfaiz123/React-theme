import React from 'react'
import {RxRocket} from "react-icons/rx"
import {BiUser} from "react-icons/bi"

export default function Contact() {
  return (

<>



    <div className=' h-[90vh] w-[100%] bg-gray-200 items-center text-center flex justify-center '>

        <div className='h-[85%] w-[90%] bg-white  flex '>


<div className="register h-[100%] w-[40%]  gap-y-4 flex   items-center flex-col ">


    <div className='p-[5vh] mt-[50px] rounded-full bg-white'>
        <RxRocket className='text-black text-center text-7xl'/>
    </div>
    <h1 className='text-white text-4xl mt-2 font-bold'>REGISTER NOW</h1>
    <p className='text-white text-lg font-semibold text-center '>Lorem ipsum dolor sit amet,<br/>
    consectetur adipisicing elit, sed do<br/>
    eiusmtempor incididunt labore et <br/>
    dolore magna.</p>

</div>

<div className="inputes h-[100] w-[75%]  m-12  ">


<div className=' h-[100%] flex flex-col justify-evenly '>


<input type="text"  placeholder='Full name' className='p-2 w-[100%] border '/>

<input type="text"  placeholder='Email' className=' w-[100%] p-2 border  '/>
<input type="text" placeholder='Phone' className=' w-[100%] p-2 border'/>
<input type="text"  placeholder='Additional Message' className=' p-2 h-[25vh] w-[100%] border'/>



</div>

<button className='bg-[#24293d] text-white rounded p-2 w-[180px] ml-[40vw] '>Register Now</button>

</div>

        </div>


    </div>


    </>
    )
}
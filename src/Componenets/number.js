import React from 'react'
import {TfiHeadphone} from "react-icons/tfi"
import {AiOutlineLike} from "react-icons/ai"
import {BiBookAlt} from "react-icons/bi"
import {IoRibbonSharp} from "react-icons/io5"


export default function Number() {
  return (

    <>
    <div className='iconsimg  h-[70vh] w-[100%]  flex justify-center'>
        <div className='h-[100%] w-[80%] flex'>

        <div className="icons h-[100%] w-[80%] flex justify-center flex-col items-center gap-y-3">
            <div className='number-icon p-[4vh] rounded-full bg-[#ffc20b] text-center'>
                <TfiHeadphone className=' text-7xl text-white text-center'/>
            </div>
            <p className='text-4xl font-semibold'>190</p>
            <p className='text-[#ffc20b] text-xl font-bold'>Participants</p>
        </div>

        <div className="icons h-[100%] w-[80%]  flex justify-center flex-col items-center gap-y-3">
            <div className='number-icon p-[4vh] rounded-full bg-[#40cbb4] text-center'>
                <IoRibbonSharp className='text-7xl text-white text-center'/>
            </div>
            <p className='text-4xl font-semibold'>62</p>
            <p className='text-[#40cbb4] text-xl font-bold'>Participants</p>
        </div>

        <div className="icons h-[100%] w-[80%]  flex justify-center flex-col items-center gap-y-3">
            <div className='number-icon p-[4vh] rounded-full bg-[#4c35a9] text-center'>
                <AiOutlineLike className='text-7xl text-white text-center '/>
            </div>
            <p className='text-4xl font-semibold '>54</p>
            <p className='text-[#4c35a9] text-xl font-bold'>Certified Teacher</p>
        </div>

        <div className="icons h-[100%] w-[80%]  flex justify-center flex-col items-center gap-y-3">
            <div className='number-icon p-[4vh] rounded-full bg-[#e6275a] text-center'>
                <BiBookAlt className='text-7xl text-white text-center'/>
            </div>
            <p className='text-4xl font-semibold'>38</p>
            <p className='text-[#e6275a] text-xl font-bold'>Participants</p>
        </div>
      </div>
    </div>

    </>

  )
}
import React from 'react'
import {BsPlayCircle} from 'react-icons/bs'

export default function Video() {
    const [showVideo, setShowVideo] = React.useState(false);
  
    const handleVideoClick = () => {
      setShowVideo(true);
    };
  
    return (
      <div>
          <div className='vd h-[110vh] w-[100%] flex flex-col items-center justify-center text-center p-[1px] '>
             <div  className='w-[70%] mx-[25%] '>
                <h1 className="text-[#faaC1D] font-semibold text-lg ">WE’RE A LEADING INDUSTRY COMPANY</h1>
                <h1 className="text-white text-5xl w-[100%] mt-3 font-bold ">We Are Always at The <br/>Forefront of The Business Conference !</h1>
             </div>
              <div className='h-[55vh] w-[90vw] border mt-6 flex items-center justify-center'>                
                <button className='text-white text-6xl  p-3' onClick={handleVideoClick}><BsPlayCircle/></button>
                {showVideo && 
                
                <iframe width="910" height="100%"  className='ml-[-100px]' src="https://www.youtube.com/embed/hqUI1JFKiss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                }
              </div>
          </div>  
      </div>
    );
  }
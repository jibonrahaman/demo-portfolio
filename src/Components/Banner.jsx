import React from 'react'
import { BiRightArrowAlt } from 'react-icons/Bi';
import My from '../Components/Picture/My.png'
import { Link } from 'react-scroll';
function Banner() {
  return (
    <div className='h-screen  w-full bg-gradient-to-b from-black to-gray-700'>
        <div className='max-w-screen-lg  mx-auto items-center justify-center flex  flex-col h-full px-4 md:flex-row  sm:flex-row '>
            <div>
              <div className='w-[345px] sm:relative sm:left-[93px] md:left-0 md:w-[485px]'>
              <h2 className='sm:text-4xl  md:text-4xl lg:text-7xl text-white font-raleway'>I am Full Stack Devloper</h2>
                <p className='py-4 text-gray-400 max-w-md'>I have 8 years experience building and desgining software.
                    Currently,I love to work on web application using technologies like
                    React,Tailwind,Bootstrap,Javascript
                </p>
                <button className='group text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md mx-2 py-3 px-5 flex items-center cursor-pointer justify-center'>
                Portfolio
            <span className='group-hover:rotate-90 duration-200'><BiRightArrowAlt size={25}/></span>
              </button>
              </div>
            </div>
              
             <div>
       <img className='w-[58%] md:w-[74%] ml-[142px] md:ml-[50px]  bg-cyan-500 rounded-2xl ' src={My} alt={My} />
             </div>
        </div>
    </div>
  )
}

export default Banner
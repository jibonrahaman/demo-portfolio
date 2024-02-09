import React, { useState } from 'react'
import { FaBars ,FaTimes } from "react-icons/Fa";
import { Link } from 'react-scroll';
function Navbar() {
    const  links =[
        {
            id:1,
            link:"home"
        },{
            id:2,
            link:"about"
        },{
            id:3,
            link:"portfolio"
        },{
            id:4,
            link:"experience"
        },{
            id:5,
            link:"contact"
        },
    ]
    const [nav,setNav]=useState(false)
  return (
    <div className=' bg-black flex justify-between w-full h-20 text-white items-center px-4'>
        <div>
        <h1 className='font-vibes text-5xl ml-2 '>Jibon</h1>
        </div>
        <ul className='hidden md:flex mr-80'>
            {
                links.map(({id,link})=>
                <li key={id}  className='text-gray-500 px-6 cusor-pointer capitalize font-bold hover:scale-105 hover:text-white duration-200'>
        <Link to={link} smooth duration={500}> {link}</Link>
                </li>
                )
            }

        </ul>

        
        <div onClick={()=> setNav (!nav)} 
        className='text-gray-500 cusor-pointer z-10 pr-4  md:hidden  hover:scale-105 hover:text-white duration-200  '>
  {nav ?    <FaTimes  size={30}/> :    <FaBars  size={30}/>}
        </div>

        { nav &&    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black   to-gray-800'>
         
         {
                 links.map(({id,link})=>
                 <li key={id}  className='cursor-pointer px-4 text-4xl capitalize py-6  text-gray-500 hover:scale-105 hover:text-white duration-200'>
                 {link}
                 <Link onClick={()=>setNav(!nav)}
                to={link} smooth duration={500} >{link}</Link>
                 </li>
                 )
             }
             
             
         </ul>}
      
    </div>
  )
}

export default Navbar
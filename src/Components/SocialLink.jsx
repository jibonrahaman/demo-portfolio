import React from 'react'
import {BsGithub} from 'react-icons/Bs'
import {BsFillPersonCheckFill} from 'react-icons/Bs'
import {BsLinkedin} from 'react-icons/Bs'
import {FiMail} from 'react-icons/Fi'
function SocialLink() {
    const linkd=[
        {
            id:1,
            child:(
                <>
                Linkin
                <BsLinkedin  size={25}/>
                </>
            ),
            href:'https://www.linkedin.com/',
            style:'rounded-tr-md'
        },
         {
            id:2,
            child:(
                <>
                Github
                < BsGithub size={25}/>
                </>
            ),
            href:'https://github.com/jibonrahaman/',
            style:'rounded-tr-md'
        }, 
        {
            id:3,
            child:(
                <>
                Mail
                <FiMail  size={25}/>
                </>
            ),
            href:'mailto:manvirjibon@gmail.com',
            style:'rounded-tr-md'
        }, 
        {
            id:4,
            child:(
                <>
                Resume
                <BsFillPersonCheckFill  size={25}/>
                </>
            ),
            href:'',
            style:'rounded-tr-md'
        }

    ]


  return (

    <div className=' flex flex-col fixed top-[40%] left-0  '>
<ul>
    {
        linkd.map(({id,child,href,style })=>
<li key={id} className={'flex justify-center items-center w-40 h-14 bg-gray-500 text-2xl px-4 text-white rounded-md ml-[-100px] hover:ml-[5px] transition-all duration-300' }>
        <a href={href} className='flex justify-between items-center w-full'
         
        >
            
           {child}
        </a>
    </li>

        )
    }
    
</ul>
    </div>
  )
}

export default SocialLink
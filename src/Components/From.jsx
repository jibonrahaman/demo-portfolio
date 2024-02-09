import React from 'react'

function From() {
  return (
   <div className='bg-black    '>
     <form action="https://getform.io/f/6aa85274-334d-40f1-84e6-3d25cab526a8" method="POST"className='flex flex-col justify-center items-center w-full   '>
        <input type="text" 
         name='name'
         placeholder='Enter your name'
         className='bg-transparent border-2  rounded-md text-white'
        />  
         <input type="text" 
         name='email'
         placeholder='Enter your email'
         className='bg-transparent border-2 rounded-md text-white'
        />
      
        <textarea name="message" id="" cols="30" rows="10" className='bg-transparent border-2 rounded-md text-white focus:outline-none'>

        </textarea>
        <button className='bg-red-500 py-3 px-5 text-white rounded-md '>
            HELLO
        </button>
                </form>
   </div>
  )
}

export default From
import React from 'react';
import { NavLink } from 'react-router-dom';
const Form = ({name}) => {
    // console.log(props);
  return (
    <div className='bg-black'>
        <div className=' mt-4 md:mt-20 mx-[36px] md:mx-[55px] px-2 '>
            <p className=' text-white text-3xl md:text-4xl
              font-bold
            '>{name}</p>
        </div>
        <div className='mt-10 flex flex-col items-center gap-10 w-full h-[400px]  '>
            <input type="text" placeholder='Email or Phone number' 
            className=' w-50 md:w-80 p-2 md:p-4 rounded-md bg-white text-black
             border-0 outline-none text-md focus:border-2 focus:border-red-700
            '
            />
            <input type="password" placeholder='Password' 
            className='w-50 md:w-80 p-2 md:p-4 rounded-md bg-white text-black
            border-0 outline-none text-md focus:border-2 focus:border-red-700
           '
            />
            
            <div className='flex justify-center w-full mt-10  '>
                <button className='md:w-80 w-52 py-2 md:py-3 border-2 border-red-700 bg-red-700 text-white font-bold rounded'>Sign in</button>

            </div>
            <p className='text-white'>New to Netflix? <NavLink to= {"/signup"} className="hover:text-red-600 hover:font-bold">
                    {name}
                </NavLink>
            </p>

            
        </div>
    </div>
  )
}

export default Form
import React from 'react';
import { useDispatch } from 'react-redux';
import { language } from '../constant';
import { setLanguage } from '../store/Language';
const Language = () => {
    const dispatch =useDispatch();
    const handleLanguage=(e)=>{
            dispatch(setLanguage(e));
    }
  return (
    <div className='flex gap-4'>
        {language?.map((val)=><div className='flex text-white cursor-pointer ' id={val.en} onClick={()=>handleLanguage(val.en)}>{val.en}</div> )}
    </div>
  )
}

export default Language
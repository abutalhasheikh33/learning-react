import React from 'react'

const Card = ({label,date}) => {
   
    const newDate = new Date(date)
    
  return (
    
<div
  className="block w-full max-w-[18rem] rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-white">
  <ul className="w-full">
    <label className='flex justify-center'>{label}</label>
    <li
      className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
      {newDate.toString()}
    </li>
   </ul>
</div>
  )
}

export default Card
import React from 'react'

const Input = ({labelText,inputValue,setInputValue}) => {
  return (
    <>
     <label for="success" class="block mb-2 font-medium text-black-700 dark:text-black-500  text-xl">{labelText}</label>
  <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} id="success" class="bg-black-50 border border-black-500 text-white placeholder-black-700 dark:placeholder-black-500 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-black-500 " 
  placeholder={labelText} />
    </>
   
  )
}

export default Input
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import React, { useState } from 'react'

const TimePick = ({time,setTime}) => {

 
    
  return (
    <div className='custom_time'>
      <label className='flex justify-center p-3 bg-slate-800 text-white font-serif'>Select Time</label>
        <TimePicker onChange={setTime} value={time} />
    </div>
  
  )
}

export default TimePick
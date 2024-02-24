import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePicker = ({date,setDate}) => {
    
    
  return (
    <div>   
        <label className='flex justify-center p-3 bg-slate-800 text-white font-serif'>Select Date</label>
        <Calendar className="custom_date" style={{backgroudColor:"gray"}} value={date} onChange={setDate} />
    </div>
    
  )
}

export default DatePicker
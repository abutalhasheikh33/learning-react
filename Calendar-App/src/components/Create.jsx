import React, { useEffect, useState } from 'react'
import DatePicker from './DatePicker'
import TimePick from './TimePick'
import Toggle from './Toggle'
import Card from './Card'
import Input from './Input'
import axios from 'axios'

const Create = ({user,setUser}) => {
    const [toggle,setToggle] = useState(true)
    const [time,setTime] = useState('10:00')
    const [date,setDate] = useState(new Date())
    const [left,setLeft] = useState(new Date())
    const [right,setRight] = useState(new Date())
    const [eventName,setEventName] = useState("");
    const [eventDescription,setEventDescription] = useState("")
    const [token,setToken] = useState();
  
  //   useEffect(()=>{
  //     if(user&&typeof(user)!==undefined){
  //       axios.post('http://localhost:3000/api/createToken',{code:user.token}).then((response)=>{
  //           console.log("Api call "+response)
  //       }).catch((err)=>{
  //         console.log(err)
  //       })
  //   }
      
  // },[user])
    function formatDateToISOString(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}T`;
    }
    const concatDateTime = ()=>{
        const formattedDate =  formatDateToISOString(date);
        const formattedTime = time+':00';
        const formattedDateTime = formattedDate+formattedTime;
        
        return formattedDateTime;
 
     }
    useEffect(()=>{
        if(toggle == true){
          const result = concatDateTime();
          setLeft(result);
        }else{
            const result = concatDateTime();    
            setRight(result)
        }
    },[date,time,toggle])
    useEffect(()=>{
      const access_token = JSON.parse(localStorage.getItem('access_token'))
      setUser(access_token);
    },[])
    const createToken = ()=>{
      
      axios.post('http://localhost:3000/api/createToken',{code:user}).then((response)=>{
          console.log("Hi")
              console.log("Api call "+JSON.stringify(response.data.tokens.access_token))
              setToken(response.data.tokens.access_token)
          }).catch((err)=>{
            console.log(err)
          })
     }
   const createEvent = async (e)=>{
    e.preventDefault();
   
    const eventData = {
      summary: eventName, // The title or summary of the event
      description: eventDescription, // Description of the event
    
      start: {
        dateTime: left, // Start date and time of the event
        timeZone: 'Asia/Kolkata', // Timezone for the start time
      },
    
      end: {
        dateTime: right, // End date and time of the event
        timeZone: 'Asia/Kolkata', // Timezone for the end time
      },
    };
    
    try{
      //console.log(user.token)
      const result = await axios.post('https://www.googleapis.com/calendar/v3/calendars/primary/events', eventData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the access token in the authorization header
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
      })
      console.log(result)

    }catch(error){
      console.log(error)
    }
  }
   
  return (
    <>
    <div className='flex items-center h-1/2 justify-around mt-5 mb-5'>
    
    <DatePicker date={date} setDate={setDate} />    
    <TimePick time={time} setTime={setTime} />
    <Toggle toggle={toggle} setToggle={setToggle} />
    
    </div>
    <div className='flex items-center h-1/2 justify-around'>
      <div className='flex-col'>
      <Card label="Start date" date={left} />
      <Card label="End date" date= {right} />
      </div>
      
      <form onSubmit={(e)=>{createEvent(e)}} class="w-1/2 mb-6">
          <Input labelText="Event name" inputValue={eventName} setInputValue={setEventName} />
          <Input labelText="Event summary" inputValue={eventDescription} setInputValue={setEventDescription} />
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create A Event</button>
          <button type='button' onClick={createToken}>Create a token</button>
      </form>
      
    </div>
    
    </>
    
    
  )
}

export default Create
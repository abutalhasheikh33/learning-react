import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNum,setIsNum] = useState(false);
  const [isSpecial,setIsSpecial] = useState(false);
  const [password,setPassword] = useState('');
  const passwordRef = useRef(null)
  //Adjust the range bar and set the length - done
  //Create a password generator function and log it
    //Create a function-done
    // Create a state for storing the password
    //Algo for password generation
      //Create a string to loop over which consist of uppercase and lowercase english letters -done
      // Create a empty password variable
      //Check if number is allowed (create a state to check) -done
      //If allowed add numbers to that string
      //Check if special chars  is allowed (create a state to check)-done
      //If allowed add special chars to that string
      //Loop according to the length variable
      //choose a random index of that string 
      // add it to the password variable
      // set the password state
 const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = ""
    if(isNum) str+="0123456789";
    if(isSpecial) str+="#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    for (let i = 0; i < length; i++) {
      
      const index = Math.random()*(str.length)+1;
      const char = str.charAt(index);
      pass+=char;
      
    }
    setPassword(pass);
    
  },[length,isNum,isSpecial,setPassword])  

  const copyToClipboard = ()=>{
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  }
  useEffect(()=>{
    passwordGenerator()
  },[length,isNum,isSpecial])

  return (
    <>
      <div>
          
        <input value={password} placeholder='password'  className="bg-white text-black" type="text" ref={passwordRef} style={{width:"30vw"}} readOnly />
        <button onClick={copyToClipboard} className='mx-4'>Copy</button>
        <div className='mt-4'>
        <input min={8} max={100} onChange={(e)=>setLength(e.target.value)} className='mx-4 align-middle' type="range" name="length" id="" />
        <label htmlFor="">Numbers</label>
        <input onChange={()=>setIsNum((prev)=>!prev)}   className='mx-4' type="checkbox" name="numCheck" id="" />
        <label htmlFor="">Special Characters</label>
        <input onChange={()=>setIsSpecial((prev)=>!prev)}  className='mx-4' type="checkbox" name="charsCheck" id="" />
        </div>
        
        
        
      </div>
    </>
  )
}

export default App

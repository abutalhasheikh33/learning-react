import { useRef, useState } from 'react'
import Header from './components/Header/Header'

import { MovieProvider } from './context/MovieContext/context';
import Input from './components/Input/Input';
import Section from './components/Section/Section';
import Dropdown from './components/AutoComplete/Dropdown';
import { useApi } from './hooks/useApi';

function App() {
  
  const [leftTitle,setLeftTitle] = useState("")
  const [rightTitle,setRightTitle] = useState("")
  const setTitle = (data,side)=>{
    if(side == "left"){
      setLeftTitle(data)
    }
    else{
      setRightTitle(data)
    }
  }
   const [left,setLeft] = useState({});
   const [right,setRight] = useState({})
   
   
    const setData = (data,side)=>{
      if(side=="left"){
        setLeft(data)
      }else if(side=="right"){
        setRight(data)
      }  
    }
    
  return (
    <MovieProvider value={{left,right,setData,setTitle}}>
        <Header />
      <div className="container">
    
    <div className="columns">
     
     <div className='column'>

      <div id='left-autocomplete'>
      <Input title={leftTitle} side="left"  />
      <Dropdown title={leftTitle} side="left"   />
      </div>
      
      <Section />
      </div>
       
      

      <div className='column'>
      <div id='right-autocomplete'>
      <Input title={rightTitle} side="right"  />
      <Dropdown title={rightTitle}  side="right"  />
      </div>
      <Section />
      </div>
    
    </div>
    <div class={`column is-half notification is-primary tutorial ${leftTitle||rightTitle?'hide':''}`}>
      <h1 class="title">Search For a Movie on Both Sides</h1>
      <p class="subtitle">We will tell you which is best</p>
      </div>
      </div>
      
      
    </MovieProvider>
  )
}

export default App

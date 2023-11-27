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
   const [leftList,setLeftList] = useState([])
   const [rightList,setRightList] = useState([])
   
    const setData = (data,side)=>{
      if(side=="left"){
        setLeft(data)
      }else if(side=="right"){
        setRight(data)
      }  
    }
    const setList = (data,list)=>{
      if(list == "leftList"){
        setLeftList(data)
      }else if(list == "rightList"){
        setRightList(data)
      }
    }
  return (
    <MovieProvider value={{left,right,leftList,rightList,setData,setTitle,setList}}>
        <Header />
      <div className="container">
    
    <div className="columns">
     
     <div className='column'>

      <div id='left-autocomplete'>
      <Input title={leftTitle} side="left"  />
      <Dropdown title={leftTitle} side="left" list="leftList" listData={leftList} />
      </div>
      
      <Section />
      </div>
       
      

      <div className='column'>
      <div id='right-autocomplete'>
      <Input title={rightTitle} side="right"  />
      <Dropdown title={rightTitle}  side="right" list="rightList" listData={rightList} />
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

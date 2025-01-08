
import { useState } from 'react';
import Navbar from './components/Navbar'
import Toast from './components/Toast'
import {MovieContext} from './context/context'
import { OmdbApi } from './interfaces/OmdbApi';
function App() {
  const [apiData,setApiData] = useState<OmdbApi[] | undefined>(undefined);
  return (
    <div onClick={()=>setApiData(undefined)} className="h-screen bg-slate-500">
      <MovieContext.Provider value={{apiData,setApiData}}>
      <Navbar></Navbar>
      <Toast />
      </MovieContext.Provider>
      
    </div>
  )
}

export default App

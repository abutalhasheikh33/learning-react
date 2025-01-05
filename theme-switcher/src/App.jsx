import { useEffect, useState } from 'react'

import ThemeBtn from './components/ThemeBtn/ThemeBtn'
import Card from './components/Card/Card'
import { ThemeProvider } from './context/ThemeContext/context'

function App() {
  const [themeMode,setThemeMode] = useState("light");
  const darkMode = ()=>{
    setThemeMode("dark")
  }
  const lightMode = ()=>{
    setThemeMode("light")
  }
  useEffect(()=>{
    const html = document.querySelector("html");
    const body = document.querySelector("body")
    html.classList.remove("light","dark");
    html.classList.add(themeMode)
    body.classList.add(themeMode==="dark"?"dark:bg-gray-900":"white");
  },[themeMode])

  return (
   <ThemeProvider value={{themeMode,darkMode,lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
   </ThemeProvider>


  )
}

export default App

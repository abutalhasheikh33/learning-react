import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromChildren,Route } from 'react-router-dom'
import { About, Home, Layout,Contact,User,Github } from './components/index.js'
import "./index.css"
import { githubLoader } from './components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/user/:userId' element={<User />}/>
        <Route loader={githubLoader} path='/github' element={<Github />}/>
        
        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

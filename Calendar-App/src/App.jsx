

import './App.css'
import Signin from "./components/Signin"
import {createRoutesFromChildren,createBrowserRouter,Route,RouterProvider} from "react-router-dom"
import Create from "./components/Create"
import { useState } from "react"
import {GoogleOAuthProvider,useGoogleLogin} from "@react-oauth/google"
function App() {
  const [user,setUser] = useState()
 
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/">
       
        <Route path="" element={<Signin setUser={setUser} />} />
        <Route path="/createEvent" element={<Create user={user} setUser={setUser} />} />
       
      </Route>
    )
  )  

  return (
    <>
     <GoogleOAuthProvider clientId="740943179065-hnnmkes56fmr1bsufv9e76suj7tfr4e0.apps.googleusercontent.com" >
      <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  )
}

export default App

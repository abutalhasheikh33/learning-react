
import { useNavigate } from "react-router-dom";
import {useGoogleLogin} from "@react-oauth/google"
const Signin = ({setUser,setToken}) => {
  const navigate=useNavigate()
 

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      
      setUser({token:codeResponse.code})
      localStorage.setItem("access_token",JSON.stringify(codeResponse.code))
      navigate('/createEvent')
    },
    onError: error=> console.log(error),
    flow: 'auth-code',
  });

  return (
    <div className="flex justify-center items-center h-screen">
       
        <button onClick={()=>login()}>Sign in with google</button>
        
    </div>
  )
}

export default Signin
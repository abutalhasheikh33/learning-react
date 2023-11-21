import { useContext, useState } from "react"
import UserContext from "../../context/UserContext/context";


function Form() {
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const submitHandler = (e)=>{
        e.preventDefault()
        if(username&&password){
          setUser(username);
        }
    }


  return (
    <form onSubmit={submitHandler}>
        <input onChange={(e)=>setUserName(e.target.value)} value={username} type="text" name="username" placeholder='username' id="" />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" name="password" placeholder='password' id="" />
        <button>Submit</button>
    </form>
  )
}

export default Form
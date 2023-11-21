import { useState } from "react";
import UserContext from "./context";


// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children})=>{
    const [user,setUser] = useState("");
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider

import { useParams } from "react-router-dom";

export default function User(){
    const {userId} = useParams();
    return(
        <h2>User : {userId}</h2>
    )
}
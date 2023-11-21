import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    /* const [data,setData] = useState({});
    useEffect(()=>{
        fetch('https://api.github.com/users/abutalhasheikh33').then((res)=>{
            return res.json()
        }).then((res)=>[
            setData(res)
        ]);
    },[]) */
    const data = useLoaderData();
    return(
        <div className=" bg-gray-300" style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"5rem"}}>
           
            <img style={{height:"60vh",width:"30vw"}}  src={data.avatar_url} alt="" />
            <h1 className="p-5 font-bold text-xl underline">{data.name}</h1>
           <h1 className="font-bold text-xl">Repos:{data.public_repos}</h1>
        </div>
        
        
    )
}

export const githubLoader =async ()=>{
  const data = await fetch("https://api.github.com/users/abutalhasheikh33")
  return data.json()
}
import { useState,useEffect } from "react";



const useCurrency = (currency) => {
    //create a state to store data
    //call the api in a useeffect
    //add currency as a dependency
    //store the data from api in the data
    //extract the necessary information
  const [data,setData] = useState({});
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((apiData)=>{
        return apiData.json();
    }).then((apiData)=>{
        setData(apiData[currency])
    });
  },[currency])
  return data;
}

export default useCurrency
import { DocumentMagnifyingGlassIcon, Bars4Icon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"
import axios from "axios";

export interface OmdbApi  {
 
        Title: String;
        imdbID:String;
        Type: String;
        Poster:String;
        Year:String;

}


const Navbar = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const [inputValue,setInputValue] = useState("");
    const [apiData,setApiData] = useState<OmdbApi[] | undefined>(undefined);
    const [toggle,setToggle] = useState(false);
    useEffect(()=>{
        console.log(searchTerm)
        const fetchData = async ()=>{
            if(searchTerm != ""){
                const data:any = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apiKey=ac899545`);
                console.log(data,87)
                if(data?.data?.Search){
                    setApiData(data.data.Search);
                }
                
            }
        }
        fetchData();
    },[searchTerm])
  return (
    <>
    <div className="nav">
      <div className="flex items-center justify-between bg-red-600 text-white">
        <div className="m-4"><p className="sm:text-2xl font-bold text-purple-800">PW Skills</p></div>
        <ul className= "hidden sm:flex sm:w-48 justify-between font-semibold text-black lg:w-96">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <span onClick={()=>setToggle(!toggle)}>
        <Bars4Icon className="sm:hidden w-8 text-black" />
        </span>
        {toggle && (
        <div
          className="sm:hidden absolute left-[8rem] top-[3.5rem] z-10 bg-white rounded-lg shadow w-44 text-black max-w-fit"
        >
          <ul className="text-md font-semibold px-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
         </div>
        )}   
        <div>
            <div className="flex items-center justify-center">
                <input type="text" onChange={(e)=>{setInputValue(e.target.value)}} className="h-7 border-2 border-black focus:outline-none text-black" />
            <span onClick={()=>setSearchTerm(inputValue)}><DocumentMagnifyingGlassIcon  className="h-9 text-black w-12 relative right-3"></DocumentMagnifyingGlassIcon></span>
            </div>
            
            {apiData && <div className="bg-white absolute text-black right-6 w-52">
                <ul>
                    {
                        apiData.map((movie:OmdbApi)=>{
                             return <li className="flex p-2 border-2 border-black"><span><img className="w-12" src={String(movie.Poster)} alt="" /></span><p className=" ml-1">{movie.Title}</p></li>
                        })
                    }
                </ul>
            </div>}
        </div>
      </div>
    </div>
    </>
    
  
  )
}

export default Navbar
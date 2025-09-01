import { use } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

function Login(){
   const navigate = useNavigate()

  const [user,setUser] = useState("")
  const [pass,setPass] = useState("")
  const [error,setError] = useState("")

  function handleuser(event){
         setUser(event.target.value)
  }
  function handlepass(event){
        setPass(event.target.value)
  }
function check (){
    var logindetail = axios.get(`http://localhost:5000/?username=${user}&password=${pass}`)
    logindetail.then(function(data){
        if (data.data === true)
        {
            navigate("/landing")
        }
        else{

            setError("❌ You don’t have an account. Please sign up!")
            
        }
    })
}

    return(
        <div className=" h-screen w-full relative" >
            <img src="https://bit.ly/2E3scwW"
            alt="Netflix-style background"
            class="absolute inset-0 h-full w-full object-cover"
  />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute mr-6">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
             alt="Netflix Logo"
            class="w-32 sm:w-40 h-auto"
  />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4 ">
            <div className="bg-black/70 p-8 rounded-lg w-full max-w-md">
        <div    className="flex flex-col gap-6">
            <h1 className="text-2xl text-white font-bold text-center sm:text-left">Sign In</h1>
            <input 
            onChange={handleuser} name="username"  
            className="p-4 bg-transparent border  border-white text-white rounded-md" placeholder="Username"></input>
            <input 
            onChange={handlepass}  name="password"     
            className="p-4 bg-transparent border border-white text-white rounded-md"  placeholder="password"></input>
            <button 
            onClick={check} 
             className="bg-red-700 p-3 text-lg  border border-white text-white rounded-md">Login</button>
             {error && (
            <p className="text-red-500 font-semibold">{error}</p>
          )}
            <p className="text-white text-xl text-center  sm:text-left">New to Netflix?<Link to={"/signin"}  className="underline">Sign up now.</Link></p>
            <p className="text-white text-xs sm:text-sm text-center sm:text-left">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

        </div>
       </div>
        </div>
        </div>
    )
}
export default Login
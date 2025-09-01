import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




function Signin(){

      const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [msg, setMsg] = useState("");

async function handleSignin(e){
     e.preventDefault()
     try{
    const res =   await axios.post("http://localhost:5000/signin", {
        username: user,
        password: pass,
        confirmPassword: cpass,
})


      setMsg("✅ Account created successfully!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      if (err.response) {
        setMsg("❌ " + err.response.data);
      } else {
        setMsg("❌ Network error, please check backend is running");
      }
    }
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
            className="w-32 sm:w-40 h-auto"
  />
        </div>
        <div className=" absolute inset-0 flex items-center justify-center px-4 ">
          <div className="bg-black/70 p-8 rounded-lg w-full max-w-md">
        <form onSubmit={handleSignin} className="flex flex-col gap-6">
            <h1 className="text-2xl text-white font-bold text-center sm:text-left">Sign In</h1>
            <input 
             onChange={(e) => setUser(e.target.value)}
            className="p-4 bg-transparent border  border-white text-white rounded-md" placeholder="Username"></input>
            <input 
            type="password"
            onChange={(e) => setPass(e.target.value)}
            className="p-4 bg-transparent border border-white text-white rounded-md"  placeholder="passward"></input>
            <input 
            type="password"
            onChange={(e) => setCpass(e.target.value)}
            className="p-4 bg-transparent border border-white text-white rounded-md"  placeholder="conform passward"></input>
            
            <button className="bg-red-700 p-3 text-lg  border border-white text-white rounded-md">sign up</button>
            
            
            <p className="text-white text-xs sm:text-sm text-center sm:text-left">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
              {msg && <p className="text-green-500 font-semibold text-center">{msg}</p>}
            
        </form>
       </div>
        </div>
        </div>
    )
    

}
export default Signin
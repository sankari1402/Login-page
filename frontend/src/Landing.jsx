function Landing (){
    return(
        <div className="relative h-screen w-full">
        <div className="bg-black flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 fixed top-0 left-0 w-full z-50">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
             alt="Netflix Logo"
            className="w-28 sm:w-40 h-auto mx-auto sm:mx-0"
  />
  <div className="text-white flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-3 sm:mt-0 text-center sm:text-left">
    <h1 className="text-sm sm:text-lg font-semibold">UNLIMITED TV SHOWS & MOVIES</h1>
    <button className="bg-red-700 hover:bg-red-800 border w-32 sm:w-48 rounded-md py-2 text-sm sm:text-base mx-auto sm:mx-0">Join now</button>
  </div>
        </div>
        <div>
             <img src="https://bit.ly/2E3scwW"
            alt="Netflix-style background"
            class="absolute inset-0 h-full w-full object-cover"
  />
  
        </div>
        
            
        
        
        </div>
        
    )
}
export default Landing
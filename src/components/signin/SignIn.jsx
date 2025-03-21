import React from "react";

function SignIn() {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
      <div className="flex justify-center mr-96 h-auto sm:h-auto">
        <form onSubmit={handleSubmit}>
          <div className="text-white  justify-items-center absolute gap-5 mt-24 z-2 grid grid-cols-1 border-2 border-gray-800  bg-gray-900 rounded-lg p-10">
            <h1 className="text-3xl">Starlight <span className="text-red-700"> Studios</span></h1>
            <input type="text" placeholder="Email" className="border-none bg-gray-800 rounded-sm pl-5 h-10 w-96"/>
            <input type="password" placeholder="Password"  className="border-none bg-gray-800 rounded-sm pl-5 h-10 w-96" />
            <div className="flex-row">
              <input type="checkbox" /> <label htmlFor="#">Remember Me</label>
            </div>
            <button  className="border-2 border-amber-300 rounded-lg p-2 w-60 ">SIGN IN</button>
            <p className="text-xs">OR</p>
            <button className="bg-blue-600 rounded-lg w-60 p-2 hover:bg-white hover:text-blue-600 duration-500 cursor-pointer">Sign in with F</button>
            <button className="bg-sky-400 rounded-lg w-60 p-2 hover:bg-white hover:text-sky-400 duration-500 cursor-pointer">Sign in with F</button>
            <button className="bg-orange-700 rounded-lg w-60 p-2 hover:bg-white hover:text-orange-700 duration-500 cursor-pointer">Sign in with F</button>
            
            <p>Don't have an account? <span className="text-amber-300">Sign Up!</span></p>
            <p className="text-amber-300">Forgot password?</p>
            
          </div>
        </form>
      </div>
      <div className="h-auto  ">
        <div>
          <img src="/fallBackImage.jpg" alt="image" className="opacity-35" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;

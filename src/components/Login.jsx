const Login = () => {
  return (
    <div className="w-11/12 flex">
     <div className="6/12">
      <img src="/SideImage.png" alt="" className="w-[805px] h-[781px]"/>
     </div>
     <div className="w-4/12 flex items-center justify-end">
    
     <div>
     <h1>Create an account</h1>

     <h4>Enter your details below</h4>
     
     <form action="" className="flex flex-col">
     <input type="text" placeholder="Name" />
     <input type="text" placeholder= "Email or Phone Number" />
     <input type="password" placeholder="Password" />
     <button>Create Account</button>
     <button>Sign up with Google</button>
     <span>Already have account ? <a>Login</a></span>
     </form>
     </div>
     </div>
    </div>
  )
}

export default Login
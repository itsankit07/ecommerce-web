const Login = () => {
  return (
    <div className="w-11/12 flex">
      <div className="6/12">
        <img
          src="/SideImage.png"
          alt=""
          className="w-[805px] h-[781px] mt-[60px] mb-[140px]"
        />
      </div>
      <div className="w-4/12 flex items-center py-[125px] justify-end">
        <div className="flex flex-col gap-12">
          <div>
            <h1 className="w-[339px] tracking-widest text-3xl h-[30px] font-medium mb-6 ">
              Create an account
            </h1>

            <p className="text-sm font-medium">Enter your details below</p>
          </div>
          <form action="" className="flex flex-col  gap-10 mt-3">
            <input
              className="border-b-[1.5px] border-black"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-b-[1.5px] border-black"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className="border-b-[1.5px] border-black"
              type="password"
              placeholder="Password"
            />

            <button
              className="bg-red-500 py-3 px-4 text-white rounded-md"
              type="button"
            >
              Create Account
            </button>
            <button className="border-black border-2 py-3">
              Sign up with Google
            </button>
            <span className="flex justify-center items-center">
              Already have account ? <a>Login</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

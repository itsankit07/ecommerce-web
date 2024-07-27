import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-11/12 flex flex-wrap">
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
            {!isLogin ? (
              <h1 className="w-[339px] tracking-widest text-3xl h-[30px] font-medium mb-6 ">
                Create an account
              </h1>
            ) : (
              <h1 className="w-[339px] tracking-widest text-3xl h-[30px] font-medium mb-6 ">
                Login to exclusive
              </h1>
            )}
            <p className="text-sm font-medium">Enter your details below</p>
          </div>
          <form action="" className="flex flex-col  gap-10 mt-3">
            {!isLogin && (
              <input
                className="border-b-[1.5px] border-black outline-none"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              className="border-b-[1.5px] border-black outline-none"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className="border-b-[1.5px] border-black outline-none"
              type="password"
              placeholder="Password"
            />

            {isLogin && (
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-500 py-3 px-4 text-white rounded-md"
                  type="button"
                >
                  Login
                </button>
                <p className="text-red-500">Forgot Password?</p>
              </div>
            )}

            {!isLogin && (
              <button
                className="bg-red-500 py-3 px-4 text-white rounded-md"
                type="button"
              >
                Create Account
              </button>
            )}

            {!isLogin && (
              <button className="border-black border-2 py-3">
                Sign up with Google
              </button>
            )}

            {!isLogin && (
              <span className="flex justify-center items-center">
                Already have account ?{" "}
                <a onClick={handleLogin} className="cursor-pointer">
                  Login
                </a>
              </span>
            )}
            {isLogin && (
              <span className="flex justify-center items-center">
                Do not have a account...?{" "}
                <a onClick={handleLogin} className="cursor-pointer">
                  Create Here
                </a>
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

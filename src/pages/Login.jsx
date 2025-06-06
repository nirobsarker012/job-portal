import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";
import loginLottie from "../assets/Login - 1748805536007.json";
import { AuthContext } from "../utils/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state || "/";
  const provider = new GoogleAuthProvider();
  const { loginUser, singIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    // Sing With User
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        navigate(form);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle googleSignIn
  const handleGoogleSign = () => {
    singIn(provider)
      .then((result) => {
        navigate(form);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="container font-plus">
      <div className="flex items-center gap-4 justify-center py-40">
        <div className="max-w-[600px] p-3">
          {/* Login Title */}
          <div className="text-center">
            <span className="text-blue-700">Welcome back!</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#05264e]">
              Member Login
            </h2>
            <p className="text-[#6c757d]">
              Access to all features. No credit card required.
            </p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <button
              onClick={handleGoogleSign}
              className=" w-full inline-flex items-center justify-center gap-1 hover:text-blue-700 py-3 cursor-pointer border border-gray-500/30 rounded-[5px]"
            >
              <FcGoogle size={28} />
              Sign up with Google
            </button>
          </div>
          <div className="flex justify-between gap-1.5 items-center">
            <div className="w-30 h-0.5 bg-gray-700/20"></div>
            <div className="">Or Continue with</div>
            <div className="w-30 h-0.5 bg-gray-700/20"></div>
          </div>
          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col space-y-2">
            {/* Email */}
            <label>Email*</label>
            <input
              className="py-3 px-2 border border-gray-500/30 rounded-[5px]"
              type="email"
              name="email"
              placeholder="stevenjob@gmail.com"
            />
            {/* User */}
            <label>Username*</label>
            <input
              className="py-3 px-2 border border-gray-500/30 rounded-[5px]"
              name="user"
              type="text"
            />
            {/* Pass */}
            <label>Password*</label>
            <input
              className="py-3 px-2 border border-gray-500/30 rounded-[5px]"
              name="password"
              type="password"
              placeholder="**********"
            />
            {/*  */}
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span>Remember me</span>
              </div>
              <a href="" className="">
                Forgot Password
              </a>
            </div>
            {/* btn */}
            <input
              className="w-full bg-[#05264e] py-3 rounded-[5px] text-white hover:bg-blue-800 transition-all duration-300"
              type="submit"
              value="Login"
            />
            <div className="flex items-center justify-center ">
              <span className="">
                Don't have an account?<Link to={"/register"}>Sign Up</Link>
              </span>
            </div>
          </form>
        </div>
        {/* Lottie image */}
        <div className="w-[300px] hidden lg:block">
          <Lottie animationData={loginLottie} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Login;

import { Mail, Lock, Eye, ArrowRight, Zap } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/Authcontext";
import { useForm } from 'react-hook-form';

const Login = () => {

  const {login}= useContext(AuthContext);
  const {register,reset,handleSubmit,formState:{errors}}=useForm({
    mode:"onChange"
  })

  const onLogin=(data)=>{
    login(data.email,data.password)
  }
  

  return (
    <div className="min-h-screen bg-black text-white lg:grid lg:grid-cols-2">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-between p-14 border-r border-zinc-800">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-lime-400 flex items-center justify-center">
            <Zap className="h-6 w-6 text-black fill-black" />
          </div>

          <h1 className="text-4xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Hero Text */}
        <div className="max-w-xl">
          <p className="uppercase tracking-widest text-lime-400 font-semibold mb-6">
            Welcome Back
          </p>

          <h2 className="text-7xl font-bold leading-tight">
            Shop the future.
            <br />
            <span className="text-lime-400">Today.</span>
          </h2>

          <p className="mt-8 text-xl text-zinc-500 leading-relaxed">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5">
          <div className="rounded-3xl border border-zinc-700 p-8 text-center">
            <h3 className="text-4xl font-bold text-lime-400">20K+</h3>
            <p className="text-zinc-500 mt-2">Products</p>
          </div>

          <div className="rounded-3xl border border-zinc-700 p-8 text-center">
            <h3 className="text-4xl font-bold text-lime-400">50K+</h3>
            <p className="text-zinc-500 mt-2">Users</p>
          </div>

          <div className="rounded-3xl border border-zinc-700 p-8 text-center">
            <h3 className="text-4xl font-bold text-lime-400">4.9★</h3>
            <p className="text-zinc-500 mt-2">Rating</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-10 shadow-2xl">
          <h2 className="text-5xl font-bold">Sign in</h2>

          <p className="mt-3 text-zinc-500 text-lg">
            Enter your credentials to continue
          </p>

         <form onSubmit={handleSubmit(onLogin)} className="mt-10 space-y-6">
            {/* Email */}
            <div className="flex items-center rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4">
              <Mail className="text-zinc-500" size={20} />
              <input {...register("email",{
                required:"email is required",
                pattern:{
                  value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:"invalid email format"
                }
              })}
                type="email"
                placeholder="Email address"
                className="ml-4 flex-1 bg-transparent outline-none placeholder:text-zinc-500"
              />
              
            </div>
         {errors.email && (
  <p className="mt-2 rounded-xl border border-red-500/30 bg-zinc-900 px-4 py-3 text-sm font-medium text-red-400 shadow-lg shadow-red-500/5">
    {errors.email.message}
  </p>
)}

            {/* Password */}
            <div className="flex items-center rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4">
              <Lock className="text-zinc-500" size={20} />

              <input {...register("password",{
                required:"password is required",
                minLength: {
      value: 4,
      message: "Password must be at least 4 characters"
    },
    
              })}
                type="password"
                placeholder="Password"
                className="ml-4 flex-1 bg-transparent outline-none placeholder:text-zinc-500"
              />

              <Eye className="text-zinc-500 cursor-pointer" size={20} />
            </div>
            {errors.password && (<p className="mt-2 rounded-xl border border-red-500/30 bg-zinc-900 px-4 py-3 text-sm font-medium text-red-400 shadow-lg shadow-red-500/5">{errors.password.message}</p>)}

            {/* Button */}
            <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 py-4 text-xl font-bold text-black transition hover:opacity-90">
              Sign in
              <ArrowRight size={22} />
            </button>

            {/* Footer */}
            <p className="text-center text-zinc-500">
              Don't have an account?{" "}
             <Link
  to="/signup"
  className="font-semibold text-lime-400 hover:underline"
>
  Create one
</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
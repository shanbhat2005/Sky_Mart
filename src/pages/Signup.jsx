import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { Zap, User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../context/Authcontext";

export default function Signup() {

  const {register,handleSubmit,reset,formState:{errors}}=useForm()

  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const{signUp}=useContext(AuthContext);

  const onSubmit=(data)=>{
if(data.password!==data.confirm){
alert("password do not match");
return 
}
signUp(data.name,data.email,data.password)
reset();
  }
  

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center shrink-0">
          <Zap size={24} className="text-black fill-black" />
        </div>
        <span className="text-2xl font-extrabold text-white tracking-tight">
          Sky<span className="text-lime-400">Mart</span>
        </span>
      </div>

      <div className="w-full max-w-md mt-10 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-2xl font-extrabold text-white">Create account</h2>
        <p className="text-zinc-500 text-sm mt-1">Join SkyMart and start shopping</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          {/* Full name */}
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
            />
            <input {...register("name",{
             required:"name is required ",
             minLength:{
              value:4,
              message:"at least 4 characters are required "
             },
             maxLength:{
              value:12,
              message:"at least 12 characters are required"
             }
            })}

              type="text"
              placeholder="Full name"
              
              className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800 text-zinc-200
                placeholder:text-zinc-500 py-3.5 pl-11 pr-4
                focus:outline-none focus:ring-2 focus:ring-lime-400/60 focus:border-lime-400/60
                transition-colors"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
            />
            <input {...register("email",{
              required:"email is required",
              pattern:{
                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:"invalid email "
              }
            })}

              type="email"
              placeholder="Email address"
              
              
              className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800 text-zinc-200
                placeholder:text-zinc-500 py-3.5 pl-11 pr-4
                focus:outline-none focus:ring-2 focus:ring-lime-400/60 focus:border-lime-400/60
                transition-colors"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
            />
            <input {...register("password",{
              required:"password is required",
              minLength:{
                value:4,
                message:"at least 4 characters are required"
              }
            })}

              type={showPassword ? "text" : "password"}
              placeholder="Password (min 4 chars)"
              
              className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800 text-zinc-200
                placeholder:text-zinc-500 py-3.5 pl-11 pr-11
                focus:outline-none focus:ring-2 focus:ring-lime-400/60 focus:border-lime-400/60
                transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm password */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
            />
            <input {...register("confirm",{
              required:"confirmation password is required"
            })}

              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800 text-zinc-200
                placeholder:text-zinc-500 py-3.5 pl-11 pr-11
                focus:outline-none focus:ring-2 focus:ring-lime-400/60 focus:border-lime-400/60
                transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
              tabIndex={-1}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2
              bg-lime-400 text-black hover:bg-lime-300 transition-all active:scale-[0.98]"
          >
            Create Account
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-zinc-500 text-sm mt-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-lime-400 font-semibold hover:underline">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
}
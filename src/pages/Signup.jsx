import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import {
  Zap,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Auth } from "../context/Authcontext";

export default function Signup() {
  const navigate = useNavigate();

let {setSkyMartUsers,skyMartUsers}=useContext(Auth)

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode:"onChange"
  });

  const password = watch("password");

  const onSubmit = (data) => {

let user=[...skyMartUsers,data]
    setSkyMartUsers(user)
    localStorage.setItem("skyMartUsers",JSON.stringify(user))
    localStorage.removeItem("skymart_users")
    console.log(data);


    reset();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center">
          <Zap size={24} className="text-black fill-black" />
        </div>

        <span className="text-2xl font-extrabold text-white">
          Sky<span className="text-lime-400">Mart</span>
        </span>
      </div>

      <div className="w-full max-w-md mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
        <h2 className="text-2xl font-extrabold text-white">
          Create account
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Join SkyMart and start shopping
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "At least 4 characters are required",
                  },
                  maxLength: {
                    value: 12,
                    message: "Maximum 12 characters allowed",
                  },
                })}
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800 py-3.5 pl-11 pr-4 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400/60"
              />
            </div>

            {errors.name && (
              <p className="mt-1 text-sm text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800 py-3.5 pl-11 pr-4 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400/60"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "At least 4 characters are required",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800 py-3.5 pl-11 pr-11 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400/60"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                {...register("confirm", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full rounded-xl bg-zinc-900/70 border border-zinc-800 py-3.5 pl-11 pr-11 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400/60"
              />

              <button
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.confirm && (
              <p className="mt-1 text-sm text-red-400">
                {errors.confirm.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 py-3.5 font-bold text-black hover:bg-lime-300"
          >
            Create Account
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <p 
           onClick={()=> navigate("/")}
            
            className="font-semibold text-lime-400 hover:underline cursor-pointer"
          >
            Sign in
          </p>
        </p>
      </div>
    </div>
  );
}
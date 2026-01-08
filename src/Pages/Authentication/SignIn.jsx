import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import { login } from "../../ContextAPI/Authenticaltion";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberAccount: false,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };
      const res = await login(payload);
      // Store the entire response data in localStorage
      if (res.data) {
        localStorage.setItem("authData", JSON.stringify(res.data));
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      // Redirect to home
      navigate("/");
    } catch (err) {
      setError(err?.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('../../../public/contacthero.png')" }}
        />
      </div>

      {/* Form Overlay - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-lg space-y-6 p-8 backdrop-blur-md bg-white/20 border border-white/30 shadow-xl">
          <div className="text-center">
            <Link to="/">
              <div className=" flex items-center justify-center mx-auto mb-4">
                <img src={logo} alt="" />
              </div>
            </Link>
            <h2 className="text-3xl text-[#fff] text-[24px]">Sign In</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="">
            {error && (
              <div className="mb-4 text-center text-red-500 font-semibold">
                {error}
              </div>
            )}
            <div className="mb-16">
              <label className="block text-[#000000] text-[18px]  mb-1">
                Email Address
              </label>
              <input
                type="email"
                className={`input input-bordered h-[61px] ps-5 w-full bg-transparent border border-white text-[16px] text-[#fff] placeholder:text-white  ${
                  errors.email ? "input-error" : ""
                }`}
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[#000] text-[18px] ">Password</label>
                {/* <button
                  type="button"
                  className="text-sm italic hover:underline text-[#516F90]"
                  onClick={() => navigate("/forget-password")}
                >
                  Forgot Password?
                </button> */}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered h-[61px] ps-5 text-[16px] text-[#fff]  w-full bg-transparent border border-white placeholder:text-white pr-10 ${
                    errors.password ? "input-error" : ""
                  }`}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* <div className="flex items-center gap-2 pt-3 pb-10">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox rounded-[3px] h-[20px] w-[20px] bg-[#FFE4DF] border-none checked:bg-[#FFE4DF]"
              />
              <p className="italic text-base text-[#7C97B6]">
                Remember Password
              </p>
            </div> */}

            {/* Submit Button */}
            <div className="flex items-center justify-center mt-16">
              <button
                type="submit"
                className="h-[58px] w-[252px] bg-[#000000] text-[20px] hover:bg-white  text-white text-lg hover:text-black border-2 border-black flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm mr-2"></span>
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>

            {/* Sign Up Link */}
            {/* <div className="text-center mt-6">
              <p className="text-[#7C97B6] text-[16px]">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="text-[#516F90] hover:underline font-semibold"
                >
                  Sign Up
                </button>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

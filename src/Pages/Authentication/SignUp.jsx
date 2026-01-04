import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import { signup } from "../../ContextAPI/Authenticaltion";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password_confirm: "",
      name: "",
      phone_number: "",
      gender: "",
      address: "",
    },
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      const payload = {
        email: data.email,
        password: data.password,
        password_confirm: data.password_confirm,
        name: data.name,
        phone_number: data.phone_number,
        gender: data.gender,
        address: data.address,
      };
      await signup(payload);
      navigate("/otp-verification", { state: { email: data.email } });
    } catch (err) {
      setError(err?.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('../../../public/contacthero.png')" }}
        >
          <div className="absolute inset-0" />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center">
            <Link to="/">
              <div className="rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={logo} alt="" />
              </div>
            </Link>
            <h2 className="text-3xl text-[#000000] text-[24px]">Sign Up</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && (
              <div className="mb-4 text-center text-red-500 font-semibold">
                {error}
              </div>
            )}
            {/* Name */}
            <div>
              <label className="block text-[#000000] text-[18px] mb-1">
                Full Name
              </label>
              <input
                type="text"
                className={`input input-bordered h-[61px] rounded-[18px] ps-5 w-full bg-[#f3f3f3] border-none text-[16px] text-[#000000] ${
                  errors.name ? "input-error" : ""
                }`}
                placeholder="John Doe"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#000000] text-[18px] mb-1">
                Email Address
              </label>
              <input
                type="email"
                className={`input input-bordered h-[61px] rounded-[18px] ps-5 w-full bg-[#f3f3f3] border-none text-[16px] text-[#000000] ${
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

            {/* Phone Number */}
            <div>
              <label className="block text-[#000000] text-[18px] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className={`input input-bordered h-[61px] rounded-[18px] ps-5 w-full bg-[#f3f3f3] border-none text-[16px] text-[#000000] ${
                  errors.phone_number ? "input-error" : ""
                }`}
                placeholder="+1234567890"
                {...register("phone_number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                    message: "Invalid phone number format",
                  },
                })}
              />
              {errors.phone_number && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.phone_number.message}
                </p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-[#000000] text-[18px] mb-1">
                Gender
              </label>
              <select
                className={`select select-bordered h-[61px] rounded-[18px] ps-5 w-full bg-[#f3f3f3] border-none text-[16px] text-[#000000] ${
                  errors.gender ? "select-error" : ""
                }`}
                {...register("gender", {
                  required: "Gender is required",
                })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-[#000000] text-[18px] mb-1">
                Address
              </label>
              <textarea
                className={`textarea textarea-bordered rounded-[18px] ps-5 pt-4 w-full bg-[#f3f3f3] border-none text-[16px] text-[#000000] min-h-[100px] ${
                  errors.address ? "textarea-error" : ""
                }`}
                placeholder="Your address"
                {...register("address", {
                  required: "Address is required",
                  minLength: {
                    value: 10,
                    message: "Address must be at least 10 characters",
                  },
                })}
              />
              {errors.address && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#000] text-[18px] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered h-[61px] rounded-[18px] ps-5 text-[16px] text-[#000] w-full bg-[#f3f3f3] border-none pr-10 ${
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

            {/* Confirm Password */}
            <div>
              <label className="block text-[#000] text-[18px] mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`input input-bordered h-[61px] rounded-[18px] ps-5 text-[16px] text-[#000] w-full bg-[#f3f3f3] border-none pr-10 ${
                    errors.password_confirm ? "input-error" : ""
                  }`}
                  placeholder="••••••••"
                  {...register("password_confirm", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password_confirm && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password_confirm.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="h-[58px] w-[252px] bg-[#000000] text-[20px] hover:bg-white rounded-[18px] text-white text-lg hover:text-black border-2 border-black flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm mr-2"></span>
                    Signing Up...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center mt-4">
              <p className="text-[#7C97B6] text-[16px]">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signin")}
                  className="text-[#516F90] hover:underline font-semibold"
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

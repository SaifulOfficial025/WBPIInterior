import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import { passwordResetRequest } from "../../ContextAPI/Authenticaltion";

export default function ForgetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      await passwordResetRequest({ email: data.email });
      navigate("/forget-password-otp", { state: { email: data.email } });
    } catch (err) {
      setError(
        err?.message || "Failed to send password reset email. Please try again."
      );
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
            <h2 className="text-3xl text-[#000000] text-[24px] mb-2">
              Forgot Password?
            </h2>
            <p className="text-[#7C97B6] text-[16px] px-8">
              Enter your email address and we'll send you a verification code to
              reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="">
            {error && (
              <div className="mb-4 text-center text-red-500 font-semibold">
                {error}
              </div>
            )}
            <div className="mb-16">
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

            {/* Submit Button */}
            <div className="flex items-center justify-center mt-16">
              <button
                type="submit"
                className="h-[58px] w-[252px] bg-[#000000] text-[20px] hover:bg-white rounded-[18px] text-white text-lg hover:text-black border-2 border-black flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm mr-2"></span>
                    Sending...
                  </>
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>

            {/* Back to Sign In Link */}
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => navigate("/signin")}
                className="text-[#7C97B6] hover:underline text-[16px]"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

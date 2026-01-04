import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import { resetPassword } from "../../ContextAPI/Authenticaltion";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const accessToken = location.state?.access_token || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const newPassword = watch("new_password");

  // Redirect if no access token
  if (!accessToken) {
    navigate("/forget-password");
    return null;
  }

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      const payload = {
        access_token: accessToken,
        new_password: data.new_password,
        confirm_password: data.confirm_password,
      };
      await resetPassword(payload);
      // After successful password reset, navigate to signin
      navigate("/signin");
    } catch (err) {
      setError(err?.message || "Password reset failed. Please try again.");
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
              Reset Password
            </h2>
            <p className="text-[#7C97B6] text-[16px] px-8">
              Enter your new password below
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="">
            {error && (
              <div className="mb-4 text-center text-red-500 font-semibold">
                {error}
              </div>
            )}
            {/* New Password */}
            <div className="mb-8">
              <label className="block text-[#000] text-[18px] mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered h-[61px] rounded-[18px] ps-5 text-[16px] text-[#000] w-full bg-[#f3f3f3] border-none pr-10 ${
                    errors.new_password ? "input-error" : ""
                  }`}
                  placeholder="••••••••"
                  {...register("new_password", {
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                      message:
                        "Password must contain at least one uppercase, one lowercase, and one number",
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
              {errors.new_password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.new_password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-8">
              <label className="block text-[#000] text-[18px] mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`input input-bordered h-[61px] rounded-[18px] ps-5 text-[16px] text-[#000] w-full bg-[#f3f3f3] border-none pr-10 ${
                    errors.confirm_password ? "input-error" : ""
                  }`}
                  placeholder="••••••••"
                  {...register("confirm_password", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
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
              {errors.confirm_password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>

            {/* Password Requirements */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-[14px] text-[#7C97B6] mb-2 font-semibold">
                Password must contain:
              </p>
              <ul className="text-[14px] text-[#7C97B6] space-y-1 list-disc list-inside">
                <li>At least 6 characters</li>
                <li>One uppercase letter</li>
                <li>One lowercase letter</li>
                <li>One number</li>
              </ul>
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
                    Resetting...
                  </>
                ) : (
                  "Reset Password"
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

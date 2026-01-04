import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import {
  verifySignup,
  resendSignupOTP,
} from "../../ContextAPI/Authenticaltion";

export default function OTPVerification() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [resendError, setResendError] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp_code: "",
    },
  });

  useEffect(() => {
    if (!email) {
      // Redirect to signup if no email is provided
      navigate("/signup");
      return;
    }

    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer, email, navigate]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      const payload = {
        email: email,
        otp_code: data.otp_code,
      };
      await verifySignup(payload);
      navigate("/signin");
    } catch (err) {
      setError(err?.message || "OTP verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;
    setResendLoading(true);
    setResendError("");
    try {
      await resendSignupOTP({ email });
      setCanResend(false);
      setResendTimer(60);
    } catch (err) {
      setResendError(err?.message || "Failed to resend OTP. Please try again.");
    } finally {
      setResendLoading(false);
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
              OTP Verification
            </h2>
            <p className="text-[#7C97B6] text-[16px]">
              We've sent a verification code to
            </p>
            <p className="text-[#000000] text-[16px] font-semibold">{email}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="">
            {error && (
              <div className="mb-4 text-center text-red-500 font-semibold">
                {error}
              </div>
            )}
            <div className="mb-8">
              <label className="block text-[#000000] text-[18px] mb-1">
                Enter OTP Code
              </label>
              <input
                type="text"
                className={`input input-bordered h-[61px] rounded-[18px] ps-5 w-full bg-[#f3f3f3] border-none text-[16px] text-[#000000] text-center tracking-widest ${
                  errors.otp_code ? "input-error" : ""
                }`}
                placeholder="000000"
                maxLength={6}
                {...register("otp_code", {
                  required: "OTP code is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "OTP must be 6 digits",
                  },
                })}
              />
              {errors.otp_code && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.otp_code.message}
                </p>
              )}
            </div>

            {/* Resend OTP */}
            <div className="text-center mb-8">
              {canResend ? (
                <>
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="text-[#516F90] hover:underline text-[16px] font-semibold"
                    disabled={resendLoading}
                  >
                    {resendLoading ? "Resending..." : "Resend OTP"}
                  </button>
                  {resendError && (
                    <div className="mt-2 text-red-500 text-sm">
                      {resendError}
                    </div>
                  )}
                </>
              ) : (
                <p className="text-[#7C97B6] text-[16px]">
                  Resend OTP in{" "}
                  <span className="font-semibold">{resendTimer}s</span>
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
                    Verifying...
                  </>
                ) : (
                  "Verify OTP"
                )}
              </button>
            </div>

            {/* Back to Sign Up Link */}
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-[#7C97B6] hover:underline text-[16px]"
              >
                Back to Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

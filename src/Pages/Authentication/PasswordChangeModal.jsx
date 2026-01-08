import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import { changePassword } from "../../ContextAPI/Profile";

function PasswordChangeModal({ isOpen, onClose }) {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSaving(true);
    setError("");
    setSuccessMessage("");
    try {
      if (data.new_password !== data.confirm_password) {
        setError("New password and confirm password do not match");
        setIsSaving(false);
        return;
      }
      await changePassword({
        old_password: data.old_password,
        new_password: data.new_password,
        confirm_password: data.confirm_password,
      });
      setSuccessMessage("✓ Password changed successfully!");
      reset();
      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 2000);
    } catch (err) {
      setError(err?.message || "Failed to change password");
    } finally {
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    setError("");
    setSuccessMessage("");
    reset();
    onClose();
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white   shadow-2xl max-w-md w-full my-8">
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-6 flex items-center justify-between sticky top-0">
          <h1 className="text-xl font-light text-black">Change Password</h1>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-200   transition-colors"
          >
            <FaTimes className="text-gray-600 text-lg" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-8 space-y-5">
          {successMessage && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200   text-green-700 font-semibold">
              {successMessage}
            </div>
          )}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200   text-red-700 font-semibold">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Old Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("old_password", {
                required: "Old password is required",
              })}
              className={`w-full px-3 py-2 border-2   text-sm focus:outline-none transition-colors ${
                errors.old_password
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-black"
              }`}
              placeholder="Enter your old password"
            />
            {errors.old_password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.old_password.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("new_password", {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full px-3 py-2 border-2   text-sm focus:outline-none transition-colors ${
                errors.new_password
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-black"
              }`}
              placeholder="Enter your new password"
            />
            {errors.new_password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.new_password.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("confirm_password", {
                required: "Confirm password is required",
              })}
              className={`w-full px-3 py-2 border-2   text-sm focus:outline-none transition-colors ${
                errors.confirm_password
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-black"
              }`}
              placeholder="Confirm your new password"
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirm_password.message}
              </p>
            )}
          </div>
          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 border-2 border-gray-300 text-black hover:bg-gray-100   transition-colors text-sm font-medium"
              disabled={isSaving}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800   transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSaving}
            >
              <FaCheck /> {isSaving ? "Saving..." : "Change Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default PasswordChangeModal;

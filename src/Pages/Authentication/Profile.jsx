import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import { getProfile, updateProfile } from "../../ContextAPI/Profile";

function Profile({ isOpen, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profileData, setProfileData] = useState(null);
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
      name: "",
      phone_number: "",
      gender: "",
      address: "",
    },
  });

  // Fetch profile on mount or when modal opens
  useEffect(() => {
    if (!isOpen) return;

    const fetchProfile = async () => {
      setIsLoading(true);
      setError("");
      try {
        // First try to get from localStorage (from login)
        const userData = localStorage.getItem("user");
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setProfileData(parsedUser.profile || parsedUser);
          reset({
            name: parsedUser.profile?.name || parsedUser.name || "",
            phone_number:
              parsedUser.profile?.phone_number || parsedUser.phone_number || "",
            gender: parsedUser.profile?.gender || parsedUser.gender || "",
            address: parsedUser.profile?.address || parsedUser.address || "",
          });
        } else {
          // If not in localStorage, fetch from API
          const response = await getProfile();
          if (response.profile) {
            setProfileData(response.profile);
            reset({
              name: response.profile.name || "",
              phone_number: response.profile.phone_number || "",
              gender: response.profile.gender || "",
              address: response.profile.address || "",
            });
          }
        }
      } catch (err) {
        setError(err?.message || "Failed to load profile");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [isOpen, reset]);

  const onSubmit = async (data) => {
    setIsSaving(true);
    setError("");
    setSuccessMessage("");
    try {
      const payload = {
        name: data.name,
        phone_number: data.phone_number,
        gender: data.gender,
        address: data.address,
      };

      await updateProfile(payload);

      // Update localStorage with new data
      const userData = JSON.parse(localStorage.getItem("user"));
      const updatedUser = {
        ...userData,
        profile: {
          ...userData.profile,
          ...payload,
        },
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setProfileData(updatedUser.profile);

      setSuccessMessage("✓ Profile updated successfully!");
      setIsEditing(false);

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      setError(err?.message || "Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    setIsEditing(false);
    setError("");
    setSuccessMessage("");
    onClose();
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white   shadow-2xl max-w-2xl w-full my-8">
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-6 flex items-center justify-between sticky top-0">
          <h1 className="text-2xl font-light text-black">My Profile</h1>
          <div className="flex items-center gap-3">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors text-sm"
              >
                <FaEdit /> Edit
              </button>
            )}
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-200  transition-colors"
            >
              <FaTimes className="text-gray-600 text-lg" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-8 max-h-96 overflow-y-auto">
          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200   text-green-700 font-semibold">
              {successMessage}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200   text-red-700 font-semibold">
              {error}
            </div>
          )}

          {/* Loading State */}
          {isLoading ? (
            <div className="text-center py-8">
              <div className="loading loading-spinner loading-lg mb-4"></div>
              <p className="text-gray-600">Loading profile...</p>
            </div>
          ) : profileData ? (
            <>
              {!isEditing ? (
                // View Mode
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="flex items-center gap-6 pb-8 border-b border-gray-200">
                    {/* <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-light text-gray-400">
                        {profileData.name?.charAt(0)?.toUpperCase() || "U"}
                      </span>
                    </div> */}
                    <div>
                      <h2 className="text-xl font-semibold text-black mb-2">
                        {profileData.name}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {profileData.email}
                      </p>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2 uppercase">
                        Full Name
                      </label>
                      <p className="text-gray-900">{profileData.name}</p>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2 uppercase">
                        Email Address
                      </label>
                      <p className="text-gray-900">{profileData.email}</p>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2 uppercase">
                        Phone Number
                      </label>
                      <p className="text-gray-900">
                        {profileData.phone_number || "Not provided"}
                      </p>
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2 uppercase">
                        Gender
                      </label>
                      <p className="text-gray-900 capitalize">
                        {profileData.gender || "Not provided"}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase">
                      Address
                    </label>
                    <p className="text-gray-900">
                      {profileData.address || "Not provided"}
                    </p>
                  </div>
                </div>
              ) : (
                // Edit Mode
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      className={`w-full px-3 py-2 border-2   text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-black"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email (Read-only) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      disabled
                      className="w-full px-3 py-2 border-2 border-gray-300   bg-gray-100 text-gray-600 text-sm cursor-not-allowed"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Email cannot be changed
                    </p>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register("phone_number", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                          message: "Invalid phone number format",
                        },
                      })}
                      className={`w-full px-3 py-2 border-2   text-sm focus:outline-none transition-colors ${
                        errors.phone_number
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-black"
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone_number && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone_number.message}
                      </p>
                    )}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                      className={`w-full px-3 py-2 border-2   text-sm focus:outline-none transition-colors ${
                        errors.gender
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-black"
                      }`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register("address", {
                        required: "Address is required",
                        minLength: {
                          value: 10,
                          message: "Address must be at least 10 characters",
                        },
                      })}
                      rows={3}
                      className={`w-full px-3 py-2 border-2   text-sm focus:outline-none transition-colors resize-none ${
                        errors.address
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-black"
                      }`}
                      placeholder="Enter your address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </>
          ) : null}
        </div>

        {/* Footer */}
        {!isLoading && profileData && (
          <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3 justify-end sticky bottom-0">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    reset({
                      name: profileData.name || "",
                      phone_number: profileData.phone_number || "",
                      gender: profileData.gender || "",
                      address: profileData.address || "",
                    });
                  }}
                  disabled={isSaving}
                  className="px-4 py-2 border-2 border-gray-300 text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed   transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed   transition-colors text-sm font-medium"
                >
                  <FaCheck /> {isSaving ? "Saving..." : "Save"}
                </button>
              </>
            ) : (
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-black text-white hover:bg-gray-700  transition-colors text-sm font-medium"
              >
                Close
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default Profile;

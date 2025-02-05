"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const logIn = useCallback(async () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token_hash");
    if (token) {
      const { error } = await supabase.auth.verifyOtp({
        token_hash: token,
        type: "email",
      });
      if (error) {
        console.error(error);
      }
    }
  }, [supabase]);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess(true);
      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred");
    }
  };

  useEffect(() => {
    logIn();
    console.log("logged in");
  }, [logIn]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
      <h1 className="text-2xl font-bold text-green-600 mb-6 text-center">
        Reset Password
      </h1>

      {success ? (
        <div className="text-green-600 text-center mb-4">
          Password successfully reset! Redirecting to login...
        </div>
      ) : (
        <form onSubmit={handlePasswordReset}>
          {error && (
            <div className="text-red-600 text-center mb-4">{error}</div>
          )}

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              New Password
            </label>
            <input
              id="password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your new password"
              minLength={6}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Confirm your new password"
              minLength={6}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors"
          >
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
}

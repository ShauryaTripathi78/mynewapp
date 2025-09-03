"use client";

import { useState } from "react";
import { auth } from "../lib/firebaselogin";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignupPage() {
  console.log("6Lc5ybsrAAAAAFEpidfSMaKyR_Rx8gd4Lf9imykg", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!captchaValue) {
      setError("Please verify that you are not a robot.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      router.push("/about");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    if (error) setError(""); // clear error on captcha success
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password input with eye toggle */}
        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border p-2 w-full rounded pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.607m1.45-1.45A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-1.223 2.01M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3l18 18"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Google reCAPTCHA */}
        <div className="mb-4">
          
          <ReCAPTCHA
  sitekey="6Lc5ybsrAAAAAGkcAoeunKqgiIiG7lQv5xP5pcam"
  onChange={onCaptchaChange}
/>


          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  

          
        </div>
        <button
          type="submit"
          disabled={!email || !password || !captchaValue}
          className={`w-full p-2 rounded text-white ${
            !email || !password || !captchaValue
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Signup
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white w-full p-2 rounded hover:bg-red-600 mt-4"
        >
          Sign up with Google
        </button>

        <button
          type="button"
          onClick={() => router.push("/login")}
          className="mt-4 w-full p-2 rounded border border-gray-400 text-gray-700 hover:bg-gray-200"
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  );
}

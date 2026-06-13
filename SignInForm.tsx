"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
      }

      // Hard redirect to refresh layouts
      window.location.href = "/";
    } catch (err: any) {
      setError(err.message || "อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-8 bg-[#F5F8FC] min-h-screen w-full">
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-[#0B2D5C]">
          Welcome back
        </h2>

        <p className="mt-2 text-slate-500 text-sm">
          Please enter your details to sign in.
        </p>

        {/* Toggle between sign in and sign up */}
        <div className="mt-8 grid grid-cols-2 rounded-2xl bg-[#EEF2F6] p-1.5 border border-slate-100">
          <button className="rounded-xl bg-white py-3 text-sm font-extrabold text-[#0B2D5C] shadow-sm">
            Sign In
          </button>

          <Link
            href="/signup"
            className="rounded-xl py-3 text-center text-sm font-semibold text-slate-400 hover:text-slate-600 flex items-center justify-center transition"
          >
            Create Account
          </Link>
        </div>

        {error && (
          <div className="mt-5 rounded-2xl bg-red-50 p-4 text-xs font-semibold text-red-600 border border-red-100">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@university.ac.th"
              className="w-full rounded-xl border border-slate-200 bg-white px-4.5 py-3.5 text-sm placeholder-slate-400 outline-none transition focus:border-[#0B2D5C]"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-white pl-4.5 pr-12 py-3.5 text-sm placeholder-slate-400 outline-none transition focus:border-[#0B2D5C]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0B2D5C] transition"
              >
                {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#0B2D5C] py-4.5 font-bold text-white text-sm transition hover:bg-[#123A70] active:scale-[0.98] disabled:opacity-55 shadow-lg shadow-blue-900/10"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-12 border-t border-slate-100 pt-8 text-center">
          <p className="text-[10px] font-bold text-slate-400">
            © 2024 Nisit Shop Direct. Official University Licensed Distributor.          </p>
          <div className="mt-2.5 flex justify-center gap-5 text-xs font-bold text-slate-400">
            <Link href="/help" className="hover:underline hover:text-slate-655">Help Center</Link>
            <Link href="/privacy" className="hover:underline hover:text-slate-655">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

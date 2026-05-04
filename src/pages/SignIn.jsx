
import { useState } from "react";
import Button from "../components/common/Button";
import { useUser } from "../hooks/UserContext";
import logo from "../assets/coinbase-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useUser();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    try {
      const response = await authAPI.login({ email, password });
      if (response.message === 'Login successful') {
        signIn({ email, token: response.token }); // Update frontend state
        setMessage("Login successful!");
        setTimeout(() => navigate('/'), 1000);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full mx-auto py-16">
        <header className="mb-10">
          <div className="mb-10">
            <img src={logo} alt="NovaBlock" className="h-8 w-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
            Sign in to NovaBlock
          </h1>
          <div className="bg-amber-900/30 border border-amber-600 rounded-lg p-3 mt-4">
            <p className="text-xs text-amber-200">
              <span className="font-semibold">⚠️ Demo app – do not use your real password</span>
            </p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300" htmlFor="signin-email">
              Email
            </label>
            <input
              id="signin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300" htmlFor="signin-password">
              Password
            </label>
            <input
              id="signin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-3 text-sm md:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Continue'}
          </Button>
        </form>

        <div className="my-8 flex items-center gap-4 text-xs text-slate-500">
          <span className="flex-1 h-px bg-slate-800" />
          <span>OR</span>
          <span className="flex-1 h-px bg-slate-800" />
        </div>

        <div className="space-y-3">
          <button className="w-full rounded-full bg-slate-800 text-sm py-3 flex items-center justify-center gap-3 hover:bg-slate-700 transition">
            <span className="h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">
              👥
            </span>
            <span>Sign in with Passkey</span>
          </button>
          <button className="w-full rounded-full bg-slate-800 text-sm py-3 flex items-center justify-center gap-3 hover:bg-slate-700 transition">
            <span className="h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">
              G
            </span>
            <span>Sign in with Google</span>
          </button>
          <button className="w-full rounded-full bg-slate-800 text-sm py-3 flex items-center justify-center gap-3 hover:bg-slate-700 transition">
            <span className="h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">
              
            </span>
            <span>Sign in with Apple</span>
          </button>
        </div>

        <div className="mt-8 text-center text-xs md:text-sm text-slate-400">
          <span>Don&apos;t have an account? </span>
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </div>

        {message && (
          <p className="mt-6 text-sm text-emerald-400" aria-live="polite">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

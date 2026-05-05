
import { useState } from "react";
import Button from "../components/common/Button";
import { useUser } from "../hooks/UserContext";
import logo from "../assets/coinbase-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";

export default function SignUp() {
  const [selectedType, setSelectedType] = useState("personal");
  const [step, setStep] = useState(1); // 1 = choose type, 2 = create account form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useUser();
  const navigate = useNavigate();

  const accountTypes = [
    {
      id: "personal",
      title: "Personal",
      description: "Trade crypto as an individual.",
      icon: "👤",
    },
    {
      id: "business",
      title: "Business",
      description:
        "Manage teams and portfolios, accept crypto payments, and more.",
      icon: "🏢",
    },
    {
      id: "developer",
      title: "Developer",
      description: "Build onchain using developer tooling.",
      icon: "💻",
    },
  ];

  function handleChooseTypeContinue() {
    setStep(2);
  }

  async function handleCreateAccount(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.register({ name, email, password });
      if (response.message === 'User registered successfully') {
        signIn({ name, email, token: response.token }); // Update frontend state
        setMessage("Account created successfully!");
        setTimeout(() => navigate('/'), 1000);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed');
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
          {step === 1 ? (
            <>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
                What kind of account are you creating?
              </h1>
              <p className="text-sm md:text-base text-slate-400 max-w-md">
                Choose the type of account that best matches how you plan to use NovaBlock.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
                Create your account
              </h1>
              <p className="text-sm md:text-base text-slate-400 max-w-md">
                Access all that NovaBlock has to offer with a single {selectedType} account.
              </p>
              <div className="bg-amber-900/30 border border-amber-600 rounded-lg p-3 mt-4">
                <p className="text-xs text-amber-200">
                  <span className="font-semibold">⚠️ Demo app – do not use your real password</span>
                </p>
              </div>
            </>
          )}
        </header>

        {step === 1 ? (
          <>
            <div className="space-y-4 mb-8">
              {accountTypes.map((type) => {
                const isActive = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full text-left rounded-2xl border px-6 py-5 flex items-center justify-between transition shadow-sm ${
                      isActive
                        ? "border-blue-500 bg-slate-900/80"
                        : "border-slate-700 bg-slate-900/40 hover:bg-slate-800/70"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center">
                        <span className="text-xl">{type.icon}</span>
                      </div>
                      <div>
                        <p className="text-base md:text-lg font-semibold">{type.title}</p>
                        <p className="text-xs md:text-sm text-slate-400">
                          {type.description}
                        </p>
                      </div>
                    </div>
                    {isActive && (
                      <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-slate-500">
                You can switch account types later in your settings.
              </p>
              <Button
                type="button"
                onClick={handleChooseTypeContinue}
                className="px-8 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition"
              >
                Continue
              </Button>
            </div>
          </>
        ) : (
          <>
            <form onSubmit={handleCreateAccount} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3 text-sm md:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Create account'}
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
                  G
                </span>
                <span>Sign up with Google</span>
              </button>
              <button className="w-full rounded-full bg-slate-800 text-sm py-3 flex items-center justify-center gap-3 hover:bg-slate-700 transition">
                <span className="h-5 w-5 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">
                  
                </span>
                <span>Sign up with Apple</span>
              </button>
            </div>

            <div className="mt-8 text-center text-xs md:text-sm text-slate-400">
              <span>Already have an account? </span>
              <Link to="/signin" className="text-blue-400 hover:underline">
                Sign in
              </Link>
            </div>
          </>
        )}

        {message && (
          <p className="mt-6 text-sm text-emerald-400" aria-live="polite">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

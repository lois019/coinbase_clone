
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import logo from "../../assets/coinbase-logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut } = useUser();

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="NovaBlock Logo" className="h-8 w-8" />
          <Link to="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition">NovaBlock</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/explore" className="text-gray-700 hover:text-blue-600 font-medium transition">Explore</Link>
          <Link to="/learn" className="text-gray-700 hover:text-blue-600 font-medium transition">Learn</Link>
          {user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-blue-600 font-medium transition">Profile</Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  {user.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <span className="text-blue-600 font-semibold">Welcome back!</span>
              </div>
              <button
                onClick={signOut}
                className="ml-2 px-3 py-1 rounded bg-gray-100 hover:bg-red-100 text-red-600 font-medium transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-gray-700 hover:text-blue-600 font-medium transition">Sign In</Link>
              <Link to="/signup" className="text-gray-700 hover:text-blue-600 font-medium transition">Sign Up</Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 border-t border-gray-200 pt-3 px-4 pb-4 space-y-3 bg-white">
          <Link
            to="/explore"
            className="block text-gray-700 hover:text-blue-600 font-medium transition"
            onClick={() => setMenuOpen(false)}
          >
            Explore
          </Link>
          <Link
            to="/learn"
            className="block text-gray-700 hover:text-blue-600 font-medium transition"
            onClick={() => setMenuOpen(false)}
          >
            Learn
          </Link>
          {user ? (
            <>
              <Link
                to="/profile"
                className="block text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  {user.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <span className="text-blue-600 font-semibold">Welcome back!</span>
              </div>
              <button
                onClick={() => {
                  signOut();
                  setMenuOpen(false);
                }}
                className="w-full text-left text-red-600 font-medium transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="block text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

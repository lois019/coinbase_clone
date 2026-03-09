
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import logo from "../../assets/coinbase-logo.svg";


export default function Navbar() {
  const { user, signOut } = useUser();
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="NovaBlock Logo" className="h-8 w-8" />
        <Link to="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition">NovaBlock</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/explore" className="text-gray-700 hover:text-blue-600 font-medium transition">Explore</Link>
        <Link to="/learn" className="text-gray-700 hover:text-blue-600 font-medium transition">Learn</Link>
        {user ? (
          <>
            <span className="text-blue-600 font-semibold">{user.email}</span>
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
    </nav>
  );
}

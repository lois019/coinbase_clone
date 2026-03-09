
import logo from "../../assets/coinbase-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12 w-full">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="NovaBlock Logo" className="h-8 w-8" />
          <span className="font-bold text-gray-900">NovaBlock</span>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <a href="https://www.novablock.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">About</a>
          <a href="https://www.novablock.com/learn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Learn</a>
          <a href="https://www.novablock.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Privacy</a>
          <a href="https://www.novablock.com/legal/user_agreement" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Terms</a>
        </div>
        <div className="text-xs text-gray-400 text-center sm:text-right w-full sm:w-auto">
          &copy; {new Date().getFullYear()} NovaBlock. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

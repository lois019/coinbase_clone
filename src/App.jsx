
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import CoinbaseOne from "./pages/CoinbaseOne";
import AdvancedTrade from "./pages/AdvancedTrade";


import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WarningBanner from "./components/common/WarningBanner";
import { UserProvider } from "./hooks/UserContext";


function AppShell() {
  const location = useLocation();
  // Treat auth and advanced trading pages as full-screen experiences
  // so they render without the global Navbar/Footer chrome.
  const isFullScreenRoute =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/advanced";

  // One-time cleanup: remove any persisted dark-mode state so the
  // assignment runs in a predictable light theme regardless of history.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem("theme");
      } catch {
        // ignore
      }
    }
  }, []);

  return (
    <>
      {!isFullScreenRoute && <WarningBanner />}
      {!isFullScreenRoute && <Navbar />}
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/asset/:id" element={<AssetDetail />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/advanced" element={<AdvancedTrade />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/coinbase-one" element={<CoinbaseOne />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {!isFullScreenRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

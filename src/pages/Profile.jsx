import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../services/api";
import { useUser } from "../hooks/UserContext";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { signOut } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await userAPI.getProfile();
        setProfile(data.user);
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/signin", { replace: true });
        } else {
          setError("Unable to load profile. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [navigate]);

  function handleSignOut() {
    signOut();
    navigate("/signin", { replace: true });
  }

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white text-slate-900 flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-white text-slate-900 flex items-center justify-center px-4 py-20">
        <div className="max-w-md text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">User Profile</p>
            <h1 className="text-3xl font-bold mt-2">Welcome back, {profile?.name}</h1>
            <p className="mt-2 text-sm text-slate-500">This page is protected and only visible to authenticated users.</p>
          </div>
          <button
            onClick={handleSignOut}
            className="rounded-full bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Account details</h2>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <p className="text-slate-500">Name</p>
                <p className="font-medium">{profile?.name}</p>
              </div>
              <div>
                <p className="text-slate-500">Email</p>
                <p className="font-medium">{profile?.email}</p>
              </div>
              <div>
                <p className="text-slate-500">Member since</p>
                <p className="font-medium">{new Date(profile?.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Important</h2>
            <p className="text-sm text-slate-600">
              This demo project is for educational purposes only. Do not use real passwords or personal data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

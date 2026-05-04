


import { useState, useEffect } from "react";
import CryptoCard from "../components/crypto/CryptoCard";
import Input from "../components/common/Input";
import { Link } from "react-router-dom";
import { cryptoAPI } from "../services/api";

export default function Explore() {
  const [search, setSearch] = useState("");
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const data = await cryptoAPI.getAllCryptos();
        setCryptos(data);
      } catch (err) {
        setError('Failed to load cryptocurrencies');
        console.error('Error fetching cryptos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  const filteredCryptos = cryptos.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(search.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white text-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading cryptocurrencies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-white text-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Explore crypto</h1>
          <p className="text-sm text-slate-500">Search for an asset and view market stats.</p>
          <div className="mt-4">
            <Input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for an asset"
              className="w-full shadow-sm border border-gray-200 rounded-2xl px-4 py-3"
            />
          </div>
          <div className="mt-8 -mx-4">
            <div className="relative w-full rounded-3xl bg-slate-950 shadow-lg px-4 py-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Left side stats */}
                <div className="hidden md:flex flex-col gap-3 text-slate-100 text-xs">
                  <div className="px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 w-32">
                    <div className="font-semibold text-sm">BTC</div>
                    <div className="text-slate-400">$56,789</div>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 w-32">
                    <div className="font-semibold text-sm">ETH</div>
                    <div className="text-slate-400">$3,200</div>
                  </div>
                </div>

                {/* Center full-width chart */}
                <div className="md:col-span-1">
                  <svg
                    className="w-full h-40 md:h-48"
                    viewBox="0 0 640 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <rect x="20" y="40" width="600" height="260" rx="32" fill="#020617" />
                    <rect x="60" y="80" width="520" height="190" rx="20" stroke="#1F2937" strokeWidth="2" />
                    {/* subtle grid pattern */}
                    <g stroke="#111827" strokeWidth="1" opacity="0.35">
                      <line x1="120" y1="90" x2="120" y2="260" />
                      <line x1="220" y1="90" x2="220" y2="260" />
                      <line x1="320" y1="90" x2="320" y2="260" />
                      <line x1="420" y1="90" x2="420" y2="260" />
                      <line x1="520" y1="90" x2="520" y2="260" />
                      <line x1="80" y1="140" x2="580" y2="140" />
                      <line x1="80" y1="190" x2="580" y2="190" />
                      <line x1="80" y1="240" x2="580" y2="240" />
                    </g>
                    {/* floating accent shapes removed for a cleaner look */}
                    {/* price line */}
                    <path
                      d="M80 240L150 190L210 215L270 170L330 210L390 150L450 205L520 150"
                      stroke="url(#gradExplore)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* data point dots */}
                    <g fill="#22C55E">
                      <circle cx="150" cy="190" r="3" />
                      <circle cx="210" cy="215" r="3" />
                      <circle cx="270" cy="170" r="3" />
                      <circle cx="330" cy="210" r="3" />
                      <circle cx="390" cy="150" r="3" />
                      <circle cx="450" cy="205" r="3" />
                      <circle cx="520" cy="150" r="3" />
                    </g>
                    <defs>
                      <linearGradient id="gradExplore" x1="80" y1="150" x2="520" y2="240" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22C55E" />
                        <stop offset="1" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Right side stats */}
                <div className="hidden md:flex flex-col gap-3 items-end text-slate-100 text-xs">
                  <div className="px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 text-right">
                    24h volume
                    <div className="font-semibold text-slate-50 text-sm">$145B</div>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 text-right">
                    Market cap
                    <div className="font-semibold text-slate-50 text-sm">$2.4T</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-10">
          {/* Top row: Market stats full width */}
          <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Market stats</h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-8 min-h-[180px] flex flex-col justify-between">
                  <p className="text-xs text-slate-500 mb-2">Total market cap</p>
                  <p className="text-3xl font-semibold">$2.4T</p>
                  <p className="text-sm text-emerald-600 mt-1">+3.8% (24h)</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-8 min-h-[180px] flex flex-col justify-between">
                  <p className="text-xs text-slate-500 mb-2">Trade volume</p>
                  <p className="text-3xl font-semibold">$145B</p>
                  <p className="text-sm text-emerald-600 mt-1">+2.1% (24h)</p>
                </div>
              </div>
          </section>

          {/* Bottom row: Crypto prices with Top movers beside */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Crypto market prices</h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {filteredCryptos.length === 0 ? (
                  <div className="col-span-full text-center text-gray-500 py-8">
                    <p className="text-lg mb-2">No cryptocurrencies found</p>
                    <p className="text-sm">Cryptocurrencies will appear here once added to the database.</p>
                  </div>
                ) : (
                  filteredCryptos.map((crypto) => (
                    <Link
                      key={crypto._id}
                      to={`/asset/${crypto._id}`}
                      className="block focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-[1.02] transition-transform"
                      aria-label={`View details for ${crypto.name}`}
                    >
                      <div className="rounded-2xl border border-gray-200 hover:border-blue-500 transition-all p-4">
                        <CryptoCard
                          name={crypto.name}
                          symbol={crypto.symbol}
                          price={crypto.price}
                          change={crypto.change24h}
                          icon={<img src={crypto.image} alt={crypto.name} className="w-8 h-8" />}
                        />
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>

            <aside>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Top movers</h2>
              <div className="space-y-4">
                {cryptos.slice(0, 4).map((crypto) => (
                  <Link
                    key={crypto._id}
                    to={`/asset/${crypto._id}`}
                    className="rounded-2xl border border-gray-200 hover:border-blue-500 transition-all p-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`View details for ${crypto.name}`}
                  >
                    <div className="flex items-center gap-4">
                      <img src={crypto.image} alt={crypto.name} className="w-10 h-10" />
                      <div>
                        <p className="text-sm font-semibold">{crypto.name}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">{crypto.symbol}</p>
                      </div>
                    </div>
                    <p className={crypto.change24h >= 0 ? "text-emerald-600 text-sm font-semibold" : "text-red-600 text-sm font-semibold"}>
                      {crypto.change24h >= 0 ? "+" : ""}{crypto.change24h}%
                    </p>
                  </Link>
                ))}
              </div>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
}



import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/UserContext";
import logo from "../assets/coinbase-logo.svg";

export default function Home() {
  const { user } = useUser();
  
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Section 1: future of finance hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[90vh]">
          {/* Left: blue card with mock phone/chart */}
          <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-900 rounded-3xl p-10 sm:p-14 shadow-2xl text-white flex items-center justify-center min-h-[520px]">
            <div className="bg-white/10 rounded-2xl p-5 w-full max-w-sm">
              <div className="flex items-center justify-between mb-4 text-xs text-blue-100">
                <span>Crypto portfolio</span>
                <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-200 text-[10px]">+3.8% 24h</span>
              </div>
              <div className="text-2xl font-semibold mb-2">$33,683.80</div>
              <div className="text-xs text-blue-100 mb-4">Overall balance</div>
              <div className="h-24 w-full bg-blue-900/40 rounded-xl mb-4" />
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span>Crypto</span><span>$14,186.12</span></div>
                <div className="flex justify-between"><span>Stocks</span><span>$8,133.98</span></div>
                <div className="flex justify-between"><span>Derivatives</span><span>$4,148.84</span></div>
              </div>
            </div>
          </div>

          {/* Right: headline + subtext + user status */}
          <div className="space-y-6">
            <img src={logo} alt="NovaBlock Logo" className="h-12 w-12" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900" aria-label="Your digital asset marketplace.">
              Your digital asset marketplace.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl">
              Trade crypto and more on a platform you can trust.
            </p>
            
            {/* Show simple welcome when signed in, otherwise show signup form */}
            {user ? (
              <div className="max-w-xl">
                <Link to="/explore" className="inline-block">
                  <Button className="px-6 py-2 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition">
                    Explore Crypto
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <div className="max-w-xl">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-full border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Link to="/signup" className="inline-block">
                  <Button className="px-8 py-3 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </section>

        {/* Section 2: Explore crypto like Bitcoin, Ethereum, and Dogecoin */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: headline + copy + CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-xl">
              Explore crypto like Bitcoin,
              <br />
              Ethereum, and Dogecoin.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <Link to="/explore" className="inline-block">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-slate-900 transition shadow-md">
                See more assets
              </button>
            </Link>
          </div>

          {/* Right: dark asset list panel */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-[32px] bg-black text-white px-6 py-6 md:px-8 md:py-7 shadow-2xl">
              {/* Tabs */}
              <div className="flex items-center gap-4 mb-6 text-xs md:text-sm">
                <button className="px-4 py-1.5 rounded-full bg-slate-800 text-white font-semibold">
                  Tradable
                </button>
                <button className="text-slate-400 hover:text-white">Top gainers</button>
                <button className="text-slate-400 hover:text-white">New on NovaBlock</button>
              </div>

              {/* Asset rows */}
              <div className="space-y-4 text-sm md:text-base">
                {[
                  { name: "Bitcoin", ticker: "BTC", color: "bg-amber-400", price: "$72,950", change: "+0.37%" },
                  { name: "Ethereum", ticker: "ETH", color: "bg-blue-500", price: "$3,210", change: "+0.97%" },
                  { name: "Tether", ticker: "USDT", color: "bg-emerald-500", price: "$1.00", change: "0.00%" },
                  { name: "BNB", ticker: "BNB", color: "bg-yellow-400", price: "$615", change: "+1.56%" },
                  { name: "USDC", ticker: "USDC", color: "bg-sky-500", price: "$1.00", change: "+0.02%" },
                ].map((asset) => (
                  <div
                    key={asset.ticker}
                    className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-8 w-8 rounded-full ${asset.color} flex items-center justify-center text-xs font-bold`}
                      >
                        {asset.ticker[0]}
                      </span>
                      <div>
                        <p className="font-semibold">{asset.name}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wide">{asset.ticker}</p>
                      </div>
                    </div>
                    <div className="text-right text-xs md:text-sm">
                      <p className="font-semibold">{asset.price}</p>
                      <p className="text-rose-400">{asset.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: advanced trader tools (scroll target) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: dark card resembling trading UI */}
          <div className="bg-black rounded-3xl p-6 sm:p-10 shadow-2xl flex items-center justify-center min-h-[360px]">
            <div className="w-full max-w-xl flex gap-4">
              <div className="flex-1 bg-zinc-900 rounded-2xl border border-zinc-800 p-4 space-y-3">
                <div className="h-3 w-24 bg-zinc-700 rounded-full" />
                <div className="h-40 w-full bg-gradient-to-tr from-emerald-400/40 via-sky-500/40 to-blue-500/40 rounded-xl" />
                <div className="h-3 w-32 bg-zinc-700 rounded-full" />
              </div>
              <div className="w-32 bg-zinc-900 rounded-2xl border border-zinc-800 p-3 space-y-2 hidden sm:flex flex-col">
                <div className="h-3 w-20 bg-zinc-700 rounded-full" />
                <div className="h-3 w-full bg-zinc-700 rounded-full" />
                <div className="h-3 w-16 bg-zinc-700 rounded-full" />
                <div className="flex-1" />
                <div className="h-8 w-full bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Right: text + CTA */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Powerful tools, designed for the advanced trader.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Powerful analytical tools with the safety and security of NovaBlock deliver the ultimate trading experience.
              Tap into real-time charts, detailed order books, and deep liquidity across hundreds of markets.
            </p>
            <Link to="/advanced" className="inline-block">
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-zinc-900 transition shadow-md">
                Start trading
              </button>
            </Link>
          </div>
        </section>

        {/* Section 4: NovaBlock One style offer */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-4 py-2 bg-white shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                C
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase">
                NovaBlock One
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-xl">
              Zero trading fees, more rewards.
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-xl">
              Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
            </p>
            <Link to="/coinbase-one" className="inline-block">
              <button className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-black text-white text-sm md:text-base font-semibold hover:bg-slate-900 transition shadow-md">
                Claim free trial
              </button>
            </Link>
          </div>

          {/* Right: phone-style illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-slate-50 rounded-[40px] px-6 py-10 md:px-10 md:py-14 shadow-inner max-w-md w-full flex justify-center">
              <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-xs aspect-[9/16] flex flex-col justify-between overflow-hidden">
                {/* top status area */}
                <div className="px-5 pt-5 space-y-6">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>3:57</span>
                    <span className="h-3 w-12 bg-slate-200 rounded-full" />
                  </div>
                  <div className="flex flex-col items-center gap-4 mt-2">
                    <div className="h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-3xl">✓</span>
                    </div>
                    <div className="text-center space-y-1">
                      <p className="text-sm font-semibold text-slate-900">Trade successful!</p>
                      <p className="text-xs text-slate-500">You got 0.012423 BTC</p>
                    </div>
                  </div>
                </div>

                {/* bottom card */}
                <div className="bg-slate-50 border-t border-slate-100 px-4 py-5 space-y-3">
                  <div className="h-8 w-full rounded-2xl bg-white shadow-sm flex items-center px-3 text-[11px] text-slate-700">
                    <span className="mr-2 line-through text-slate-400 text-[10px]">$14.68</span>
                    <span className="mr-2 h-3 w-3 rounded-full bg-blue-600" />
                    <span className="truncate">No trading fees with NovaBlock One</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold text-slate-900">Exclusive member benefits</p>
                    <p className="text-[11px] text-slate-500">
                      NovaBlock One members get boosted rewards and priority support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Base App style hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: phone-style card inside light panel */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-slate-50 rounded-[40px] px-6 py-10 md:px-10 md:py-14 shadow-inner max-w-md w-full flex justify-center">
              <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-xs aspect-[9/16] overflow-hidden flex flex-col">
                <div className="h-10 w-full flex items-center justify-between px-4 text-[10px] text-slate-400">
                  <span>4:20</span>
                  <span className="h-3 w-16 bg-slate-200 rounded-full" />
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400" />
                  <div className="absolute bottom-8 left-8 flex items-center gap-2 text-[11px] font-semibold text-slate-900">
                    <span className="inline-flex items-center justify-center h-6 px-3 rounded-full bg-white shadow">$1.00</span>
                  </div>
                </div>
                <div className="h-12 w-full bg-white border-t border-slate-100 flex items-center justify-around px-4 text-[10px] text-slate-500">
                  <span className="h-3 w-10 bg-slate-200 rounded-full" />
                  <span className="h-3 w-10 bg-slate-200 rounded-full" />
                  <span className="h-3 w-10 bg-slate-200 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-4 py-2 bg-white shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                B
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase">
                Base App
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-xl">
              Countless ways to earn crypto with the Base App.
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-xl">
              An everything app to trade, create, discover, and chat, all in one place.
            </p>
            <button className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-black text-white text-sm md:text-base font-semibold hover:bg-slate-900 transition shadow-md">
              Learn more
            </button>
          </div>
        </section>

        {/* Section 6: Learn crypto basics */}
        <section className="rounded-3xl bg-slate-50 px-6 py-10 md:px-10 md:py-14 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left big heading */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-xl">
                New to crypto? <br />
                Learn some crypto basics
              </h2>
              <Link to="/learn" className="inline-block">
                <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-black text-white text-sm md:text-base font-semibold hover:bg-slate-900 transition shadow-md">
                  Read more
                </button>
              </Link>
            </div>

            {/* Right intro text */}
            <div className="text-sm md:text-base text-slate-600 max-w-md">
              Beginner guides, practical tips, and market updates for first-time investors and experienced traders alike.
            </div>
          </div>

          {/* Learn cards row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="space-y-4">
              <div className="h-56 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="h-20 w-20 rounded-full border-4 border-blue-300 flex items-center justify-center text-3xl text-white">
                  $
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                USDC: The digital dollar for the global crypto economy
              </h3>
              <p className="text-sm text-slate-600">
                Learn how stablecoins like USDC can make sending, saving, and spending money faster and more open.
              </p>
            </article>

            <article className="space-y-4">
              <div className="h-56 rounded-3xl bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-400 flex items-center justify-center">
                <div className="h-24 w-24 rounded-2xl bg-white flex items-center justify-center text-3xl text-blue-600">
                  🏦
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Can crypto really replace your bank account?
              </h3>
              <p className="text-sm text-slate-600">
                Explore what it means to be your own bank and how crypto wallets work behind the scenes.
              </p>
            </article>

            <article className="space-y-4">
              <div className="h-56 rounded-3xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-3xl text-amber-500">
                  ₿
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                When is the best time to invest in crypto?
              </h3>
              <p className="text-sm text-slate-600">
                Understand volatility, risk, and long-term strategies so you can start with confidence.
              </p>
            </article>
          </div>
        </section>

        {/* Section 7: Take control of your money hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: big headline and email signup */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight max-w-xl">
              Take control
              <br />
              of your money
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-xl">
              Start your portfolio today and discover crypto.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-1 rounded-full border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition shadow-md">
                Sign up
              </button>
            </div>
          </div>

          {/* Right: cluster of polished crypto circles */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
              {/* center NovaBlock circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-600 flex items-center justify-center shadow-xl ring-8 ring-white">
                  <span className="text-white text-5xl font-black">C</span>
                </div>
              </div>

              {/* surrounding asset circles */}
              <div className="absolute -top-2 left-6 w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg ring-4 ring-white">
                <span className="text-white text-3xl font-black">₿</span>
              </div>
              <div className="absolute top-0 right-6 w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 flex items-center justify-center shadow-lg ring-4 ring-white">
                <span className="text-white text-3xl font-black">Λ</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-300 flex items-center justify-center shadow-lg ring-4 ring-white">
                <span className="text-white text-3xl font-black">Ð</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-500 flex items-center justify-center shadow-lg ring-4 ring-white">
                <span className="text-white text-3xl font-black">→</span>
              </div>
              <div className="absolute bottom-0 left-8 w-20 h-20 md:w-24 md:h-24 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg ring-4 ring-white">
                <span className="text-white text-3xl font-black">Ξ</span>
              </div>
              <div className="absolute bottom-2 right-8 w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-700 flex items-center justify-center shadow-lg ring-4 ring-white">
                <span className="text-white text-xl font-black">ADA</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

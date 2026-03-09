import Button from "../components/common/Button";

export default function AdvancedTrade() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            NovaBlock Advanced
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Low fees.
            <br />
            Powerful trading.
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl">
            Trade hundreds of pairs with deep liquidity, advanced charting, and tools built for serious traders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white shadow-lg">
              Get started
            </Button>
            <button className="px-8 py-3 rounded-full border border-slate-600 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition">
              Explore NovaBlock Advanced
            </button>
          </div>
        </div>

        {/* Right: stacked trading UI cards */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-10 -right-6 w-72 h-44 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl rotate-6" />
            <div className="absolute -bottom-10 -left-4 w-64 h-40 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl -rotate-6 opacity-70" />
            <div className="relative w-full rounded-3xl bg-slate-950 border border-slate-700 shadow-2xl p-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>BTC / USD</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px]">+2.34% 24h</span>
              </div>
              <div className="h-32 w-full rounded-xl bg-gradient-to-tr from-emerald-400/40 via-sky-500/40 to-blue-500/40" />
              <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-300">
                <div>
                  <p className="text-slate-500">Last price</p>
                  <p className="font-semibold">$68,528.97</p>
                </div>
                <div>
                  <p className="text-slate-500">24h volume</p>
                  <p className="font-semibold">$1.2B</p>
                </div>
                <div>
                  <p className="text-slate-500">24h fees</p>
                  <p className="font-semibold text-emerald-300">0.0% maker</p>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400">
                <span className="inline-flex h-6 items-center rounded-full bg-slate-900 px-2">Spot</span>
                <span className="inline-flex h-6 items-center rounded-full bg-slate-900 px-2">Derivatives</span>
                <span className="inline-flex h-6 items-center rounded-full bg-slate-900 px-2">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

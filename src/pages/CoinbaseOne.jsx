import Button from "../components/common/Button";

export default function CoinbaseOne() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Hero: Get more out of crypto with one membership */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-4 py-2 bg-white shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                C
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase">
                NovaBlock One
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight max-w-xl">
              Get more out of crypto with one membership
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-xl">
              Zero trading fees, boosted staking rewards, and more&mdash;starting at
              <span className="font-semibold"> $4.99/month</span>.
            </p>
            <Button className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-blue-600 text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition shadow-md">
              Start your free trial
            </Button>
          </div>

          {/* Right: big blue artwork placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-[48px] bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 p-10 shadow-2xl overflow-hidden">
              <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-sky-300/70 via-blue-500/60 to-blue-800/90" />
              <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-white/95 shadow-inner">
                <div className="h-40 w-40 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-black">1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing tiers: Discover the best of NovaBlock */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Discover the best of NovaBlock
            </h2>
            <p className="text-sm md:text-base text-slate-500">
              Find the right plan for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic */}
            <article className="rounded-3xl border border-slate-200 bg-white px-6 py-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Basic</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Monthly price</p>
                <p>
                  $4.99 
                  <span className="text-slate-400"> &bull; $49.99/year</span>
                </p>
              </div>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Zero trading fees</p>
                <p>Up to $500/month</p>
              </div>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Account protection</p>
                <p>$1,000 coverage</p>
              </div>
            </article>

            {/* Preferred */}
            <article className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Preferred</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Monthly price</p>
                <p>
                  $29.99 
                  <span className="text-slate-400"> &bull; $299.99/year</span>
                </p>
              </div>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Zero trading fees</p>
                <p>Up to $10,000/month</p>
              </div>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Account protection</p>
                <p>$10,000 coverage</p>
              </div>
            </article>

            {/* Premium */}
            <article className="rounded-3xl border border-slate-200 bg-white px-6 py-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Premium</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Monthly price</p>
                <p>
                  $299.99 
                  <span className="text-slate-400"> &bull; $2,999.99/year</span>
                </p>
              </div>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Zero trading fees</p>
                <p>Unlimited</p>
              </div>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Account protection</p>
                <p>$250,000 coverage</p>
              </div>
            </article>
          </div>

          {/* Benefits rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base text-slate-800">
            <div className="space-y-6">
              <div>
                <p className="font-semibold">24/7 priority support</p>
                <p className="text-slate-500">Email and chat access to our support team.</p>
              </div>
              <div>
                <p className="font-semibold">Free wires</p>
                <p className="text-slate-500">No fees on incoming USD wires.</p>
              </div>
              <div>
                <p className="font-semibold">Exclusive tax deals</p>
                <p className="text-slate-500">Access discounts with select tax partners.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-semibold">25% spot fee rebate</p>
                <p className="text-slate-500">Earn up to 100 USDC/month back on spot fees.</p>
              </div>
              <div>
                <p className="font-semibold">Token sale boost</p>
                <p className="text-slate-500">Request increased allocations on select sales.</p>
              </div>
              <div>
                <p className="font-semibold">Onchain partner deals</p>
                <p className="text-slate-500">Unlock perks with participating protocols.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-semibold">Priority access</p>
                <p className="text-slate-500">Be first in line for new features and launches.</p>
              </div>
              <div>
                <p className="font-semibold">Security benefits</p>
                <p className="text-slate-500">Extra monitoring to help keep your account safe.</p>
              </div>
              <div>
                <p className="font-semibold">And more</p>
                <p className="text-slate-500">Benefits vary by region and membership tier.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 25% back hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-xl">
              Get 25% back on spot fees when you trade on Advanced
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Immediately receive 25% back on NovaBlock Advanced spot fees in USDC after your order is executed
              (receive up to $100 in rebates every month).
            </p>
            <p className="text-xs md:text-sm text-slate-400">Benefits vary by region and tier.</p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="bg-black rounded-[40px] px-6 py-8 md:px-10 md:py-10 shadow-2xl max-w-md w-full">
              <div className="h-64 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center overflow-hidden">
                <div className="w-40 h-24 md:w-48 md:h-28 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col justify-between p-3 text-xs text-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="h-5 w-5 rounded-full bg-blue-600" />
                    <span className="h-3 w-10 bg-slate-600 rounded-full" />
                  </div>
                  <div className="h-10 w-full rounded-md bg-gradient-to-tr from-emerald-400/40 via-sky-500/40 to-blue-500/40" />
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="h-3 w-10 bg-slate-600 rounded-full" />
                    <span className="h-3 w-8 bg-slate-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const basicsCards = [
  {
    label: "Beginner's guide",
    title: "What is Bitcoin?",
    description:
      "Bitcoin is the first widely adopted cryptocurrency — a secure, borderless way to send and store value.",
    meta: "Beginner · 5 min read",
  },
  {
    label: "Beginner's guide",
    title: "Guide to DeFi tokens and altcoins",
    description:
      "From DeFi protocols to alternative layer 1s, learn what to look for when exploring new tokens.",
    meta: "Beginner · 7 min read",
  },
  {
    label: "Beginner's guide",
    title: "What is Ethereum?",
    description:
      "Ethereum is a programmable blockchain that lets developers build apps and smart contracts.",
    meta: "Beginner · 6 min read",
  },
  {
    label: "Beginner's guide",
    title: "What is a stablecoin?",
    description:
      "Stablecoins are cryptoassets designed to track the price of another asset, like the US dollar.",
    meta: "Beginner · 4 min read",
  },
];

const whatIsChips = [
  "Bitcoin",
  "Blockchain",
  "Cardano",
  "Crypto wallet",
  "DeFi",
  "Ethereum",
  "Fork",
  "Market cap",
  "NFT",
  "Private key",
  "Protocol",
  "Smart contract",
  "Token",
  "Volatility",
];

export default function Learn() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Hero section mirroring Coinbase Learn: title, summary, and a featured visual with a popular list */}
        <section className="space-y-10">
          <header className="space-y-3 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-blue-600">Learn</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Crypto questions, answered
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors,
              and everyone in between.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            {/* Featured video/illustration block inspired by Coinbase Learn hero */}
            <div className="lg:col-span-2 rounded-3xl bg-white shadow-sm border border-slate-200 p-6 sm:p-8 flex items-center justify-center">
              <div className="w-full max-w-xl aspect-video rounded-3xl bg-slate-900 flex items-center justify-center relative overflow-hidden">
                {/* thumbnail strip */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/3 bg-gradient-to-b from-sky-500 via-sky-400 to-blue-500" />
                  <div className="w-1/3 bg-gradient-to-b from-indigo-500 via-indigo-400 to-blue-600" />
                  <div className="w-1/3 bg-gradient-to-b from-emerald-500 via-emerald-400 to-teal-500" />
                </div>
                {/* floating cards */}
                <div className="relative flex gap-4">
                  <div className="w-40 h-28 rounded-2xl bg-white/95 shadow-lg p-3 flex flex-col justify-between">
                    <div className="h-8 w-full rounded-md bg-slate-100" />
                    <div className="space-y-1">
                      <div className="h-2 w-16 rounded-full bg-slate-200" />
                      <div className="h-2 w-24 rounded-full bg-slate-300" />
                    </div>
                  </div>
                  <div className="w-40 h-28 rounded-2xl bg-slate-900/80 border border-slate-600 shadow-lg p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[10px] text-slate-200">
                      <span>BTC</span>
                      <span className="rounded-full bg-emerald-500/20 text-emerald-300 px-2 py-0.5">+3.4%</span>
                    </div>
                    <div className="h-10 w-full rounded-md bg-gradient-to-r from-emerald-400/40 via-sky-500/40 to-blue-500/40" />
                    <div className="flex justify-between text-[9px] text-slate-300">
                      <span>$63,240.80</span>
                      <span>24h volume</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right-hand sidebar of popular articles */}
            <aside className="space-y-4">
              <h2 className="text-sm font-semibold text-slate-900">Popular</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 flex items-center justify-center text-[10px] font-semibold text-white">
                    1
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-slate-500">Beginner&apos;s guide</p>
                    <p className="font-medium text-slate-900 mt-1">What is cryptocurrency?</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs">
                      Learn the basics of digital money, how it works, and why people use it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500 flex items-center justify-center text-[10px] font-semibold text-white">
                    2
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-slate-500">Getting started</p>
                    <p className="font-medium text-slate-900 mt-1">How to earn crypto rewards</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs">
                      See different ways to earn yield on your holdings, from staking to rewards programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 flex items-center justify-center text-[10px] font-semibold text-white">
                    3
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-slate-500">Getting started</p>
                    <p className="font-medium text-slate-900 mt-1">How to add crypto to your wallet</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs">
                      Follow simple steps to move crypto between exchanges and self-custody wallets securely.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-[10px] font-semibold text-white">
                    4
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-slate-500">Your crypto</p>
                    <p className="font-medium text-slate-900 mt-1">
                      Tax forms explained: a guide to crypto taxes
                    </p>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs">
                      Understand the key forms and concepts so tax season is less confusing.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Crypto basics section with beginner guides plus a glossary-style 'What is...' list */}
        <section className="space-y-10">
          {/* Crypto basics cards */}
          <div className="space-y-6">
            <header className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Crypto basics</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                New to crypto? Start with these guides and explainers to learn the fundamentals.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {basicsCards.map((card, index) => (
                <article
                  key={card.title}
                  className="space-y-3 rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition"
                >
                  <div className="h-32 bg-slate-900 relative overflow-hidden">
                    {index === 0 && (
                      <>
                        <div className="absolute -left-10 top-4 h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500" />
                        <div className="absolute left-6 top-8 h-16 w-16 rounded-full bg-slate-950 flex items-center justify-center text-3xl text-amber-300">
                          ₿
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="absolute inset-4 rounded-2xl bg-slate-800" />
                        <div className="absolute inset-x-6 top-6 h-3 rounded-full bg-slate-600" />
                        <div className="absolute inset-x-6 bottom-6 h-10 rounded-xl bg-gradient-to-r from-emerald-400/50 via-sky-500/50 to-blue-500/50" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="absolute -right-6 -top-4 h-20 w-32 rounded-3xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400" />
                        <div className="absolute left-6 bottom-6 h-8 w-24 rounded-full bg-slate-800/80" />
                        <div className="absolute left-6 bottom-10 h-2 w-16 rounded-full bg-slate-600" />
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                        <div className="absolute left-6 top-6 h-7 w-7 rounded-full bg-emerald-400" />
                        <div className="absolute left-16 top-8 h-5 w-20 rounded-full bg-slate-700" />
                        <div className="absolute left-6 bottom-6 flex gap-1">
                          <div className="h-4 w-6 rounded-sm bg-emerald-400/70" />
                          <div className="h-6 w-6 rounded-sm bg-emerald-400/90" />
                          <div className="h-3 w-6 rounded-sm bg-emerald-400/60" />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="px-4 pb-4 space-y-1">
                    <p className="text-[10px] font-semibold uppercase text-slate-500">{card.label}</p>
                    <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                    <p className="text-[11px] text-slate-500">{card.meta}</p>
                    <p className="text-xs text-slate-600">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <button className="mt-2 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
              See more crypto basics
            </button>
          </div>

          {/* What is... chips now below basics so the section is longer */}
          <aside className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 text-white mb-2">
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-70" />
              <div className="absolute -left-10 bottom-0 h-20 w-24 rounded-3xl bg-gradient-to-tr from-emerald-400/60 via-emerald-500/70 to-teal-500/80 opacity-60" />
              <div className="relative space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-200">Glossary</p>
                <p className="text-sm font-semibold">Look up common crypto terms</p>
                <p className="text-[11px] text-slate-200/90 max-w-xs">
                  Quickly explore short explainers on key concepts like Bitcoin, DeFi, wallets, and more.
                </p>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">What is...</h2>
            <p className="text-xs text-slate-600 max-w-xs">
              Tap on a term to see a short definition and understand how it fits into the broader crypto
              ecosystem.
            </p>
            <div className="flex flex-wrap gap-3">
              {whatIsChips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-full bg-white border border-slate-200 px-4 py-2 text-xs font-medium text-slate-800"
                >
                  {chip}
                </div>
              ))}
            </div>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-slate-100">
              See more
            </button>
          </aside>
        </section>
      </div>
    </div>
  );
}


import { useParams, Link } from "react-router-dom";
import { cryptos } from "../data/cryptos";
import CryptoCard from "../components/crypto/CryptoCard";
import PriceChart from "../components/crypto/PriceChart";

export default function AssetDetail() {
  const { id } = useParams();
  const crypto = cryptos.find((c) => c.id === id);

  if (!crypto) {
    return (
      <div className="min-h-screen w-full bg-white text-slate-900 p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Asset Not Found</h1>
        <Link to="/explore" className="text-blue-600 underline">Back to Explore</Link>
      </div>
    );
  }


  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <div className="bg-white w-full h-full p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-gray-900">{crypto.name} ({crypto.symbol})</h1>
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <CryptoCard
            name={crypto.name}
            symbol={crypto.symbol}
            price={crypto.price}
            change={crypto.change}
            icon={<img src={crypto.icon} alt={crypto.name} className="w-10 h-10" />}
          />
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <PriceChart data={crypto.chart} />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/explore"
            className="text-blue-600 underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Back to Explore"
          >
            Back to Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

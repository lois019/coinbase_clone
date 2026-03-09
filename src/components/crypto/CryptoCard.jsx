/**
 * CryptoCard component
 * Props:
 * - name: crypto name
 * - symbol: crypto symbol
 * - price: current price
 * - change: price change (24h)
 * - icon: image url or JSX
 * - className: extra Tailwind classes
 */
export default function CryptoCard({ name, symbol, price, change, icon, className = "" }) {
  return (
    <div className={`bg-gray-100 rounded-lg shadow p-4 flex items-center space-x-4 ${className}`}>
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-bold text-lg">{name} <span className="text-gray-500 text-sm">({symbol})</span></div>
        <div className="text-blue-700 font-semibold">${price}</div>
        <div className={change >= 0 ? "text-green-600" : "text-red-600"}>
          {change >= 0 ? "+" : ""}{change}%
        </div>
      </div>
    </div>
  );
}

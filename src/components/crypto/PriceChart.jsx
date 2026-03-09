/**
 * PriceChart component
 * Props:
 * - data: array of price points [{ time, price }]
 * - className: extra Tailwind classes
 *
 * This is a simple placeholder. For a real chart, use a chart library like recharts or chart.js.
 */
export default function PriceChart({ data = [], className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      <div className="font-bold mb-2">Price Chart (24h)</div>
      <div className="h-32 flex items-end space-x-1">
        {data.length === 0 ? (
          <div className="text-gray-400">No data available</div>
        ) : (
          data.map((point, idx) => (
            <div
              key={idx}
              className="bg-blue-400 w-2"
              style={{ height: `${Math.max(10, point.price / 10)}px` }}
              title={`$${point.price} at ${point.time}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

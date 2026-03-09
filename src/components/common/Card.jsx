/**
 * Reusable Card component
 * Props:
 * - children: card content
 * - className: extra Tailwind classes
 */
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      {children}
    </div>
  );
}

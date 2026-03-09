/**
 * Reusable Input component
 * Props:
 * - type: input type (default: text)
 * - value: input value
 * - onChange: change handler
 * - placeholder: placeholder text
 * - className: extra Tailwind classes
 */
export default function Input({ type = "text", value, onChange, placeholder = "", className = "" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}

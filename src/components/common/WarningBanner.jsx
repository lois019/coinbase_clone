import { useState } from 'react';

export default function WarningBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-amber-600 mt-0.5">⚠️</span>
          <div className="text-sm text-amber-800">
            <p className="font-semibold">Student Project Notice</p>
            <p className="mt-1">This is a student project for educational purposes only. It is not affiliated with, endorsed by, or connected to Coinbase or any other cryptocurrency platform.</p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-amber-600 hover:text-amber-800 transition p-1"
          aria-label="Close warning"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
import React from "react";

const shorteners = [
  { name: "shorturl.asia", url: "https://shorturl.asia" },
  { name: "goo.su", url: "https://goo.su" },
  { name: "short-link.me", url: "https://short-link.me" },
  { name: "sor.bz", url: "https://sor.bz" },
  { name: "surl.asia", url: "https://surl.asia" },
  { name: "tiny.cc", url: "https://tiny.cc" },
  { name: "is.gd", url: "https://is.gd" },
];

interface ShortenerSelectorProps {
  selectedShortener: string;
  setSelectedShortener: (url: string) => void;
}

const ShortenerSelector: React.FC<ShortenerSelectorProps> = ({
  selectedShortener,
  setSelectedShortener,
}) => {
  const handleOpenShortener = () => {
    window.open(selectedShortener, "_blank");
  };

  return (
    <div className="mt-4 p-4 border border-red-500 rounded-lg bg-black bg-opacity-60">
      <label className="block text-red-300 mb-2 text-left font-mono">
        Choose URL Shortener
      </label>
      <select
        value={selectedShortener}
        onChange={e => setSelectedShortener(e.target.value)}
        className="w-full h-10 bg-black border-2 border-red-400 text-white px-3 rounded mb-4 focus:outline-none font-mono"
      >
        {shorteners.map((s) => (
          <option key={s.url} value={s.url}>
            {s.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleOpenShortener}
        className="w-full h-10 bg-red-800 hover:bg-red-700 text-white font-bold rounded transition flex items-center justify-center gap-2"
      >
        <span>🔗</span> Open Selected Shortener
      </button>
    </div>
  );
};

export default ShortenerSelector; 
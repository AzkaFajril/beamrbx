import React, { useState } from 'react';
import ShortenerSelector from './ShortenerSelector';

const HyperlinkFormatter: React.FC = () => {
  const [linkType, setLinkType] = useState('Group');
  const [originalUrl, setOriginalUrl] = useState('https//www.roblox.com/groups/78092472/');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [formattedLink, setFormattedLink] = useState('');
  const [selectedShortener, setSelectedShortener] = useState("https://shorturl.asia");
  const [copied, setCopied] = useState(false);

  const handleLinkTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setLinkType(type);
    if (type === 'Profile') {
      setOriginalUrl('https//www.roblox.com/users/78092747422/profile');
    } else if (type === 'PrivateServer') {
      setOriginalUrl('https//www.roblox.com/share?code=116562041fd4d54681b915675dd54767&type=Server');
    } else if (type === 'Group') {
      setOriginalUrl('https//www.roblox.com/groups/78092472/');
    }
  };

  const generateFormattedLink = () => {
    setFormattedLink(`[${originalUrl}](${shortenedUrl})`);
  };

  return (
    <div className="p-6 pt-16 bg-gray-800 text-white rounded-lg shadow-md relative">
      <a
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gray-700 text-white px-3 py-2 sm:px-4 rounded-lg shadow hover:bg-gray-600 transition text-sm sm:text-base"
      >
        ← Back to Home
      </a>
      <ShortenerSelector
        selectedShortener={selectedShortener}
        setSelectedShortener={setSelectedShortener}
      />
      <h1 className="text-3xl font-bold text-red-400">HYPERLINK FORMATTER</h1>

      <label className="block mt-4">
        <span>Link Type</span>
        <select
          value={linkType}
          onChange={handleLinkTypeChange}
          className="mt-1 block w-full h-10 px-3 border border-red-600 rounded bg-gray-800 focus:outline-none"
        >
          <option value="Profile">Profile</option>
          <option value="PrivateServer">Private Server</option>
          <option value="Group">Group</option>
        </select>
      </label>

      <label className="block mt-4">
        <span>Original URL</span>
        <input
          value={originalUrl}
          readOnly
          className="mt-1 block w-full h-10 px-3 border border-red-600 rounded bg-gray-800 focus:outline-none"
        />
      </label>

      <label className="block mt-4">
        <span>Shortened URL (paste from shortener)</span>
        <input
          type="text"
          value={shortenedUrl}
          onChange={(e) => setShortenedUrl(e.target.value)}
          className="mt-1 block w-full h-10 px-3 border border-red-600 rounded bg-gray-800 focus:outline-none"
        />
      </label>

      <button
        onClick={generateFormattedLink}
        className="mt-4 w-full h-10 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-150 active:scale-95"
      >
        Generate Formatted Link
      </button>

      <div className="mt-4">
        <span>Formatted Hyperlink:</span>
        <textarea
          readOnly
          value={formattedLink}
          className="mt-1 block w-full h-20 p-2 border border-red-600 rounded bg-gray-800"
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(formattedLink)
              .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                console.log("Success copy");
              })
              .catch(() => {
                setCopied(false);
                console.log("Failed to copy");
              });
          }}
          className="mt-2 px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-150 active:scale-95"
        >
          Copy
        </button>
        {copied && (
          <div className="mt-2 text-green-400 font-mono text-sm">
            Success to copy
          </div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold text-red-400">LINK TEMPLATES</h2>
        <p className="mt-2">First, shorten your URL using one of the shorteners above.</p>
        <p>Then use the shortener to create the proper hyperlink format:</p>
        
        <div className="mt-4">
          <div className="flex items-center">
            <h3 className="text-red-400 font-bold">🔗 PROFILE</h3>
            <span className="ml-2">: [https://www.roblox.com/users/78092747422/profile](u link)</span>
          </div>
          <div className="flex items-center mt-2">
            <h3 className="text-red-400 font-bold">🔗 PRIVATE SERVER</h3>
            <span className="ml-2">: [https://www.roblox.com/share?code=116562041fd4d54681b915675dd54767&type=Server](u link)</span>
          </div>
          <div className="flex items-center mt-2">
            <h3 className="text-red-400 font-bold">🔗 GROUP</h3>
            <span className="ml-2">: [https://www.roblox.com/groups/78092472/](u link)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyperlinkFormatter;

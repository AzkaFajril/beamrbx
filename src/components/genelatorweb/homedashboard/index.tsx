import { FaDatabase, FaStar, FaRocket, FaHeart } from 'react-icons/fa';

const cards = [
  {
    name: 'INJURIES',
    description: 'The NEWGEN revolutionary',
    status: 'REVOLUTIONARY',
    score: 85,
    features: ['Advaced Ai', 'Realstic Output'],
    icon: <FaHeart className="text-red-500" />,
    statusColor: 'text-yellow-400',
    button: 'Launch SPLUNK',
    link: '/injuries'
  },
  {
    name: 'SPLUNK',
    description: 'The controversial pioneer',
    status: 'CONTROVERSIAL',
    score: 85,
    features: ['Data Analytics', 'Log Processing'],
    icon: <FaDatabase className="text-red-500" />,
    statusColor: 'text-yellow-400',
    button: 'Launch SPLUNK',
    link: '/splunk'
  },
  {
    name: 'IMMORTAL',
    description: 'The elite veteran',
    status: 'ELITE',
    score: 100,
    features: ['Perfect Generation', 'Legendary Status'],
    icon: <FaStar className="text-red-500" />,
    statusColor: 'text-green-400',
    button: 'Launch IMMORTAL',
    link: '/imortal'
  },
  {
    name: 'SHOCKIFY',
    description: 'The speed specialist',
    status: 'SPECIALIST',
    score: 95,
    features: ['Lightning Fast', 'Shock Effects'],
    icon: <FaRocket className="text-red-500" />,
    statusColor: 'text-blue-400',
    button: 'Launch SHOCKIFY',
    link: '/shockify'
  },
];

const Genelator = () => {
  return (
    <div className="pixelify-sans-bold min-h-screen animated-bg-g flex flex-col items-center justify-center p-2 sm:p-4 relative">
      <a
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gray-700 text-white px-3 py-2 sm:px-4 rounded-lg shadow hover:bg-gray-600 transition text-sm sm:text-base"
      >
        ← Back to Home
      </a>
      <h1 className="text-4xl sm:text-5xl font-bold">
        <span className="text-teal-400">Generator</span>{" "}
        <span className="text-white">Selection</span>
      </h1>
      <p className="mt-6 max-w-xl text-gray-300 text-lg sm:text-xl leading-relaxed">
        Choose your preferred generator for advanced content creation and data
        processing.
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-xs xs:max-w-2xl md:max-w-4xl lg:max-w-6xl pt-16">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-center">
            <div className="text-3xl sm:text-4xl mb-2">{card.icon}</div>
            <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center">{card.name}</h1>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 text-center">{card.description}</p>
            
            <h2 className="text-white text-base sm:text-lg font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside text-gray-400 mb-4 sm:mb-6 text-left w-full">
              {card.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h2 className="text-white text-base sm:text-lg font-semibold mb-2">Performance</h2>
            <p className="text-gray-400 text-xs sm:text-sm">Efficiency: <span className="text-green-500">{card.score}%</span></p>
            <p className="text-gray-400 text-xs sm:text-sm">Status: <span className={`${card.statusColor} font-bold`}>{card.status}</span></p>
            
            <div className="w-full bg-gray-600 rounded-full h-2 mb-3 sm:mb-4 mt-2">
              <div className="bg-pink-500 h-2 rounded-full" style={{ width: `${card.score}%` }}></div>
            </div>

            <a
              href={card.link}
              rel="noopener noreferrer"
              className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-200 mt-auto text-xs sm:text-base w-full text-center block"
            >
              {card.button}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genelator;

import { FaBolt, FaPlay, FaDatabase, FaShieldAlt, FaCodeBranch } from "react-icons/fa";

const modules = [
  {
    icon: <FaBolt className="text-cyan-400 text-2xl" />,
    category: "ADVANCED",
    level: "EXPERT",
    duration: "15 min",
    title: "HOW TO CREATE IMMORTAL/SHOCKIFY AND HOW TO USE AUTOSECURE TUTORIAL",
    modules: 4,
    resources: ["VID", "VID", "VID", "VID"],
    color: "cyan-400",
  },
  {
    icon: <FaCodeBranch className="text-pink-400 text-2xl" />,
    category: "INTEGRATION",
    level: "INTERMEDIATE",
    duration: "8 min",
    title: "HOW TO MAKE A WEBHOOK TUTORIAL",
    modules: 2,
    resources: ["TXT", "LNK"],
    color: "pink-400",
  },
  {
    icon: <FaShieldAlt className="text-cyan-400 text-2xl" />,
    category: "SECURITY",
    level: "ADVANCED",
    duration: "12 min",
    title: "HOW TO MAKE INJURIES",
    modules: 4,
    resources: ["VID", "VID", "VID", "VID"],
    color: "cyan-400",
  },
  {
    icon: <FaDatabase className="text-cyan-400 text-2xl" />,
    category: "ANALYTICS",
    level: "BEGINNER",
    duration: "5 min",
    title: "HOW TO MAKE A SPLUNK",
    modules: 2,
    resources: ["VID", "LNK"],
    color: "cyan-400",
  },
];

export default function TrainingProtocols() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-8">
      <div className="border border-cyan-400 rounded-xl p-8 w-full max-w-6xl bg-black/80">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
          </div>
          <h1 className="text-3xl font-mono font-bold tracking-widest text-center">
            <span className="text-cyan-400">TRAINING</span>{" "}
            <span className="text-pink-400">PROTOCOLS</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-[#10141a] border border-cyan-900 rounded-lg p-6 flex flex-col justify-between relative"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#1a2230] rounded-full p-3 mr-4">{mod.icon}</div>
                <div>
                  <span className="font-mono text-cyan-400 font-bold">{mod.category}</span>
                  <span className="font-mono text-cyan-400 font-bold"> • {mod.level}</span>
                  <div className="text-gray-400 text-xs">Duration: {mod.duration}</div>
                </div>
                <FaPlay className="absolute top-6 right-6 text-cyan-400 text-xl" />
              </div>
              <div>
                <h2 className="font-mono text-white text-xl font-extrabold mb-2 leading-tight">
                  {mod.title}
                </h2>
                <div className="text-gray-400 font-mono text-sm mb-2">
                  {mod.modules} modules available
                </div>
                <div className="flex space-x-4 font-mono text-cyan-400 text-sm">
                  {mod.resources.map((r, i) => (
                    <span key={i}>•{r}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

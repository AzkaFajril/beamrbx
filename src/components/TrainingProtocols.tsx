import { useState } from "react";
import type { MouseEvent } from "react";
import { FaBolt, FaCodeBranch, FaShieldAlt, FaDatabase, FaPlay } from "react-icons/fa";

// Data modules
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

// Modal component with TypeScript props
type DualhookModalProps = {
  open: boolean;
  onClose: () => void;
};

function DualhookModal({ open, onClose }: DualhookModalProps) {
  if (!open) return null;
  // Prevent modal close when clicking inside modal
  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="bg-[#18192a] border-2 border-pink-400 rounded-xl w-full max-w-lg p-6 relative text-white font-mono"
        onClick={handleModalClick}
      >
        <button
          className="absolute top-4 right-6 text-pink-400 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex items-center mb-4">
          <span className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-xl">🟡</span>
          <div>
            <div className="font-bold text-lg">Dualhook Method (OP)</div>
            <div className="text-pink-200 text-xs">Complete Tutorial Guide</div>
          </div>
        </div>
        <div className="mb-3">
          <div className="text-pink-400 font-bold">Overview</div>
          <div className="text-white text-sm">
            DualHook refers to a technology that uses a dual hook structure for increased holding force and a secure interlock. You can find new beamers and make them use your dualhooked sites.
          </div>
        </div>
        <div className="mb-3">
          <div className="text-pink-400 font-bold">Requirements</div>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Discord server template access</li>
            <li>Webhook setup knowledge</li>
            <li>YouTube account for promotion</li>
            <li>Basic understanding of generators</li>
          </ul>
        </div>
        <div>
          <div className="text-pink-400 font-bold mb-1">Step-by-Step Guide</div>
          <div className="bg-[#18192a] border border-pink-400 rounded-lg p-3 mb-2">
            <div className="font-bold mb-1">What is Dualhook?</div>
            <div className="text-xs">
              DUALHOOK IS GETTING PPL BEAMS BY USING OPTIONS DUALHOOK IN OUR SITES. You can find new beamers and make them use your dualhooked sites and they will beam people for you.
            </div>
          </div>
          <div className="bg-black border border-green-400 rounded p-2 text-green-400 text-xs text-center">
            ✦ HOW TO DO DUALHOOK AND WHAT IS DUALHOOK ✦
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrainingProtocols() {
  const [modalOpen, setModalOpen] = useState(false);

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
              className="bg-[#10141a] border border-cyan-900 rounded-lg p-6 flex flex-col justify-between relative cursor-pointer"
              onClick={() => setModalOpen(true)}
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
      <DualhookModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
} 
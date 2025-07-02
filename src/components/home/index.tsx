import "../../index.css";
import React from 'react';
import { FaCrown } from 'react-icons/fa'; 
import { AiOutlineLink } from 'react-icons/ai';
import { MdCardGiftcard } from 'react-icons/md'; 
import { TbBracketsAngle } from "react-icons/tb";

const Dashboard: React.FC = () => {
  return (
    <div className="pixelify-sans-bold animated-bg-db text-white min-h-screen flex flex-col items-center p-5">
      <header className="w-full text-center py-6">
        <h1 className="text-4xl sm:text-6xl md:text-[8rem] font-bold">BOKB ON TOP</h1>
        <div className="flex justify-center gap-3 mt-2">
          <span className="text-white rounded px-3 py-1 text-[1.3rem] font-semibold shadow">🟢 Discord Support</span>
          <span className="text-white rounded px-3 py-1 text-[1.3rem] font-semibold shadow">🟢 Tiktok Support</span>
          <span className="text-white rounded px-3 py-1 text-[1.3rem] font-semibold shadow">🟢 Browser Support</span>
        </div>
        <p className="text-md p-5">https://discord.gg/9augvSyZPN</p>
        <a
          href="https://discord.gg/9augvSyZPN"
          className="text-blue-200 underline bg-blue-900 px-4 py-2 rounded-lg inline-block shadow-md hover:bg-blue-800 transition w-[26rem] text-center"
        >
          Join Discord Server
        </a>
      </header>

      <main className="flex flex-col gap-8 w-auto ">
        <section className="bg-purple-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">MAIN DASHBOARD</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="/Genelator" 
              className="bg-gradient-to-r from-red-600 to-red-800 p-4 rounded-lg shadow-md w-auto h-40 flex flex-col justify-center hover:bg-red-700 transition-colors duration-300"
            >
              <div className="flex items-center mb-2">
                <FaCrown className="text-yellow-400 text-3xl" />
                <h3 className="font-semibold text-2xl ml-2">Generator</h3>
              </div>
              <p className="text-sm">Advanced generation tools</p>
            </a>
            <a 
              href="/autohar" 
              className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 rounded-lg shadow-md w-auto h-40 flex flex-col justify-center hover:bg-purple-700 transition-colors duration-300"
            >
              <div className="flex items-center mb-2">
                <TbBracketsAngle className="text-yellow-400 text-3xl" />
                <h3 className="font-semibold text-2xl ml-2">AutoHar</h3>
              </div>
              <p className="text-sm">Automated solutions</p>
            </a>
            <a 
              href="/hyperlink" 
              className="bg-blue-700 p-4 rounded-lg shadow-md w-full sm:w-[20rem] md:w-[28rem] lg:w-[32rem] flex flex-col justify-center hover:bg-blue-800 transition-colors duration-300 mx-auto"
            >
              <div className="flex items-center mb-2">
                <AiOutlineLink className="text-yellow-400 text-3xl" />
                <h3 className="font-semibold text-2xl ml-2">Hyperlink</h3>
              </div>
            </a>
            <a 
              href="https://starblox.netlify.app/"
              target="_blank"
              className="bg-green-700 p-4 rounded-lg shadow-md flex flex-col justify-center hover:bg-green-800 transition-colors duration-300"
            >
              <div className="flex items-center mb-2">
                <MdCardGiftcard className="text-yellow-400 text-3xl" />
                <h3 className="font-semibold text-2xl ml-2">Bypas</h3>
              </div>
            </a>
          </div>
          <p className="text-red-400 mt-4 text-center">* If services are temporarily unavailable, please be patient *</p>
        </section>

        <section className="bg-blue-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">BEAMING RESOURCES</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a className="bg-orange-500 p-4 rounded-lg shadow-md text-center hover:bg-orange-600 transition-colors duration-300">
              <div className="mb-2">
                <span className="text-yellow-400 text-3xl">⚡</span>
              </div>
              <h3 className="font-semibold">Tutorials</h3>
              <p className="text-sm">Step-by-step guides</p>
            </a>
            <a className="bg-purple-500 p-4 rounded-lg shadow-md text-center hover:bg-purple-600 transition-colors duration-300">
              <div className="mb-2">
                <span className="text-yellow-400 text-3xl">🔵</span>
              </div>
              <h3 className="font-semibold">Methods</h3>
              <p className="text-sm">Advanced techniques</p>
            </a>
            <a className="bg-blue-600 p-4 rounded-lg shadow-md text-center hover:bg-blue-700 transition-colors duration-300">
              <div className="mb-2">
                <span className="text-yellow-400 text-3xl">👥</span>
              </div>
              <h3 className="font-semibold">Server to Hit</h3>
              <p className="text-sm">Target servers</p>
            </a>
            <a className="bg-green-500 p-4 rounded-lg shadow-md text-center hover:bg-green-600 transition-colors duration-300">
              <div className="mb-2">
                <span className="text-yellow-400 text-3xl">🔄</span>
              </div>
              <h3 className="font-semibold">Loop Video</h3>
              <p className="text-sm">Brand proof videos</p>
            </a>
          </div>
          <a href="#all-tools" className="text-blue-500 underline block text-center mt-4">View All Tools</a>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

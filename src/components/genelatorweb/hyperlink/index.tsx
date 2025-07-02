

export default function Hyperlink(){
    return(
        <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Coming Soon</h1>
          <p className="text-lg text-gray-400 mb-8">We're working hard to get this site up and running. Stay tuned!</p>
          <div className="flex justify-center">
            <div className="w-48 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-500 mt-4">Thank you for your patience!</p>
        </div>
      </div>
    )
}
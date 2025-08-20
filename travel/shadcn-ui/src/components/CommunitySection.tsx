export default function CommunitySection() {
  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      {/* Background Insightlancer watermark */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-8xl font-bold text-gray-100 opacity-20 select-none">
        Insightlancer
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        {/* Section header */}
        <div className="space-y-4 mb-16">
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">
            BUILD UP A COMMUNITY
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Join the biggest community of Travellers
          </h2>
          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="w-16 h-0.5 bg-teal-600"></div>
          </div>
        </div>

        {/* Community visualization */}
        <div className="relative max-w-4xl mx-auto h-96 flex items-center justify-center">
          {/* Central teal shape */}
          <div className="absolute w-80 h-80 bg-teal-600 rounded-full opacity-20 transform rotate-12"></div>
          <div className="absolute w-72 h-72 bg-teal-600 rounded-full opacity-30 transform -rotate-6"></div>
          
          {/* Central travel card */}
          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-4 w-64 transform hover:scale-105 transition-transform duration-300">
            <div className="h-32 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl mb-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold text-lg">Hill Station</h3>
              </div>
            </div>
            <div className="flex -space-x-2 justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
          </div>

          {/* Floating user cards */}
          {/* Peggy - Top Left */}
          <div className="absolute top-4 left-8 bg-white rounded-xl shadow-lg p-3 w-20 text-center transform hover:scale-105 transition-transform duration-300 animate-pulse">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mx-auto mb-2"></div>
            <div className="text-xs font-semibold text-gray-900">Peggy</div>
            <div className="text-xs text-gray-500">Florida</div>
          </div>

          {/* Janet - Top Right */}
          <div className="absolute top-12 right-12 bg-white rounded-xl shadow-lg p-3 w-20 text-center transform hover:scale-105 transition-transform duration-300 animate-pulse" style={{animationDelay: '0.5s'}}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full mx-auto mb-2"></div>
            <div className="text-xs font-semibold text-gray-900">Janet</div>
            <div className="text-xs text-gray-500">Ohio</div>
          </div>

          {/* Leonard - Right */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-3 w-20 text-center hover:scale-105 transition-transform duration-300 animate-pulse" style={{animationDelay: '1s'}}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-2"></div>
            <div className="text-xs font-semibold text-gray-900">Leonard</div>
            <div className="text-xs text-gray-500">California</div>
          </div>

          {/* Halima - Bottom Right */}
          <div className="absolute bottom-8 right-16 bg-white rounded-xl shadow-lg p-3 w-20 text-center transform hover:scale-105 transition-transform duration-300 animate-pulse" style={{animationDelay: '1.5s'}}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full mx-auto mb-2"></div>
            <div className="text-xs font-semibold text-gray-900">Halima</div>
            <div className="text-xs text-gray-500">New York</div>
          </div>

          {/* California user - Bottom Left */}
          <div className="absolute bottom-16 left-20 bg-white rounded-xl shadow-lg p-3 w-20 text-center transform hover:scale-105 transition-transform duration-300 animate-pulse" style={{animationDelay: '2s'}}>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mx-auto mb-2"></div>
            <div className="text-xs font-semibold text-gray-900">Alex</div>
            <div className="text-xs text-gray-500">California</div>
          </div>

          {/* Additional floating elements for visual interest */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-teal-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-green-300 rounded-full animate-bounce" style={{animationDelay: '1.2s'}}></div>
          
          {/* Background decorative shapes */}
          <div className="absolute top-8 right-1/4 w-16 h-16 bg-gray-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-12 left-1/3 w-20 h-20 bg-gray-100 rounded-full opacity-30"></div>
          <div className="absolute top-1/3 left-8 w-12 h-12 bg-gray-100 rounded-full opacity-40"></div>
        </div>

        {/* Call to action */}
        <div className="mt-16 space-y-6">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow travelers, share your experiences, and discover amazing destinations together. 
            Join thousands of adventurers exploring the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Join Community
            </button>
            <button className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
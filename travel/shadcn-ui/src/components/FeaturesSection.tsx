export default function FeaturesSection() {
  return (
    <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
      {/* Background Insightlancer watermark */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-8xl font-bold text-gray-200 opacity-20 select-none">
        Insightlancer
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section header */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                WHY CHOOSE US
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We offer best services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover amazing places and create unforgettable memories with our comprehensive travel services designed to make your journey seamless and enjoyable.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-6">
              {/* Feature 1 - Weather */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather Forecast</h3>
                  <p className="text-gray-600">Get real-time weather updates and forecasts for your destination to plan your activities accordingly.</p>
                </div>
              </div>

              {/* Feature 2 - Best Tour Guide */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Tour Guide</h3>
                  <p className="text-gray-600">Connect with experienced local guides who know the hidden gems and can enhance your travel experience.</p>
                </div>
              </div>

              {/* Feature 3 - Easy Booking */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Booking</h3>
                  <p className="text-gray-600">Simple and secure booking process with instant confirmation and flexible cancellation options.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main illustration container */}
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-teal-100 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>
                <div className="absolute top-1/2 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-40"></div>

                {/* Central device/map illustration */}
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Map/Navigation interface */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-900">Navigation</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Map area */}
                    <div className="h-40 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl relative overflow-hidden">
                      {/* Route lines */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160">
                        <path d="M20 80 Q60 40 100 80 T180 80" stroke="#0d9488" strokeWidth="3" fill="none" strokeDasharray="5,5" opacity="0.7">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                        </path>
                      </svg>
                      
                      {/* Location pins */}
                      <div className="absolute top-4 left-4 w-4 h-4 bg-teal-600 rounded-full animate-pulse"></div>
                      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-4 right-4 w-4 h-4 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>

                    {/* Info cards */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2L13.09 8.26L20 9L15 13.74L16.18 20.02L10 16.77L3.82 20.02L5 13.74L0 9L6.91 8.26L10 2Z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Mountain View</div>
                          <div className="text-xs text-gray-500">2.5 km away</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Best Route</div>
                          <div className="text-xs text-gray-500">15 min journey</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 left-1/4 bg-white rounded-xl shadow-lg p-2 animate-bounce" style={{animationDelay: '0.2s'}}>
                  <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>

                <div className="absolute -bottom-2 right-1/4 bg-white rounded-xl shadow-lg p-2 animate-bounce" style={{animationDelay: '0.8s'}}>
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L13.09 8.26L20 9L15 13.74L16.18 20.02L10 16.77L3.82 20.02L5 13.74L0 9L6.91 8.26L10 2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
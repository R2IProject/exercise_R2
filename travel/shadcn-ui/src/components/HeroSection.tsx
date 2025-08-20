import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Insightlancer watermark - faded */}
          <div className="text-6xl font-bold text-gray-200 opacity-30 select-none">
            Insightlancer
          </div>
          
          {/* Travel Booking App badge */}
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Travel Booking App</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover the{' '}
              <span className="text-teal-600">Best</span>
              <br />
              <span className="text-teal-600">Lovely</span> Places
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md">
              Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center space-x-3 h-14">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </Button>
            
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center space-x-3 h-14">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pt-8">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
      {/* Phone frame */}
      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 py-2 bg-white">
          <span className="text-sm font-semibold">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L5.5 12H6v2H4.5v-1H4l.85-1.47zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
          </div>
        </div>

        {/* App content */}
        <div className="px-4 py-2 space-y-4">
          {/* Location */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">New York, USA</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Search bar */}
          <div className="bg-gray-100 rounded-lg px-4 py-3 flex items-center space-x-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-gray-500">Search</span>
            <div className="ml-auto bg-teal-600 text-white px-3 py-1 rounded text-xs font-medium">
              GO
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-900">Categories</h3>
              <span className="text-xs text-teal-600">See all</span>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 bg-teal-50 px-3 py-2 rounded-lg">
                <div className="w-6 h-6 bg-teal-600 rounded-full"></div>
                <span className="text-sm font-medium">Lakes</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Sea</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                <span className="text-sm">Mountains</span>
              </div>
            </div>
          </div>

          {/* Top Trip */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-900">Top Trip</h3>
              <span className="text-xs text-teal-600">See all</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-100 rounded-lg h-24 relative overflow-hidden">
                <div className="absolute bottom-2 left-2">
                  <div className="text-xs font-medium text-white">Lake View</div>
                  <div className="text-xs text-gray-200">$49/Day</div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-24 relative overflow-hidden">
                <div className="absolute bottom-2 left-2">
                  <div className="text-xs font-medium text-white">Blue Lake</div>
                  <div className="text-xs text-gray-200">$68/Day</div>
                </div>
              </div>
            </div>
          </div>

          {/* Group Tour */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-900">Group Tour</h3>
              <span className="text-xs text-teal-600">See all</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-3">
              <div className="w-16 h-12 bg-gray-200 rounded-lg"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Mountains Trip</div>
                <div className="text-xs text-gray-500">Travel Crew</div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex -space-x-1">
                    <div className="w-4 h-4 bg-blue-400 rounded-full border border-white"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full border border-white"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full border border-white"></div>
                  </div>
                  <span className="text-xs text-gray-500">89%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-around">
          <div className="w-8 h-8 bg-teal-600 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
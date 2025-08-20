export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      {/* Background Insightlancer watermark */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-8xl font-bold text-gray-100 opacity-20 select-none">
        Insightlancer
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Testimonial Cards */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-teal-100 rounded-full opacity-40"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
            <div className="absolute top-1/3 -left-4 w-16 h-16 bg-yellow-100 rounded-full opacity-50"></div>

            {/* Main testimonial card */}
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Rating stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "Amazing experience! The app made our trip planning so much easier. The local guides were fantastic and showed us places we never would have found on our own. Highly recommended for anyone who loves to travel!"
              </blockquote>

              {/* User info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">S</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Travel Enthusiast</div>
                </div>
              </div>
            </div>

            {/* Secondary testimonial card */}
            <div className="absolute -bottom-4 -right-8 bg-white rounded-2xl shadow-xl p-6 w-72 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                "Great service and wonderful destinations. The booking process was seamless!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">M</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">Mike Chen</div>
                  <div className="text-xs text-gray-500">Adventure Seeker</div>
                </div>
              </div>
            </div>

            {/* Floating quote icon */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center opacity-10 animate-pulse">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Section header */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                TESTIMONIALS
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                What people say<br />
                <span className="text-teal-600">about Us</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Don't just take our word for it. Here's what our satisfied customers have to say about their amazing travel experiences with us.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">50K+</div>
                <div className="text-gray-600 font-medium">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">4.9</div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">200+</div>
                <div className="text-gray-600 font-medium">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">10K+</div>
                <div className="text-gray-600 font-medium">Reviews</div>
              </div>
            </div>

            {/* Customer photos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Trusted by travelers worldwide</h3>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-400 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    +5K
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Join thousands of satisfied customers
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Read More Reviews
              </button>
              <button className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
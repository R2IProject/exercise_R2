export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">Travelapp</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Discover amazing places and create unforgettable memories with our comprehensive travel services designed to make your journey seamless and enjoyable.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.333 1.363-.053.225-.172.271-.402.162-1.499-.69-2.436-2.878-2.436-4.628 0-3.778 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c0 2.208-1.789 3.997-3.997 3.997z"/>
                    <path d="M16.948.076c-2.209-.123-7.508-.123-9.717 0-2.11.119-3.746 1.754-3.865 3.865-.123 2.209-.123 7.508 0 9.717.119 2.11 1.754 3.746 3.865 3.865 2.209.123 7.508.123 9.717 0 2.11-.119 3.746-1.754 3.865-3.865.123-2.209.123-7.508 0-9.717-.119-2.11-1.754-3.746-3.865-3.865zm-1.29 17.087c-.872.349-3.096.268-4.109.268-1.014 0-3.237.081-4.109-.268-1.005-.396-1.713-1.104-2.109-2.109-.349-.872-.268-3.096-.268-4.109s-.081-3.237.268-4.109c.396-1.005 1.104-1.713 2.109-2.109.872-.349 3.096-.268 4.109-.268s3.237-.081 4.109.268c1.005.396 1.713 1.104 2.109 2.109.349.872.268 3.096.268 4.109s.081 3.237-.268 4.109c-.396 1.005-1.104 1.713-2.109 2.109z"/>
                    <path d="M18.821 6.153c-.596 0-1.084-.487-1.084-1.084s.487-1.084 1.084-1.084c.596 0 1.084.487 1.084 1.084s-.487 1.084-1.084 1.084z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Destinations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Tours</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Flight Booking</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Hotel Reservation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Car Rental</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Tour Packages</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">Travel Insurance</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">24/7 Support</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest travel deals and destination updates.
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-r-lg transition-colors duration-200 font-medium">
                    Subscribe
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="w-4 h-4 text-teal-600 bg-gray-800 border-gray-600 rounded focus:ring-teal-500 focus:ring-2" />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the <a href="#" className="text-teal-400 hover:underline">Terms & Conditions</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Travelapp. All rights reserved. Built with ❤️ for travelers worldwide.
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
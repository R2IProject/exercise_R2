import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">Travelapp</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-teal-600 font-medium relative">
            Review
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600"></div>
          </a>
          <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">People</a>
          <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Partners</a>
          <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Feedback</a>
          <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Pricing</a>
        </nav>

        {/* Get the app button */}
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium">
          Get the app
        </Button>
      </div>
    </header>
  );
}
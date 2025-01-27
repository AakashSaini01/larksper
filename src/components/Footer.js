export default function Footer() {
  return (
    <footer className="bg-Bloom text-gray-600">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Company Logo and Description */}
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-indigo-500 text-2xl font-bold">🌊</span>
            </div>
            <p className="mt-4 text-sm">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="text-gray-500 hover:text-indigo-500">
                <i className="fab fa-facebook"></i> {/* Facebook Icon */}
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-500">
                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-500">
                <i className="fab fa-twitter"></i> {/* X/Twitter Icon */}
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-500">
                <i className="fab fa-github"></i> {/* GitHub Icon */}
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-500">
                <i className="fab fa-youtube"></i> {/* YouTube Icon */}
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Solutions
            </h3>
            <ul className="mt-4 space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Submit ticket
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-8">
          <p className="text-sm text-center text-gray-500">
            © 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

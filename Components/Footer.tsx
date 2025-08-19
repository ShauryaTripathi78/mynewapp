import * as React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-300 py-8" id="footer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
        {/* Branches */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Our Branches</h3>
          <span className="flex items-center gap-2 text-gray-700">
            <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" /> India
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" /> Russia
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" /> Japan
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" /> France
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" /> Canada
          </span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <span className="flex items-center gap-2 text-gray-700">
            <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" /> +91 7275533175
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" /> +123-456-789
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" /> tripathi78@gmail.com
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" /> Lucknow, Uttar Pradesh, 220116
          </span>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <span className="inline-block w-4 h-4 bg-blue-600 rounded-full" /> Facebook
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-400">
            <span className="inline-block w-4 h-4 bg-blue-400 rounded-full" /> Twitter
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-pink-500">
            <span className="inline-block w-4 h-4 bg-pink-500 rounded-full" /> Instagram
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-700">
            <span className="inline-block w-4 h-4 bg-blue-700 rounded-full" /> Linkedin
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
            <span className="inline-block w-4 h-4 bg-red-600 rounded-full" /> Pinterest
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
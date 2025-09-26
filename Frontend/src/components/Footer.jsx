import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#d5fbf2] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600">
            © 2025 LeetCode. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              to="/privacy"
              className="text-sm text-gray-600 hover:text-[#00b8a3] hover:underline transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-600 hover:text-[#00b8a3] hover:underline transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#3a3a3a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#b3b3b3] text-sm">
            © 2025 LeetCode. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              to="/privacy"
              className="text-[#b3b3b3] hover:text-white transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#b3b3b3] hover:text-white transition-colors duration-200 text-sm"
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

import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X,
  Code, 
  User, 
  LogOut, 
  Bell, 
  Search, 
  Settings,
  Trophy,
  Compass,
  BookOpen,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State for mobile menu and user dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const isLoggedIn = true;

  // Navigation items
  const navItems = [
    { name: "Explore", path: "/", icon: Compass },
    { name: "Problems", path: "/problems", icon: Code },
    { name: "Discuss", path: "/discuss", icon: MessageSquare },
    { name: "Contest", path: "/contest", icon: Trophy },
    { name: "Store", path: "/store", icon: BookOpen },
  ];

  // User menu items
  const userMenuItems = [
    { name: "Profile", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings },
    { name: "Sign Out", path: "/logout", icon: LogOut },
  ];

  // Check if current page is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#1a1a1a] border-b border-[#3a3a3a] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-[#00b8a3] rounded flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Code Ground</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-[#2a2a2a] text-white"
                    : "text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Side - Search and User */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#666666]" />
                <input
                  type="text"
                  placeholder="Search problems..."
                  className="w-64 pl-10 pr-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#00b8a3] focus:ring-1 focus:ring-[#00b8a3]"
                />
              </div>
            </div>

            {/* Notifications */}
            <button className="p-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
              <Bell className="h-5 w-5" />
            </button>

            {/* User Menu or Auth Buttons */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-[#2a2a2a] rounded-md transition-colors"
                >
                  <div className="h-6 w-6 bg-[#00b8a3] rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <ChevronDown className="h-4 w-4 text-[#b3b3b3]" />
                </button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md shadow-lg py-1 z-50">
                    {userMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-[#b3b3b3] hover:text-white hover:bg-[#333333] transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-[#b3b3b3] hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-[#00b8a3] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#00a693] transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-[#3a3a3a]">
            <div className="px-4 py-4 space-y-1">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#666666]" />
                  <input
                    type="text"
                    placeholder="Search problems..."
                    className="w-full pl-10 pr-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#00b8a3]"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-[#2a2a2a] text-white"
                      : "text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              {!isLoggedIn && (
                <div className="pt-4 border-t border-[#3a3a3a] space-y-2">
                  <Link
                    to="/login"
                    className="block px-3 py-3 text-[#b3b3b3] hover:text-white text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-3 bg-[#00b8a3] text-white rounded-md text-sm font-medium text-center hover:bg-[#00a693]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

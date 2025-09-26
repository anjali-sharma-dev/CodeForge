import React from "react";
import {
  Code,
  Compass,
  BookOpen,
  MessageSquare,
  Trophy,
  User,
  Bell,
  Menu,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/", icon: Compass },
  {name:"Problem",path:"/problem",icon:Quote},
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Interview", path: "/interview", icon: MessageSquare },
  { name: "Contest", path: "/contest", icon: Trophy },
];

const Navbar = () => {
  return (
    <header className="bg-white border-b border-green-300 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-9 w-9 bg-[#00b8a3] rounded flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#00b8a3] ">ALGO</span>
            <span className="text-sm text-gray-500 border-t-1 border-gray-400">Journey</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-[#00b8a3] hover:bg-[#e6fff9] transition"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-[#00b8a3] hover:bg-[#e6fff9] rounded-md transition">
              <Bell className="h-5 w-5" />
            </button>
            <div className="h-7 w-7 bg-[#00b8a3] rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <button
              className="md:hidden p-2 text-[#00b8a3] hover:bg-[#e6fff9] rounded-md"
              onClick={() => {
                const menu = document.getElementById("mobile-nav");
                menu.classList.toggle("hidden");
              }}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div id="mobile-nav" className="md:hidden hidden bg-[#e6fff9] border-t border-green-300">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-[#00b8a3] hover:bg-white transition"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
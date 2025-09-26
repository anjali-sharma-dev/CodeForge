import React from "react";
import {
  Search,
  Plus,
  TrendingUp,
  ThumbsUp,
  MessageCircle,
  Eye,
} from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-white to-[#e6fff9] border-b border-[#e6fff9]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#00b8a3]">Blog</h1>
              <p className="text-gray-600 mt-1">Community Blogions and solutions</p>
            </div>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Blogions..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00b8a3]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-[#f9f9f9] border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Filters</h3>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-600 mb-3">Category</h4>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] transition">
                    All Categories
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] transition">
                    Algorithms
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] transition">
                    System Design
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-600 mb-3">Sort By</h4>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] transition">
                    Latest
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] transition">
                    Popular
                  </button>
                </div>
              </div>

              <button className="w-full bg-[#00b8a3] text-white px-4 py-3 rounded-md font-medium hover:bg-[#00a693] transition flex items-center justify-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Create Post</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-[#f9f9f9] border border-gray-200 rounded-lg mb-4">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-lg font-semibold text-gray-800">Blogions (3)</h2>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-[#00b8a3]" />
                      <span className="text-sm text-gray-600">Trending</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <select className="bg-white border border-gray-300 text-sm text-gray-800 rounded-md px-3 py-1 focus:outline-none focus:ring-[#00b8a3]">
                      <option>Latest</option>
                      <option>Popular</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Posts List */}
              <div className="divide-y divide-gray-200">
                {[1, 2, 3].map((id) => (
                  <div key={id} className="px-6 py-6 hover:bg-[#e6fff9] transition">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                        A
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-gray-800">Author Name</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-600">2h ago</span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#e6fff9] text-[#00b8a3]">
                            Algorithms
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 hover:text-[#00b8a3] cursor-pointer mb-2">
                          How to solve XYZ problem efficiently
                        </h3>

                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          This post explains a clean approach to solving XYZ using binary search and prefix sums...
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>24</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>5</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>120</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <button className="px-3 py-2 text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] rounded-md transition">
                Previous
              </button>
              <button className="px-3 py-2 bg-[#00b8a3] text-white rounded-md">1</button>
              <button className="px-3 py-2 text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] rounded-md transition">2</button>
              <button className="px-3 py-2 text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] rounded-md transition">3</button>
              <button className="px-3 py-2 text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] rounded-md transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
import React from "react";
import {
  Search,
  Trophy,
  Clock,
  Users,
  Play,
} from "lucide-react";

const Contest = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-white to-[#e6fff9] border-b border-[#e6fff9]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#00b8a3]">Contests</h1>
              <p className="text-gray-600 mt-1">Compete with coders and win exciting prizes</p>
            </div>
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contests..."
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
                <h4 className="text-sm font-medium text-gray-600 mb-3">Status</h4>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] transition">Live</button>
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] transition">Upcoming</button>
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] transition">Past</button>
                </div>
              </div>
              <button className="w-full bg-[#00b8a3] text-white px-4 py-3 rounded-md font-medium hover:bg-[#00a693] transition flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Host Contest</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {[1, 2].map((id) => (
              <div key={id} className="bg-[#f9f9f9] border border-gray-200 rounded-xl hover:border-[#00b8a3] transition overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-semibold text-gray-800">Weekly Coding Challenge</h3>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">LIVE</span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#00b8a3] bg-opacity-10 text-[#00b8a3]">REGISTERED</span>
                      </div>
                      <p className="text-sm text-gray-600">Solve 5 algorithmic problems in 2 hours</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />2h 30m</div>
                        <div className="flex items-center"><Users className="w-4 h-4 mr-1" />1,250 participants</div>
                        <div className="flex items-center"><Trophy className="w-4 h-4 mr-1" />$500 prize</div>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">Medium</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Your Progress</span>
                      <span>60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00b8a3] h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>

                  {/* Time Remaining */}
                  <div className="p-3 bg-[#e6fff9] rounded-lg">
                    <div className="flex items-center text-[#ff375f]">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">Time Remaining: 1h 12m</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <button className="bg-[#ff375f] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#e63454] transition flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      Continue Contest
                    </button>
                    <span className="text-sm text-gray-500">Ends in 1h 12m</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <button className="px-3 py-2 text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] rounded-md transition">Previous</button>
              <button className="px-3 py-2 bg-[#00b8a3] text-white rounded-md">1</button>
              <button className="px-3 py-2 text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] rounded-md transition">2</button>
              <button className="px-3 py-2 text-gray-600 hover:text-[#00b8a3] hover:bg-[#e6fff9] rounded-md transition">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
import React, { useState } from 'react'
import { 
  Trophy, 
  Clock, 
  Users, 
  Calendar, 
  Star, 
  Award, 
  Play, 
  Filter,
  Search,
  ChevronRight,
  Timer,
  Target,
  Zap,
  Crown
} from 'lucide-react'

const Contest = () => {
  const [selectedTab, setSelectedTab] = useState('live')
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = [
    { id: 'live', name: 'Live Contests', count: 3 },
    { id: 'upcoming', name: 'Upcoming', count: 8 },
    { id: 'past', name: 'Past Contests', count: 15 }
  ]

  const liveContests = [
    {
      id: 1,
      title: "Weekly Coding Challenge",
      description: "Solve 5 algorithmic problems in 2 hours",
      duration: "2h 30m",
      participants: 1250,
      difficulty: "Medium",
      prize: "$500",
      startTime: "2024-01-15T10:00:00Z",
      endTime: "2024-01-15T12:30:00Z",
      status: "live",
      category: "Algorithm",
      isRegistered: true,
      progress: 60
    },
    {
      id: 2,
      title: "Data Structures Sprint",
      description: "Fast-paced contest focusing on arrays and trees",
      duration: "1h 45m",
      participants: 890,
      difficulty: "Easy-Medium",
      prize: "$300",
      startTime: "2024-01-15T14:00:00Z",
      endTime: "2024-01-15T15:45:00Z",
      status: "live",
      category: "Data Structures",
      isRegistered: false,
      progress: 0
    },
    {
      id: 3,
      title: "System Design Mastery",
      description: "Design scalable systems for real-world problems",
      duration: "3h 00m",
      participants: 456,
      difficulty: "Hard",
      prize: "$750",
      startTime: "2024-01-15T16:00:00Z",
      endTime: "2024-01-15T19:00:00Z",
      status: "live",
      category: "System Design",
      isRegistered: true,
      progress: 25
    }
  ]

  const upcomingContests = [
    {
      id: 4,
      title: "Monthly Algorithm Championship",
      description: "The biggest coding contest of the month",
      duration: "4h 00m",
      participants: 0,
      difficulty: "All Levels",
      prize: "$2000",
      startTime: "2024-01-20T10:00:00Z",
      endTime: "2024-01-20T14:00:00Z",
      status: "upcoming",
      category: "Algorithm",
      isRegistered: false,
      progress: 0
    },
    {
      id: 5,
      title: "Dynamic Programming Deep Dive",
      description: "Master DP with challenging problems",
      duration: "2h 30m",
      participants: 0,
      difficulty: "Advanced",
      prize: "$400",
      startTime: "2024-01-22T15:00:00Z",
      endTime: "2024-01-22T17:30:00Z",
      status: "upcoming",
      category: "Algorithm",
      isRegistered: true,
      progress: 0
    }
  ]

  const pastContests = [
    {
      id: 6,
      title: "New Year Coding Marathon",
      description: "24-hour coding marathon to start the year",
      duration: "24h 00m",
      participants: 2500,
      difficulty: "All Levels",
      prize: "$5000",
      startTime: "2024-01-01T00:00:00Z",
      endTime: "2024-01-02T00:00:00Z",
      status: "completed",
      category: "Algorithm",
      isRegistered: false,
      progress: 100,
      userRank: 45,
      userScore: 850
    }
  ]

  const leaderboard = [
    { rank: 1, name: "Alex Chen", score: 2450, problems: 5, time: "1h 23m" },
    { rank: 2, name: "Sarah Johnson", score: 2380, problems: 5, time: "1h 45m" },
    { rank: 3, name: "Mike Davis", score: 2320, problems: 4, time: "1h 52m" },
    { rank: 4, name: "Emma Wilson", score: 2280, problems: 4, time: "2h 01m" },
    { rank: 5, name: "David Brown", score: 2250, problems: 4, time: "2h 15m" }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700'
      case 'Easy-Medium': return 'bg-yellow-100 text-yellow-700'
      case 'Medium': return 'bg-orange-100 text-orange-700'
      case 'Hard': return 'bg-red-100 text-red-700'
      case 'Advanced': return 'bg-purple-100 text-purple-700'
      case 'All Levels': return 'bg-blue-100 text-blue-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'bg-red-100 text-red-700'
      case 'upcoming': return 'bg-blue-100 text-blue-700'
      case 'completed': return 'bg-gray-100 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const formatTimeRemaining = (endTime) => {
    const now = new Date()
    const end = new Date(endTime)
    const diff = end - now
    
    if (diff <= 0) return 'Ended'
    
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return `${hours}h ${minutes}m`
  }

  const getCurrentContests = () => {
    switch (selectedTab) {
      case 'live': return liveContests
      case 'upcoming': return upcomingContests
      case 'past': return pastContests
      default: return []
    }
  }

  const filteredContests = getCurrentContests().filter(contest =>
    contest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contest.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="bg-[#1a1a1a] shadow-sm border-b border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Contests</h1>
              <p className="text-[#b3b3b3] mt-1">Compete with coders worldwide and win prizes</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-5 h-5" />
              <input
                type="text"
                placeholder="Search contests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#3a3a3a] rounded-lg focus:ring-2 focus:ring-[#00b8a3] focus:border-transparent bg-[#2a2a2a] text-white placeholder-[#666666]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] mb-6">
              <div className="border-b border-[#3a3a3a]">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        selectedTab === tab.id
                          ? 'border-[#00b8a3] text-white'
                          : 'border-transparent text-[#b3b3b3] hover:text-white hover:border-[#666666]'
                      }`}
                    >
                      {tab.name}
                      <span className="ml-2 bg-[#2a2a2a] text-[#b3b3b3] py-0.5 px-2 rounded-full text-xs">
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Contest Cards */}
            <div className="space-y-6">
              {filteredContests.map((contest) => (
                <div key={contest.id} className="bg-[#1a1a1a] rounded-xl border border-[#3a3a3a] hover:border-[#666666] transition-colors duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{contest.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contest.status)}`}>
                            {contest.status.toUpperCase()}
                          </span>
                          {contest.isRegistered && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#00b8a3] bg-opacity-20 text-[#00b8a3]">
                              REGISTERED
                            </span>
                          )}
                        </div>
                        <p className="text-[#b3b3b3] mb-3">{contest.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[#b3b3b3]">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {contest.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {contest.participants.toLocaleString()} participants
                          </div>
                          <div className="flex items-center">
                            <Trophy className="w-4 h-4 mr-1" />
                            {contest.prize} prize
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(contest.difficulty)}`}>
                            {contest.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar for Live Contests */}
                    {contest.status === 'live' && contest.isRegistered && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-[#b3b3b3] mb-2">
                          <span>Your Progress</span>
                          <span>{contest.progress}%</span>
                        </div>
                        <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                          <div 
                            className="bg-[#00b8a3] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${contest.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Time Remaining */}
                    {contest.status === 'live' && (
                      <div className="mb-4 p-3 bg-[#2a2a2a] rounded-lg">
                        <div className="flex items-center text-[#ff375f]">
                          <Timer className="w-4 h-4 mr-2" />
                          <span className="font-medium">Time Remaining: {formatTimeRemaining(contest.endTime)}</span>
                        </div>
                      </div>
                    )}

                    {/* User Results for Past Contests */}
                    {contest.status === 'completed' && contest.userRank && (
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-600">Your Rank: </span>
                            <span className="font-semibold text-gray-900">#{contest.userRank}</span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Your Score: </span>
                            <span className="font-semibold text-gray-900">{contest.userScore}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {contest.status === 'live' && contest.isRegistered && (
                          <button className="bg-[#ff375f] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#e63454] transition-colors flex items-center">
                            <Play className="w-4 h-4 mr-2" />
                            Continue Contest
                          </button>
                        )}
                        {contest.status === 'live' && !contest.isRegistered && (
                          <button className="bg-[#00b8a3] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#00a693] transition-colors">
                            Join Now
                          </button>
                        )}
                        {contest.status === 'upcoming' && !contest.isRegistered && (
                          <button className="bg-[#00b8a3] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#00a693] transition-colors">
                            Register
                          </button>
                        )}
                        {contest.status === 'upcoming' && contest.isRegistered && (
                          <button className="bg-[#2a2a2a] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#333333] transition-colors">
                            Registered
                          </button>
                        )}
                        {contest.status === 'completed' && (
                          <button className="bg-[#2a2a2a] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#333333] transition-colors">
                            View Results
                          </button>
                        )}
                      </div>
                      
                      <div className="text-sm text-[#b3b3b3]">
                        {contest.status === 'live' && `Ends in ${formatTimeRemaining(contest.endTime)}`}
                        {contest.status === 'upcoming' && `Starts in ${formatTimeRemaining(contest.startTime)}`}
                        {contest.status === 'completed' && 'Contest Ended'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {filteredContests.length > 0 && (
              <div className="text-center mt-8">
                <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Load More Contests
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0 space-y-6">
            {/* Live Leaderboard */}
            {selectedTab === 'live' && (
              <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-[#ffc01e]" />
                  Live Leaderboard
                </h3>
                <div className="space-y-3">
                  {leaderboard.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#2a2a2a]">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          user.rank === 1 ? 'bg-[#ffc01e] bg-opacity-20 text-[#ffc01e]' :
                          user.rank === 2 ? 'bg-[#b3b3b3] bg-opacity-20 text-[#b3b3b3]' :
                          user.rank === 3 ? 'bg-[#ff8c00] bg-opacity-20 text-[#ff8c00]' :
                          'bg-[#2a2a2a] text-[#b3b3b3]'
                        }`}>
                          {user.rank === 1 ? <Crown className="w-4 h-4" /> : user.rank}
                        </div>
                        <div className="ml-3">
                          <div className="font-medium text-white">{user.name}</div>
                          <div className="text-sm text-[#b3b3b3]">{user.problems} problems</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-white">{user.score}</div>
                        <div className="text-sm text-[#b3b3b3]">{user.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contest Stats */}
            <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Contests Participated</span>
                  <span className="font-semibold text-white">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Best Rank</span>
                  <span className="font-semibold text-white">#15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Total Score</span>
                  <span className="font-semibold text-white">8,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Win Rate</span>
                  <span className="font-semibold text-[#00b8a3]">75%</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-[#007acc]" />
                    <span className="font-medium text-white">Practice Problems</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3 text-[#00b8a3]" />
                    <span className="font-medium text-white">View Achievements</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-3 text-[#ffc01e]" />
                    <span className="font-medium text-white">Speed Practice</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contest

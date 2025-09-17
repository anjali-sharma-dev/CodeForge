import React, { useState } from 'react'
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  CheckCircle, 
  Circle, 
  AlertCircle,
  ChevronDown,
  Play,
  Lock,
  TrendingUp,
  Users,
  Award
} from 'lucide-react'

const Problems = () => {
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedList, setSelectedList] = useState('all')
  const [sortBy, setSortBy] = useState('id')

  // Comprehensive problems data
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      acceptance: "47.2%",
      status: "solved",
      isPremium: false,
      likes: 12500,
      dislikes: 1200,
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      category: "Linked List",
      acceptance: "36.1%",
      status: "attempted",
      isPremium: false,
      likes: 8900,
      dislikes: 800,
      description: "You are given two non-empty linked lists representing two non-negative integers."
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      category: "Hash Table",
      acceptance: "33.8%",
      status: "not-attempted",
      isPremium: false,
      likes: 15600,
      dislikes: 1400,
      description: "Given a string s, find the length of the longest substring without repeating characters."
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      category: "Array",
      acceptance: "35.2%",
      status: "not-attempted",
      isPremium: true,
      likes: 7800,
      dislikes: 900,
      description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays."
    },
    {
      id: 5,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      category: "String",
      acceptance: "32.4%",
      status: "solved",
      isPremium: false,
      likes: 11200,
      dislikes: 1100,
      description: "Given a string s, return the longest palindromic substring in s."
    },
    {
      id: 6,
      title: "ZigZag Conversion",
      difficulty: "Medium",
      category: "String",
      acceptance: "40.2%",
      status: "not-attempted",
      isPremium: false,
      likes: 6800,
      dislikes: 600,
      description: "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows."
    },
    {
      id: 7,
      title: "Reverse Integer",
      difficulty: "Easy",
      category: "Math",
      acceptance: "27.5%",
      status: "solved",
      isPremium: false,
      likes: 9800,
      dislikes: 700,
      description: "Given a signed 32-bit integer x, return x with its digits reversed."
    },
    {
      id: 8,
      title: "String to Integer (atoi)",
      difficulty: "Medium",
      category: "String",
      acceptance: "16.6%",
      status: "not-attempted",
      isPremium: false,
      likes: 5600,
      dislikes: 500,
      description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer."
    }
  ]

  // Filter options
  const difficulties = ['all', 'Easy', 'Medium', 'Hard']
  const statuses = ['all', 'solved', 'attempted', 'not-attempted']
  const lists = ['all', 'Top Interview 150', 'LeetCode 75', 'Amazon Top 50']
  const sortOptions = [
    { value: 'id', label: 'ID' },
    { value: 'title', label: 'Title' },
    { value: 'difficulty', label: 'Difficulty' },
    { value: 'acceptance', label: 'Acceptance' }
  ]

  // Helper functions
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-[#00b8a3]'
      case 'Medium': return 'text-[#ffc01e]'
      case 'Hard': return 'text-[#ff375f]'
      default: return 'text-[#b3b3b3]'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'solved': return <CheckCircle className="w-4 h-4 text-[#00b8a3]" />
      case 'attempted': return <AlertCircle className="w-4 h-4 text-[#ffc01e]" />
      default: return <Circle className="w-4 h-4 text-[#666666]" />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'solved': return 'Solved'
      case 'attempted': return 'Attempted'
      default: return 'Not Attempted'
    }
  }

  // Filter problems
  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty
    const matchesStatus = selectedStatus === 'all' || problem.status === selectedStatus
    return matchesSearch && matchesDifficulty && matchesStatus
  })

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header Section */}
      <div className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Problems</h1>
              <p className="text-[#b3b3b3] mt-1">Practice coding problems and improve your skills</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-5 h-5" />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-white placeholder-[#666666] focus:outline-none focus:border-[#00b8a3] focus:ring-1 focus:ring-[#00b8a3]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar - Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Filters</h3>
              
              {/* Difficulty Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-[#b3b3b3] mb-3">Difficulty</h4>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedDifficulty === difficulty
                          ? 'bg-[#2a2a2a] text-white'
                          : 'text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]'
                      }`}
                    >
                      {difficulty === 'all' ? 'All Problems' : difficulty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-[#b3b3b3] mb-3">Status</h4>
                <div className="space-y-2">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedStatus === status
                          ? 'bg-[#2a2a2a] text-white'
                          : 'text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]'
                      }`}
                    >
                      {status === 'all' ? 'All Status' : getStatusText(status)}
                    </button>
                  ))}
                </div>
              </div>

              {/* List Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-[#b3b3b3] mb-3">Lists</h4>
                <div className="space-y-2">
                  {lists.map((list) => (
                    <button
                      key={list}
                      onClick={() => setSelectedList(list)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedList === list
                          ? 'bg-[#2a2a2a] text-white'
                          : 'text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]'
                      }`}
                    >
                      {list}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Problems Header */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg mb-4">
              <div className="px-6 py-4 border-b border-[#3a3a3a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-lg font-semibold text-white">
                      Problems ({filteredProblems.length})
                    </h2>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-[#00b8a3]" />
                      <span className="text-sm text-[#b3b3b3]">Trending</span>
                    </div>
                  </div>
                  
                  {/* Sort Dropdown */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-[#b3b3b3]">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-[#2a2a2a] border border-[#3a3a3a] text-white text-sm rounded-md px-3 py-1 focus:outline-none focus:border-[#00b8a3]"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Problems List */}
              <div className="divide-y divide-[#3a3a3a]">
                {filteredProblems.map((problem) => (
                  <div key={problem.id} className="px-6 py-4 hover:bg-[#2a2a2a] transition-colors">
                    <div className="flex items-center justify-between">
                      
                      {/* Problem Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(problem.status)}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-base font-medium text-white hover:text-[#00b8a3] cursor-pointer">
                                {problem.title}
                              </h3>
                              {problem.isPremium && (
                                <Lock className="w-4 h-4 text-[#ffc01e]" />
                              )}
                            </div>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-xs text-[#666666]">{problem.category}</span>
                              <span className="text-xs text-[#666666]">#{problem.id}</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-[#ffc01e]" />
                                <span className="text-xs text-[#b3b3b3]">{problem.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Problem Stats */}
                      <div className="flex items-center space-x-6 ml-4">
                        <span className={`text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                        <span className="text-sm text-[#b3b3b3] min-w-[60px]">
                          {problem.acceptance}
                        </span>
                        <button className="bg-[#00b8a3] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#00a693] transition-colors flex items-center space-x-1">
                          <Play className="w-3 h-3" />
                          <span>Solve</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <button className="px-3 py-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
                Previous
              </button>
              <button className="px-3 py-2 bg-[#00b8a3] text-white rounded-md">1</button>
              <button className="px-3 py-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">2</button>
              <button className="px-3 py-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">3</button>
              <button className="px-3 py-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Problems
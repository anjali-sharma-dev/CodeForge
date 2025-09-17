import React, { useState } from 'react'
import { 
  Search, 
  Filter, 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle,
  Clock,
  User,
  Star,
  TrendingUp,
  ChevronDown,
  Plus,
  Eye,
  Bookmark
} from 'lucide-react'

const Discuss = () => {
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSort, setSelectedSort] = useState('trending')

  // Discussion posts data
  const posts = [
    {
      id: 1,
      title: "Two Sum - O(n) Solution with HashMap",
      author: "coding_master",
      authorAvatar: "👨‍💻",
      category: "Solution",
      problem: "Two Sum",
      difficulty: "Easy",
      likes: 245,
      dislikes: 12,
      comments: 89,
      views: 1250,
      timeAgo: "2 hours ago",
      isBookmarked: false,
      isLiked: false,
      content: "Here's my O(n) solution using HashMap. The key insight is to store the complement of each number as we iterate through the array...",
      tags: ["HashMap", "Array", "O(n)"]
    },
    {
      id: 2,
      title: "Why is my Two Sum solution getting TLE?",
      author: "newbie_coder",
      authorAvatar: "👩‍💻",
      category: "Question",
      problem: "Two Sum",
      difficulty: "Easy",
      likes: 89,
      dislikes: 5,
      comments: 156,
      views: 890,
      timeAgo: "4 hours ago",
      isBookmarked: true,
      isLiked: true,
      content: "I'm getting Time Limit Exceeded on test case 3. Here's my code using nested loops. Can someone help me optimize it?",
      tags: ["TLE", "Optimization", "Help"]
    },
    {
      id: 3,
      title: "Two Sum - Multiple Approaches Explained",
      author: "algo_expert",
      authorAvatar: "🧑‍🏫",
      category: "Tutorial",
      problem: "Two Sum",
      difficulty: "Easy",
      likes: 567,
      dislikes: 8,
      comments: 234,
      views: 2100,
      timeAgo: "1 day ago",
      isBookmarked: false,
      isLiked: false,
      content: "In this post, I'll explain 3 different approaches to solve Two Sum: Brute Force, Two Pointers, and HashMap approach with their time complexities...",
      tags: ["Tutorial", "Multiple Approaches", "Time Complexity"]
    },
    {
      id: 4,
      title: "Two Sum - Edge Cases to Consider",
      author: "test_case_guru",
      authorAvatar: "🔍",
      category: "Discussion",
      problem: "Two Sum",
      difficulty: "Easy",
      likes: 123,
      dislikes: 3,
      comments: 67,
      views: 650,
      timeAgo: "2 days ago",
      isBookmarked: true,
      isLiked: false,
      content: "When solving Two Sum, make sure to consider these edge cases: duplicate numbers, negative numbers, and the case where no solution exists...",
      tags: ["Edge Cases", "Testing", "Best Practices"]
    },
    {
      id: 5,
      title: "Two Sum - Interview Experience",
      author: "interview_prep",
      authorAvatar: "💼",
      category: "Interview",
      problem: "Two Sum",
      difficulty: "Easy",
      likes: 345,
      dislikes: 15,
      comments: 178,
      views: 1800,
      timeAgo: "3 days ago",
      isBookmarked: false,
      isLiked: true,
      content: "I was asked Two Sum in my Google interview. Here's how I approached it and what follow-up questions they asked...",
      tags: ["Interview", "Google", "Follow-up Questions"]
    }
  ]

  // Filter options
  const categories = ['all', 'Solution', 'Question', 'Tutorial', 'Discussion', 'Interview']
  const sortOptions = [
    { value: 'trending', label: 'Trending' },
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'oldest', label: 'Oldest' }
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

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Solution': return 'bg-[#00b8a3] text-white'
      case 'Question': return 'bg-[#ffc01e] text-black'
      case 'Tutorial': return 'bg-[#007acc] text-white'
      case 'Discussion': return 'bg-[#ff375f] text-white'
      case 'Interview': return 'bg-[#8b5cf6] text-white'
      default: return 'bg-[#3a3a3a] text-[#b3b3b3]'
    }
  }

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Discuss</h1>
              <p className="text-[#b3b3b3] mt-1">Community discussions and solutions</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-5 h-5" />
              <input
                type="text"
                placeholder="Search discussions..."
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
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-[#b3b3b3] mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#2a2a2a] text-white'
                          : 'text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]'
                      }`}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-[#b3b3b3] mb-3">Sort By</h4>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedSort(option.value)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedSort === option.value
                          ? 'bg-[#2a2a2a] text-white'
                          : 'text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Create Post Button */}
              <button className="w-full bg-[#00b8a3] text-white px-4 py-3 rounded-md font-medium hover:bg-[#00a693] transition-colors flex items-center justify-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Create Post</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Posts Header */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg mb-4">
              <div className="px-6 py-4 border-b border-[#3a3a3a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-lg font-semibold text-white">
                      Discussions ({filteredPosts.length})
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
                      value={selectedSort}
                      onChange={(e) => setSelectedSort(e.target.value)}
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

              {/* Posts List */}
              <div className="divide-y divide-[#3a3a3a]">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="px-6 py-6 hover:bg-[#2a2a2a] transition-colors">
                    <div className="flex items-start space-x-4">
                      
                      {/* Author Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-[#2a2a2a] rounded-full flex items-center justify-center text-lg">
                          {post.authorAvatar}
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-sm font-medium text-white">{post.author}</span>
                              <span className="text-xs text-[#666666]">•</span>
                              <span className="text-xs text-[#b3b3b3]">{post.timeAgo}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                                {post.category}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-white hover:text-[#00b8a3] cursor-pointer mb-2">
                              {post.title}
                            </h3>
                            
                            <p className="text-[#b3b3b3] text-sm mb-3 line-clamp-2">
                              {post.content}
                            </p>
                            
                            <div className="flex items-center space-x-4 mb-3">
                              <span className="text-xs text-[#666666]">Problem: </span>
                              <span className={`text-xs font-medium ${getDifficultyColor(post.difficulty)}`}>
                                {post.problem} ({post.difficulty})
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {post.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-[#2a2a2a] text-[#b3b3b3] text-xs rounded-md">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Post Stats */}
                      <div className="flex-shrink-0 ml-4">
                        <div className="flex items-center space-x-4 text-sm text-[#b3b3b3]">
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
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

export default Discuss

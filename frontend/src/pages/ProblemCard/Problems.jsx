import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProblemCard from './ProblemCard'
import { problems as PROBLEMS_DATA } from '../../data/questions'
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
  // React hook for navigation
  const navigate = useNavigate()
  
  // State for filters and search - these control what problems are shown
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedList, setSelectedList] = useState('all')
  const [sortBy, setSortBy] = useState('id')

  // Get problems data from the imported file
  const problems = PROBLEMS_DATA

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
  
  // Function to get color class based on difficulty level
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
  const filteredProblems = useMemo(() => {
    const list = problems.filter(problem => {
      const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           problem.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty
      const matchesStatus = selectedStatus === 'all' || problem.status === selectedStatus
      return matchesSearch && matchesDifficulty && matchesStatus
    })
    const sorter = {
      id: (a, b) => a.id - b.id,
      title: (a, b) => a.title.localeCompare(b.title),
      difficulty: (a, b) => ['Easy','Medium','Hard'].indexOf(a.difficulty) - ['Easy','Medium','Hard'].indexOf(b.difficulty),
      acceptance: (a, b) => parseFloat(a.acceptance) - parseFloat(b.acceptance)
    }[sortBy]
    return [...list].sort(sorter)
  }, [problems, searchTerm, selectedDifficulty, selectedStatus, sortBy])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header Section */}
      {/* <div className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Problems</h1>
              <p className="text-[#b3b3b3] mt-1">Practice coding problems and improve your skills</p>
            </div>
       
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
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Admin Panel Button - only show for demo purposes */}
        {/* <div className="mb-6 flex justify-end">
          <button
            onClick={goToAdmin}
            className="flex items-center space-x-2 px-4 py-2 bg-[#00b8a3] text-white rounded-lg hover:bg-[#00a693] transition-colors"
          >
            <Users className="w-4 h-4" />
            <span>Admin Panel</span>
          </button>
        </div> */}
        
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
                  <ProblemCard key={problem.id} problem={problem} />
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
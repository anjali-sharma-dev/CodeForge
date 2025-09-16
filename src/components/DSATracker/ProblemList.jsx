import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  CheckCircle, 
  Circle, 
  AlertCircle,
  ChevronDown,
  Tag,
  Lightbulb
} from 'lucide-react';

const ProblemList = ({ problems, onUpdateStatus }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);

  // Filter problems based on search and filters
  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty.toLowerCase() === difficultyFilter;
    const matchesCategory = categoryFilter === 'all' || problem.category.toLowerCase() === categoryFilter;
    const matchesStatus = statusFilter === 'all' || problem.status === statusFilter;
    
    return matchesSearch && matchesDifficulty && matchesCategory && matchesStatus;
  });

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-[#00b8a3]';
      case 'medium': return 'text-[#ffc01e]';
      case 'hard': return 'text-[#ff375f]';
      default: return 'text-[#b3b3b3]';
    }
  };

  // Get status icon and color
  const getStatusIcon = (status) => {
    switch (status) {
      case 'solved':
        return <CheckCircle className="h-5 w-5 text-[#00b8a3]" />;
      case 'attempted':
        return <AlertCircle className="h-5 w-5 text-[#ffc01e]" />;
      default:
        return <Circle className="h-5 w-5 text-[#666666]" />;
    }
  };

  // Format time spent
  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#666666]" />
              <input
                type="text"
                placeholder="Search problems by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-white placeholder-[#666666] focus:outline-none focus:border-[#00b8a3] focus:ring-1 focus:ring-[#00b8a3]"
              />
            </div>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-white hover:bg-[#333333] transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-[#3a3a3a] grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-[#b3b3b3] mb-2">Difficulty</label>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-white focus:outline-none focus:border-[#00b8a3]"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-[#b3b3b3] mb-2">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-white focus:outline-none focus:border-[#00b8a3]"
              >
                <option value="all">All Categories</option>
                <option value="array">Array</option>
                <option value="string">String</option>
                <option value="tree">Tree</option>
                <option value="graph">Graph</option>
                <option value="dynamic programming">Dynamic Programming</option>
                <option value="stack">Stack</option>
                <option value="queue">Queue</option>
                <option value="hash table">Hash Table</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-[#b3b3b3] mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-white focus:outline-none focus:border-[#00b8a3]"
              >
                <option value="all">All Status</option>
                <option value="not-attempted">Not Attempted</option>
                <option value="attempted">Attempted</option>
                <option value="solved">Solved</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Problems List */}
      <div className="space-y-3">
        {filteredProblems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-[#666666] text-lg">No problems found matching your criteria</div>
            <div className="text-[#666666] text-sm mt-2">Try adjusting your search or filters</div>
          </div>
        ) : (
          filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4 hover:border-[#00b8a3] transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedProblem(problem)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getStatusIcon(problem.status)}
                    <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)} bg-opacity-20`}>
                      {problem.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-[#b3b3b3] text-sm mb-3 line-clamp-2">
                    {problem.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-[#666666]">
                    <div className="flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <span>{problem.category}</span>
                    </div>
                    {problem.timeSpent > 0 && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{formatTime(problem.timeSpent)}</span>
                      </div>
                    )}
                    {problem.attempts > 0 && (
                      <div className="flex items-center space-x-1">
                        <span>{problem.attempts} attempt{problem.attempts !== 1 ? 's' : ''}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {problem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#2a2a2a] text-[#b3b3b3] text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 ml-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateStatus(problem.id, 'attempted');
                    }}
                    className="px-3 py-1 bg-[#ffc01e] text-black text-xs font-medium rounded-md hover:bg-[#e6a600] transition-colors"
                  >
                    Mark Attempted
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateStatus(problem.id, 'solved', 30); // Default 30 minutes
                    }}
                    className="px-3 py-1 bg-[#00b8a3] text-white text-xs font-medium rounded-md hover:bg-[#00a693] transition-colors"
                  >
                    Mark Solved
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Problem Detail Modal */}
      {selectedProblem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(selectedProblem.status)}
                  <h2 className="text-xl font-bold text-white">{selectedProblem.title}</h2>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedProblem.difficulty)} bg-opacity-20`}>
                    {selectedProblem.difficulty}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProblem(null)}
                  className="text-[#666666] hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                  <p className="text-[#b3b3b3]">{selectedProblem.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Hints</h3>
                  <ul className="space-y-2">
                    {selectedProblem.hints.map((hint, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Lightbulb className="h-4 w-4 text-[#ffc01e] mt-1 flex-shrink-0" />
                        <span className="text-[#b3b3b3] text-sm">{hint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProblem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#2a2a2a] text-[#b3b3b3] text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => {
                      onUpdateStatus(selectedProblem.id, 'attempted');
                      setSelectedProblem(null);
                    }}
                    className="px-4 py-2 bg-[#ffc01e] text-black font-medium rounded-md hover:bg-[#e6a600] transition-colors"
                  >
                    Mark Attempted
                  </button>
                  <button
                    onClick={() => {
                      onUpdateStatus(selectedProblem.id, 'solved', 30);
                      setSelectedProblem(null);
                    }}
                    className="px-4 py-2 bg-[#00b8a3] text-white font-medium rounded-md hover:bg-[#00a693] transition-colors"
                  >
                    Mark Solved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemList;

import React from 'react'
import { Lock, Star, CheckCircle, AlertCircle, Circle, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

// Helper function to get status icon based on problem status
const statusIcon = (status) => {
  switch (status) {
    case 'solved': return <CheckCircle className="w-4 h-4 text-[#00b8a3]" aria-hidden="true" />
    case 'attempted': return <AlertCircle className="w-4 h-4 text-[#ffc01e]" aria-hidden="true" />
    default: return <Circle className="w-4 h-4 text-[#666666]" aria-hidden="true" />
  }
}

// Helper function to get difficulty color class
const difficultyClass = (difficulty) => {
  switch (difficulty) {
    case 'Easy': return 'text-[#00b8a3]'
    case 'Medium': return 'text-[#ffc01e]'
    case 'Hard': return 'text-[#ff375f]'
    default: return 'text-[#b3b3b3]'
  }
}

// ProblemCard component - displays individual problem information
const ProblemCard = ({ problem }) => {
  return (
    <article className="px-6 py-4 hover:bg-[#2a2a2a] transition-colors" aria-label={problem.title}>
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3">
            {/* Status icon (solved, attempted, or not attempted) */}
            {statusIcon(problem.status)}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                {/* Problem title with link to problem detail page */}
                <Link
                  to={`/problems/${problem.id}`}
                  className="text-base font-medium text-white hover:text-[#00b8a3] focus:outline-none focus:ring-2 focus:ring-[#00b8a3] rounded"
                >
                  {problem.title}
                </Link>
                {/* Premium lock icon for premium problems */}
                {problem.isPremium && <Lock className="w-4 h-4 text-[#ffc01e]" aria-label="Premium" />}
              </div>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-xs text-[#b3b3b3]">{problem.category}</span>
                <span className="text-xs text-[#b3b3b3]">#{problem.id}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-[#ffc01e]" aria-hidden="true" />
                  <span className="text-xs text-[#b3b3b3]">{problem.likes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6 ml-4">
          {/* Difficulty level with color coding */}
          <span className={`text-sm font-medium ${difficultyClass(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
          {/* Acceptance rate */}
          <span className="text-sm text-[#b3b3b3] min-w-[60px]">
            {problem.acceptance}
          </span>
          {/* Solve button */}
          <Link
            to={`/problems/${problem.id}`}
            className="bg-[#00b8a3] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:opacity-90 transition-colors inline-flex items-center space-x-1"
            aria-label={`Solve ${problem.title}`}
          >
            <Play className="w-3 h-3" />
            <span>Solve</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProblemCard



import React from 'react'
import { Lock, Star, CheckCircle, AlertCircle, Circle, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const statusIcon = (status) => {
  switch (status) {
    case 'solved': return <CheckCircle className="w-4 h-4 text-[var(--accent-green)]" aria-hidden="true" />
    case 'attempted': return <AlertCircle className="w-4 h-4 text-[var(--accent-yellow)]" aria-hidden="true" />
    default: return <Circle className="w-4 h-4 text-[var(--text-muted)]" aria-hidden="true" />
  }
}

const difficultyClass = (difficulty) => {
  switch (difficulty) {
    case 'Easy': return 'text-[var(--accent-green)]'
    case 'Medium': return 'text-[var(--accent-yellow)]'
    case 'Hard': return 'text-[var(--accent-red)]'
    default: return 'text-[var(--text-muted)]'
  }
}

const ProblemCard = ({ problem }) => {
  return (
    <article className="px-6 py-4 hover:bg-[var(--hover-bg)] transition-colors" aria-label={problem.title}>
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3">
            {statusIcon(problem.status)}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <Link
                  to={`/problems/${problem.id}`}
                  className="text-base font-medium hover:text-[var(--accent-green)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] rounded"
                >
                  {problem.title}
                </Link>
                {problem.isPremium && <Lock className="w-4 h-4 text-[var(--accent-yellow)]" aria-label="Premium" />}
              </div>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-xs text-[var(--text-muted)]">{problem.category}</span>
                <span className="text-xs text-[var(--text-muted)]">#{problem.id}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-[var(--accent-yellow)]" aria-hidden="true" />
                  <span className="text-xs text-[var(--text-secondary)]">{problem.likes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6 ml-4">
          <span className={`text-sm font-medium ${difficultyClass(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
          <span className="text-sm text-[var(--text-secondary)] min-w-[60px]">
            {problem.acceptance}
          </span>
          <Link
            to={`/problems/${problem.id}`}
            className="bg-[var(--accent-green)] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:opacity-90 transition-colors inline-flex items-center space-x-1"
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



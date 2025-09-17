import React, { useEffect, useMemo, useState } from 'react'
import { 
  Play, 
  RotateCcw, 
  Settings, 
  BookOpen, 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown,
  Share2,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Code,
  Eye,
  EyeOff
} from 'lucide-react'

import CodeEditor from '../components/CodeEditor'
import TestcasePanel from '../components/TestcasePanel'
import SubmissionHistory, { pushSubmission } from '../components/SubmissionHistory'
import { runCodeApi, submitCodeApi, fetchProblem } from '../lib/api'

const ProblemDetail = () => {
  // State for the problem detail page
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')
  const [code, setCode] = useState(`// Two Sum Solution
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}`)
  const [showSolution, setShowSolution] = useState(false)
  const [customInput, setCustomInput] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  const [problem, setProblem] = useState(null)

  // Language options
  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'c', label: 'C' }
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

  const handleLike = () => {
    setIsLiked(!isLiked)
    if (isDisliked) setIsDisliked(false)
  }

  const handleDislike = () => {
    setIsDisliked(!isDisliked)
    if (isLiked) setIsLiked(false)
  }

  const storageKey = useMemo(() => `code:${problem?.id || 'unknown'}:${selectedLanguage}`, [problem?.id, selectedLanguage])

  useEffect(() => {
    let active = true
    // For now, use fixed id 1; if using router, parse from URL params
    fetchProblem(1).then(p => { if (active) setProblem(p) }).catch(() => {})
    return () => { active = false }
  }, [])

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) setCode(saved)
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey])

  useEffect(() => {
    const id = setTimeout(() => {
      try { localStorage.setItem(storageKey, code) } catch {}
    }, 300)
    return () => clearTimeout(id)
  }, [code, storageKey])

  const runCode = async () => {
    setIsRunning(true)
    setOutput('')
    try {
      const { output } = await runCodeApi({ language: selectedLanguage, code, input: customInput })
      setOutput(output)
    } catch (err) {
      setOutput(`Error: ${String(err)}`)
    } finally {
      setIsRunning(false)
    }
  }

  const submitCode = async () => {
    if (!output) {
      setOutput('Please run your code before submitting.')
      pushSubmission({ problemId: problem?.id, language: selectedLanguage, status: 'Rejected', message: 'No run output' })
      return
    }
    try {
      const res = await submitCodeApi({ problemId: problem?.id, language: selectedLanguage, lastOutput: output })
      pushSubmission({ problemId: problem?.id, language: selectedLanguage, status: res.status, message: res.status })
      setOutput(prev => `${prev}\nSubmission: ${res.status}`)
    } catch (err) {
      pushSubmission({ problemId: problem?.id, language: selectedLanguage, status: 'Rejected', message: String(err) })
      setOutput(prev => `${prev}\nSubmission: Error`)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">{problem.title}</h1>
              <span className={`text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
              <span className="text-sm text-[#b3b3b3]">{problem.acceptance}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-3 py-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
                <BookOpen className="w-4 h-4" />
                <span>Solution</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>Discuss</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Problem Description */}
          <div className="space-y-6">
            {/* Problem Content */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-[#b3b3b3] leading-relaxed whitespace-pre-line">
                  {problem.description}
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Examples</h3>
              {problem?.examples?.map((example, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="bg-[#2a2a2a] rounded-md p-4">
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-[#b3b3b3]">Input: </span>
                        <code className="text-[#00b8a3] text-sm">{example.input}</code>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-[#b3b3b3]">Output: </span>
                        <code className="text-[#00b8a3] text-sm">{example.output}</code>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-[#b3b3b3]">Explanation: </span>
                        <span className="text-[#b3b3b3] text-sm">{example.explanation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Constraints</h3>
              <ul className="space-y-2">
                {problem?.constraints?.map((constraint, index) => (
                  <li key={index} className="text-[#b3b3b3] text-sm">
                    • {constraint}
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Up */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Follow-up</h3>
              <p className="text-[#b3b3b3] text-sm">{problem?.followUp}</p>
            </div>
          </div>

          {/* Code Editor */}
          <div className="space-y-6">
            {/* Editor Header */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg">
              <div className="px-4 py-3 border-b border-[#3a3a3a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold text-white">Code Editor</h3>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="bg-[#2a2a2a] border border-[#3a3a3a] text-white text-sm rounded-md px-3 py-1 focus:outline-none focus:border-[#00b8a3]"
                    >
                      {languages.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                          {lang.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Code Editor */}
              <div className="p-4 space-y-4">
                <CodeEditor language={selectedLanguage} value={code} onChange={setCode} />
                <TestcasePanel customInput={customInput} setCustomInput={setCustomInput} output={output} />
              </div>

              {/* Editor Footer */}
              <div className="px-4 py-3 border-t border-[#3a3a3a]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button onClick={runCode} disabled={isRunning}
                      className="flex items-center space-x-2 px-4 py-2 bg-[#00b8a3] disabled:opacity-60 text-white rounded-md text-sm font-medium hover:bg-[#00a693] transition-colors">
                      <Play className="w-4 h-4" />
                      <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                    </button>
                    <button onClick={submitCode} className="flex items-center space-x-2 px-4 py-2 bg-[#ff375f] text-white rounded-md text-sm font-medium hover:bg-[#e63454] transition-colors">
                      <CheckCircle className="w-4 h-4" />
                      <span>Submit</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
                      <Clock className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded-md transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Cases */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Test Cases</h3>
              <div className="space-y-3">
                <div className="bg-[#2a2a2a] rounded-md p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#b3b3b3]">Test Case 1</span>
                    <CheckCircle className="w-4 h-4 text-[#00b8a3]" />
                  </div>
                  <div className="mt-2 text-xs text-[#b3b3b3]">
                    Input: [2,7,11,15], target = 9<br />
                    Expected: [0,1]<br />
                    Output: [0,1] ✓
                  </div>
                </div>
                
                <div className="bg-[#2a2a2a] rounded-md p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#b3b3b3]">Test Case 2</span>
                    <CheckCircle className="w-4 h-4 text-[#00b8a3]" />
                  </div>
                  <div className="mt-2 text-xs text-[#b3b3b3]">
                    Input: [3,2,4], target = 6<br />
                    Expected: [1,2]<br />
                    Output: [1,2] ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Submission History */}
            <SubmissionHistory problemId={problem.id} />

            {/* Problem Stats */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Problem Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Acceptance Rate</span>
                  <span className="text-white font-medium">{problem?.acceptance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Total Submissions</span>
                  <span className="text-white font-medium">2.1M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Total Accepted</span>
                  <span className="text-white font-medium">1.0M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Difficulty</span>
                  <span className={`font-medium ${getDifficultyColor(problem?.difficulty)}`}>
                    {problem?.difficulty}
                  </span>
                </div>
              </div>
              
              {/* Like/Dislike */}
              <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-[#3a3a3a]">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isLiked 
                      ? 'bg-[#00b8a3] text-white' 
                      : 'text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>{problem.likes}</span>
                </button>
                <button
                  onClick={handleDislike}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isDisliked 
                      ? 'bg-[#ff375f] text-white' 
                      : 'text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]'
                  }`}
                >
                  <ThumbsDown className="w-4 h-4" />
                  <span>{problem.dislikes}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemDetail

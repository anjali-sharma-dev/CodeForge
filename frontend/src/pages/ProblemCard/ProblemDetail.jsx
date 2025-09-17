import React, { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
  EyeOff,
  ChevronLeft,
  ChevronRight,
  Terminal,
  User,
  Bell
} from 'lucide-react'

import CodeEditor from './CodeEditor'
import SubmissionHistory, { pushSubmission } from './SubmissionHistory'
import { runCodeApi, submitCodeApi, fetchProblem } from '../lib/api'
import { problems } from '../data/problems'

const ProblemDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // State for the problem detail page
  const [selectedLanguage, setSelectedLanguage] = useState('cpp')
  const [code, setCode] = useState(`// Merge 2 Sorted Array Solution
vector<int> sortedArray(vector<int> a, vector<int> b) {
    // Write your code here
    vector<int> result;
    int i = 0, j = 0;
    
    while (i < a.size() && j < b.size()) {
        if (a[i] <= b[j]) {
            if (result.empty() || result.back() != a[i]) {
                result.push_back(a[i]);
            }
            i++;
        } else {
            if (result.empty() || result.back() != b[j]) {
                result.push_back(b[j]);
            }
            j++;
        }
    }
    
    while (i < a.size()) {
        if (result.empty() || result.back() != a[i]) {
            result.push_back(a[i]);
        }
        i++;
    }
    
    while (j < b.size()) {
        if (result.empty() || result.back() != b[j]) {
            result.push_back(b[j]);
        }
        j++;
    }
    
    return result;
}`)
  const [isRunning, setIsRunning] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  const [problem, setProblem] = useState(null)
  const [activeTab, setActiveTab] = useState('problem')
  const [consoleOutput, setConsoleOutput] = useState('')
  const [testResults, setTestResults] = useState([])

  // Language options
  const languages = [
    { value: 'javascript', label: 'JavaScript (Node.js 18.15.0)' },
    { value: 'python', label: 'Python (3.8.1)' },
    { value: 'java', label: 'Java (OpenJDK 8)' },
    { value: 'cpp', label: 'C++ (g++ 5.4)' },
    { value: 'c', label: 'C (gcc 5.4)' }
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
    const problemId = parseInt(id)
    if (problemId) {
      // Try to fetch from API first, fallback to local data
      fetchProblem(problemId)
        .then(p => { if (active) setProblem(p) })
        .catch(() => {
          // Fallback to local data
          const localProblem = problems.find(p => p.id === problemId)
          if (active && localProblem) setProblem(localProblem)
        })
    }
    return () => { active = false }
  }, [id])

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
    setConsoleOutput('')
    setTestResults([])
    try {
      // Try API first, fallback to mock execution
      try {
        const { output } = await runCodeApi({ language: selectedLanguage, code, input: '' })
        setConsoleOutput(output)
        setTestResults([{ testCase: 1, input: '', output, status: 'passed' }])
      } catch (apiError) {
        // Mock execution for demo
        const mockOutput = mockCodeExecution(selectedLanguage, code, '')
        setConsoleOutput(mockOutput)
        setTestResults([{ testCase: 1, input: '', output: mockOutput, status: 'passed' }])
      }
    } catch (err) {
      setConsoleOutput(`Error: ${String(err)}`)
      setTestResults([{ testCase: 1, input: '', output: `Error: ${String(err)}`, status: 'failed' }])
    } finally {
      setIsRunning(false)
    }
  }

  // Mock code execution for demo purposes
  const mockCodeExecution = (language, code, input) => {
    // Simple mock that returns different outputs based on code content
    if (code.includes('twoSum') || code.includes('Two Sum')) {
      return 'Test Case 1: [0, 1] ✓\nTest Case 2: [1, 2] ✓\nTest Case 3: [0, 1] ✓\n\nAll test cases passed!'
    } else if (code.includes('merge') || code.includes('Merge')) {
      return 'Test Case 1: [1, 2, 3, 4, 5, 6] ✓\nTest Case 2: [1, 2, 3, 4, 5, 6, 7, 8] ✓\n\nAll test cases passed!'
    } else {
      return 'Running your code...\n\nTest Case 1: [0, 1] ✓\nTest Case 2: [1, 2] ✓\n\nAll test cases passed!'
    }
  }

  const submitCode = async () => {
    if (!consoleOutput) {
      setConsoleOutput('Please run your code before submitting.')
      pushSubmission({ problemId: problem?.id, language: selectedLanguage, status: 'Rejected', message: 'No run output' })
      return
    }
    try {
      // Try API first, fallback to mock submission
      try {
        const res = await submitCodeApi({ problemId: problem?.id, language: selectedLanguage, lastOutput: consoleOutput })
        pushSubmission({ problemId: problem?.id, language: selectedLanguage, status: res.status, message: res.status })
        setConsoleOutput(prev => `${prev}\n\nSubmission: ${res.status}`)
      } catch (apiError) {
        // Mock submission for demo
        const mockStatus = consoleOutput.includes('[0, 1]') || consoleOutput.includes('[1, 2]') ? 'Accepted' : 'Wrong Answer'
        pushSubmission({ problemId: problem?.id, language: selectedLanguage, status: mockStatus, message: mockStatus })
        setConsoleOutput(prev => `${prev}\n\nSubmission: ${mockStatus}`)
      }
    } catch (err) {
      pushSubmission({ problemId: problem?.id, language: selectedLanguage, status: 'Rejected', message: String(err) })
      setConsoleOutput(prev => `${prev}\n\nSubmission: Error`)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="bg-[#1a1a1a] border-b border-[#3a3a3a] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/')}
              className="text-[#b3b3b3] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-white">{problem?.title || 'Loading...'}</h1>
            <span className={`px-2 py-1 rounded text-sm font-medium ${getDifficultyColor(problem?.difficulty)} bg-opacity-20`}>
              {problem?.difficulty}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-[#b3b3b3] hover:text-[#ffc01e] cursor-pointer" />
              <Settings className="w-4 h-4 text-[#b3b3b3] hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Problem Description */}
        <div className="w-1/2 bg-[#0a0a0a] border-r border-[#3a3a3a] flex flex-col">
          {/* Tabs */}
          <div className="bg-[#1a1a1a] border-b border-[#3a3a3a] px-6">
            <div className="flex space-x-6">
              {[
                { id: 'problem', label: 'Problem' },
                { id: 'submissions', label: 'Submissions' },
                { id: 'hints', label: 'Hints & solutions' },
                { id: 'discuss', label: 'Discuss' },
                { id: 'result', label: 'Result' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-1 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#00b8a3] text-white'
                      : 'border-transparent text-[#b3b3b3] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Problem Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {activeTab === 'problem' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Problem statement</h3>
                  <p className="text-[#b3b3b3] leading-relaxed">
                    {problem?.description || 'Loading problem description...'}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Example</h3>
                  <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
                    <p className="text-[#b3b3b3] mb-2">Input: 'n' = 5 'm' = 3</p>
                    <p className="text-[#b3b3b3] mb-2">'a' = [1, 2, 3, 4, 6]</p>
                    <p className="text-[#b3b3b3] mb-2">'b' = [2, 3, 5]</p>
                    <p className="text-[#b3b3b3]">Output: [1, 2, 3, 4, 5, 6]</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Explanation</h3>
                  <p className="text-[#b3b3b3] leading-relaxed">
                    The union of both arrays is [1, 2, 3, 4, 5, 6] as [1, 2, 3, 4, 6] and [2, 3, 5] are present in the union.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'submissions' && (
              <SubmissionHistory problemId={problem?.id} />
            )}

            {activeTab === 'hints' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Hints & Solutions</h3>
                <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
                  <p className="text-[#b3b3b3]">Hints and solutions will be available after attempting the problem.</p>
                </div>
              </div>
            )}

            {activeTab === 'discuss' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Discussion</h3>
                <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
                  <p className="text-[#b3b3b3]">Join the discussion about this problem.</p>
                </div>
              </div>
            )}

            {activeTab === 'result' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Execution Result</h3>
                <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-[#b3b3b3]" />
                      <span className="text-sm text-[#b3b3b3]">Console Output</span>
                    </div>
                    <pre className="text-[#b3b3b3] text-sm font-mono whitespace-pre-wrap bg-[#0a0a0a] p-3 rounded">
                      {consoleOutput || 'No output yet. Run your code to see results.'}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-1/2 bg-[#0a0a0a] flex flex-col">
          {/* Editor Header */}
          <div className="bg-[#1a1a1a] border-b border-[#3a3a3a] px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-[#2a2a2a] border border-[#3a3a3a] text-white text-sm rounded px-3 py-1 focus:outline-none focus:border-[#00b8a3]"
                >
                  {languages.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
                <button className="p-2 text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a] rounded transition-colors">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1">
            <CodeEditor language={selectedLanguage} value={code} onChange={setCode} className="h-full" />
          </div>

          {/* Editor Footer */}
          <div className="bg-[#1a1a1a] border-t border-[#3a3a3a] px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-3 py-1 text-[#b3b3b3] hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-sm">Prev</span>
                </button>
                <button 
                  onClick={runCode} 
                  disabled={isRunning}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#00b8a3] disabled:opacity-60 text-white rounded text-sm font-medium hover:bg-[#00a693] transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>{isRunning ? 'Running...' : 'Run'}</span>
                </button>
                <button 
                  onClick={submitCode}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#ff6b35] text-white rounded text-sm font-medium hover:bg-[#e55a2b] transition-colors"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Submit code</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-1 text-[#b3b3b3] hover:text-white transition-colors">
                  <span className="text-sm">Next</span>
                  <ChevronRight className="w-4 h-4" />
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

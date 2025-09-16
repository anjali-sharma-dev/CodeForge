import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Code2,
  Lightbulb,
  BookOpen,
  Target,
  Timer
} from 'lucide-react';

const ProblemSolver = ({ problems, onUpdateStatus }) => {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [code, setCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);

  // Start timer when problem is selected
  React.useEffect(() => {
    let interval = null;
    if (selectedProblem && isRunning) {
      interval = setInterval(() => {
        setTimeSpent(time => time + 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [selectedProblem, isRunning]);

  // Default code templates for different languages
  const getDefaultCode = (language) => {
    const templates = {
      javascript: `function solution(input) {
    // Your code here
    return input;
}`,
      python: `def solution(input):
    # Your code here
    return input`,
      java: `public class Solution {
    public int solution(int[] input) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int solution(vector<int>& input) {
        // Your code here
        return 0;
    }
};`
    };
    return templates[language] || templates.javascript;
  };

  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  // Sample test cases (in a real app, these would come from the backend)
  const getTestCases = (problemId) => {
    const testCases = {
      1: [ // Two Sum
        { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
        { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
        { input: { nums: [3, 3], target: 6 }, expected: [0, 1] }
      ],
      2: [ // Valid Parentheses
        { input: "()", expected: true },
        { input: "()[]{}", expected: true },
        { input: "(]", expected: false }
      ],
      3: [ // Maximum Subarray
        { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
        { input: [1], expected: 1 },
        { input: [5, 4, -1, 7, 8], expected: 23 }
      ]
    };
    return testCases[problemId] || [];
  };

  const runCode = () => {
    if (!selectedProblem) return;
    
    setIsRunning(true);
    setTestResults(null);
    
    // Simulate code execution (in a real app, this would be sent to a backend)
    setTimeout(() => {
      const testCases = getTestCases(selectedProblem.id);
      const results = testCases.map((testCase, index) => {
        // Simple mock execution - in reality, this would run actual code
        const passed = Math.random() > 0.3; // 70% chance of passing for demo
        return {
          testCase: index + 1,
          input: testCase.input,
          expected: testCase.expected,
          actual: passed ? testCase.expected : 'Wrong answer',
          passed
        };
      });
      
      setTestResults(results);
      setIsRunning(false);
    }, 2000);
  };

  const resetCode = () => {
    setCode(getDefaultCode(selectedLanguage));
    setTestResults(null);
    setTimeSpent(0);
    setShowHints(false);
    setCurrentHint(0);
  };

  const submitSolution = () => {
    if (!selectedProblem || !testResults) return;
    
    const allPassed = testResults.every(result => result.passed);
    const status = allPassed ? 'solved' : 'attempted';
    
    onUpdateStatus(selectedProblem.id, status, Math.floor(timeSpent / 60));
    
    // Reset for next problem
    setSelectedProblem(null);
    setCode('');
    setTestResults(null);
    setTimeSpent(0);
    setShowHints(false);
    setCurrentHint(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-[#00b8a3]';
      case 'medium': return 'text-[#ffc01e]';
      case 'hard': return 'text-[#ff375f]';
      default: return 'text-[#b3b3b3]';
    }
  };

  return (
    <div className="space-y-6">
      {/* Problem Selection */}
      {!selectedProblem ? (
        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Select a Problem to Solve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem) => (
              <div
                key={problem.id}
                onClick={() => {
                  setSelectedProblem(problem);
                  setCode(getDefaultCode(selectedLanguage));
                }}
                className="p-4 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg cursor-pointer hover:border-[#00b8a3] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">{problem.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)} bg-opacity-20`}>
                    {problem.difficulty}
                  </span>
                </div>
                <p className="text-[#b3b3b3] text-sm mb-2 line-clamp-2">{problem.description}</p>
                <div className="flex items-center justify-between text-xs text-[#666666]">
                  <span>{problem.category}</span>
                  <div className="flex items-center space-x-1">
                    {problem.status === 'solved' && <CheckCircle className="h-3 w-3 text-[#00b8a3]" />}
                    {problem.status === 'attempted' && <AlertCircle className="h-3 w-3 text-[#ffc01e]" />}
                    <span>{problem.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problem Description */}
          <div className="space-y-4">
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{selectedProblem.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedProblem.difficulty)} bg-opacity-20`}>
                    {selectedProblem.difficulty}
                  </span>
                  <button
                    onClick={() => setSelectedProblem(null)}
                    className="text-[#666666] hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <p className="text-[#b3b3b3] mb-4">{selectedProblem.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-[#b3b3b3]">
                  <span>{selectedProblem.category}</span>
                  <div className="flex items-center space-x-1">
                    <Timer className="h-4 w-4" />
                    <span>{formatTime(timeSpent)}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowHints(!showHints)}
                  className="flex items-center space-x-1 text-[#ffc01e] hover:text-[#e6a600] transition-colors"
                >
                  <Lightbulb className="h-4 w-4" />
                  <span className="text-sm">Hints</span>
                </button>
              </div>

              {/* Hints Section */}
              {showHints && (
                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-4 mb-4">
                  <h4 className="text-white font-medium mb-2">Hints</h4>
                  <div className="space-y-2">
                    {selectedProblem.hints.map((hint, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium ${
                          index <= currentHint ? 'bg-[#ffc01e] text-black' : 'bg-[#666666] text-white'
                        }`}>
                          {index + 1}
                        </div>
                        <span className={`text-sm ${
                          index <= currentHint ? 'text-[#b3b3b3]' : 'text-[#666666]'
                        }`}>
                          {hint}
                        </span>
                      </div>
                    ))}
                  </div>
                  {currentHint < selectedProblem.hints.length - 1 && (
                    <button
                      onClick={() => setCurrentHint(currentHint + 1)}
                      className="mt-3 px-3 py-1 bg-[#ffc01e] text-black text-sm font-medium rounded-md hover:bg-[#e6a600] transition-colors"
                    >
                      Show Next Hint
                    </button>
                  )}
                </div>
              )}

              {/* Tags */}
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
          </div>

          {/* Code Editor */}
          <div className="space-y-4">
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Code Editor</h3>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => {
                      setSelectedLanguage(e.target.value);
                      setCode(getDefaultCode(e.target.value));
                    }}
                    className="px-3 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md text-white text-sm focus:outline-none focus:border-[#00b8a3]"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </div>
              </div>

              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 p-4 bg-[#0a0a0a] border border-[#3a3a3a] rounded-lg text-white font-mono text-sm focus:outline-none focus:border-[#00b8a3] resize-none"
                placeholder="Write your solution here..."
              />

              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  <button
                    onClick={runCode}
                    disabled={isRunning || !code.trim()}
                    className="flex items-center space-x-2 px-4 py-2 bg-[#00b8a3] text-white rounded-md hover:bg-[#00a693] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                  </button>
                  <button
                    onClick={resetCode}
                    className="flex items-center space-x-2 px-4 py-2 bg-[#2a2a2a] text-white rounded-md hover:bg-[#333333] transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Reset</span>
                  </button>
                </div>
                <button
                  onClick={submitSolution}
                  disabled={!testResults || testResults.some(result => !result.passed)}
                  className="px-4 py-2 bg-[#ffc01e] text-black rounded-md hover:bg-[#e6a600] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Submit Solution
                </button>
              </div>
            </div>

            {/* Test Results */}
            {testResults && (
              <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Test Results</h3>
                <div className="space-y-3">
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        result.passed
                          ? 'bg-[#00b8a3] bg-opacity-10 border-[#00b8a3]'
                          : 'bg-[#ff375f] bg-opacity-10 border-[#ff375f]'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        {result.passed ? (
                          <CheckCircle className="h-4 w-4 text-[#00b8a3]" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-[#ff375f]" />
                        )}
                        <span className="text-white font-medium">Test Case {result.testCase}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          result.passed ? 'bg-[#00b8a3] text-white' : 'bg-[#ff375f] text-white'
                        }`}>
                          {result.passed ? 'PASSED' : 'FAILED'}
                        </span>
                      </div>
                      <div className="text-sm text-[#b3b3b3] space-y-1">
                        <div>Input: {JSON.stringify(result.input)}</div>
                        <div>Expected: {JSON.stringify(result.expected)}</div>
                        <div>Actual: {JSON.stringify(result.actual)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemSolver;

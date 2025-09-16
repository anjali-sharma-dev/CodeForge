import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Filter,
  Search,
  Plus,
  BarChart3,
  Calendar,
  Award,
  Code2
} from 'lucide-react';
import ProblemList from '../components/DSATracker/ProblemList';
import ProgressDashboard from '../components/DSATracker/ProgressDashboard';
import StudyPlan from '../components/DSATracker/StudyPlan';
import ProblemSolver from '../components/DSATracker/ProblemSolver';

const DSATracker = () => {
  // State management
  const [activeTab, setActiveTab] = useState('problems');
  const [problems, setProblems] = useState([]);
  const [userProgress, setUserProgress] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    currentStreak: 0,
    longestStreak: 0,
    totalTimeSpent: 0
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedProblems = localStorage.getItem('dsa-problems');
    const savedProgress = localStorage.getItem('dsa-progress');
    
    if (savedProblems) {
      setProblems(JSON.parse(savedProblems));
    } else {
      // Initialize with sample problems
      initializeSampleProblems();
    }
    
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save data to localStorage whenever problems or progress changes
  useEffect(() => {
    localStorage.setItem('dsa-problems', JSON.stringify(problems));
  }, [problems]);

  useEffect(() => {
    localStorage.setItem('dsa-progress', JSON.stringify(userProgress));
  }, [userProgress]);

  // Initialize sample problems for beginners
  const initializeSampleProblems = () => {
    const sampleProblems = [
      {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        status: "not-attempted",
        timeSpent: 0,
        attempts: 0,
        tags: ["Array", "Hash Table"],
        hints: ["Use a hash map to store numbers and their indices", "Check if target - current number exists in the map"]
      },
      {
        id: 2,
        title: "Valid Parentheses",
        difficulty: "Easy",
        category: "Stack",
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        status: "not-attempted",
        timeSpent: 0,
        attempts: 0,
        tags: ["Stack", "String"],
        hints: ["Use a stack to keep track of opening brackets", "When you encounter a closing bracket, check if it matches the top of the stack"]
      },
      {
        id: 3,
        title: "Maximum Subarray",
        difficulty: "Medium",
        category: "Array",
        description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        status: "not-attempted",
        timeSpent: 0,
        attempts: 0,
        tags: ["Array", "Dynamic Programming"],
        hints: ["Use Kadane's algorithm", "Keep track of current sum and maximum sum"]
      },
      {
        id: 4,
        title: "Binary Tree Inorder Traversal",
        difficulty: "Easy",
        category: "Tree",
        description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
        status: "not-attempted",
        timeSpent: 0,
        attempts: 0,
        tags: ["Tree", "Stack", "Recursion"],
        hints: ["Inorder: Left -> Root -> Right", "Use recursion or iterative approach with stack"]
      },
      {
        id: 5,
        title: "Climbing Stairs",
        difficulty: "Easy",
        category: "Dynamic Programming",
        description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        status: "not-attempted",
        timeSpent: 0,
        attempts: 0,
        tags: ["Dynamic Programming", "Math"],
        hints: ["This is similar to Fibonacci sequence", "f(n) = f(n-1) + f(n-2)"]
      },
      {
        id: 6,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array",
        description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        status: "not-attempted",
        timeSpent: 0,
        attempts: 0,
        tags: ["Array", "Dynamic Programming"],
        hints: ["Keep track of minimum price seen so far", "Calculate profit for each day and keep maximum"]
      }
    ];
    setProblems(sampleProblems);
  };

  // Update problem status
  const updateProblemStatus = (problemId, status, timeSpent = 0) => {
    setProblems(prevProblems => 
      prevProblems.map(problem => 
        problem.id === problemId 
          ? { 
              ...problem, 
              status, 
              timeSpent: problem.timeSpent + timeSpent,
              attempts: problem.attempts + 1
            }
          : problem
      )
    );

    // Update user progress
    if (status === 'solved') {
      setUserProgress(prev => ({
        ...prev,
        totalSolved: prev.totalSolved + 1,
        totalTimeSpent: prev.totalTimeSpent + timeSpent
      }));
    }
  };

  // Tab configuration
  const tabs = [
    { id: 'problems', label: 'Problems', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'study-plan', label: 'Study Plan', icon: Target },
    { id: 'solver', label: 'Code Solver', icon: Code2 }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border-b border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                DSA Tracker
              </h1>
              <p className="text-[#b3b3b3] text-lg">
                Master Data Structures and Algorithms with structured learning
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#00b8a3]">
                {userProgress.totalSolved}
              </div>
              <div className="text-sm text-[#b3b3b3]">Problems Solved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#2a2a2a] text-white border-b-2 border-[#00b8a3]'
                    : 'text-[#b3b3b3] hover:text-white hover:bg-[#2a2a2a]'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'problems' && (
          <ProblemList 
            problems={problems}
            onUpdateStatus={updateProblemStatus}
          />
        )}
        
        {activeTab === 'progress' && (
          <ProgressDashboard 
            problems={problems}
            userProgress={userProgress}
          />
        )}
        
        {activeTab === 'study-plan' && (
          <StudyPlan 
            problems={problems}
            userProgress={userProgress}
          />
        )}
        
        {activeTab === 'solver' && (
          <ProblemSolver 
            problems={problems}
            onUpdateStatus={updateProblemStatus}
          />
        )}
      </div>
    </div>
  );
};

export default DSATracker;

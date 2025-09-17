import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Circle, 
  Clock, 
  Target, 
  TrendingUp,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Calendar,
  Award
} from 'lucide-react';

const StudyPlan = ({ problems, userProgress }) => {
  const [selectedPlan, setSelectedPlan] = useState('beginner');
  const [currentWeek, setCurrentWeek] = useState(1);
  const [completedTopics, setCompletedTopics] = useState(new Set());

  // Study plans configuration
  const studyPlans = {
    beginner: {
      name: "Beginner's Journey",
      duration: "8 weeks",
      description: "Perfect for those starting their DSA journey",
      topics: [
        {
          week: 1,
          title: "Arrays & Basic Operations",
          description: "Learn fundamental array operations and simple algorithms",
          problems: problems.filter(p => p.category === 'Array' && p.difficulty === 'Easy').slice(0, 3),
          concepts: ["Array traversal", "Two pointers", "Basic sorting"],
          estimatedTime: "5-7 hours"
        },
        {
          week: 2,
          title: "Strings & Pattern Matching",
          description: "Master string manipulation and basic pattern matching",
          problems: problems.filter(p => p.category === 'String' && p.difficulty === 'Easy').slice(0, 3),
          concepts: ["String manipulation", "Character counting", "Basic regex"],
          estimatedTime: "6-8 hours"
        },
        {
          week: 3,
          title: "Linked Lists",
          description: "Understand linked list operations and common patterns",
          problems: problems.filter(p => p.tags.includes('Linked List') && p.difficulty === 'Easy').slice(0, 3),
          concepts: ["Node traversal", "Insertion/deletion", "Two pointers"],
          estimatedTime: "7-9 hours"
        },
        {
          week: 4,
          title: "Stacks & Queues",
          description: "Learn LIFO and FIFO data structures",
          problems: problems.filter(p => p.category === 'Stack' && p.difficulty === 'Easy').slice(0, 3),
          concepts: ["Stack operations", "Queue operations", "Balanced parentheses"],
          estimatedTime: "6-8 hours"
        },
        {
          week: 5,
          title: "Binary Trees - Basics",
          description: "Introduction to tree data structures",
          problems: problems.filter(p => p.category === 'Tree' && p.difficulty === 'Easy').slice(0, 3),
          concepts: ["Tree traversal", "Height calculation", "Basic tree properties"],
          estimatedTime: "8-10 hours"
        },
        {
          week: 6,
          title: "Hash Tables",
          description: "Master key-value storage and lookups",
          problems: problems.filter(p => p.tags.includes('Hash Table') && p.difficulty === 'Easy').slice(0, 3),
          concepts: ["Hash functions", "Collision handling", "Frequency counting"],
          estimatedTime: "6-8 hours"
        },
        {
          week: 7,
          title: "Dynamic Programming - Basics",
          description: "Introduction to DP with simple problems",
          problems: problems.filter(p => p.category === 'Dynamic Programming' && p.difficulty === 'Easy').slice(0, 3),
          concepts: ["Memoization", "Tabulation", "Fibonacci patterns"],
          estimatedTime: "8-10 hours"
        },
        {
          week: 8,
          title: "Review & Practice",
          description: "Consolidate learning with mixed practice",
          problems: problems.filter(p => p.difficulty === 'Easy').slice(0, 5),
          concepts: ["Problem solving strategies", "Time complexity analysis", "Code optimization"],
          estimatedTime: "10-12 hours"
        }
      ]
    },
    intermediate: {
      name: "Intermediate Challenge",
      duration: "12 weeks",
      description: "For those ready to tackle medium-level problems",
      topics: [
        {
          week: 1,
          title: "Advanced Arrays",
          description: "Complex array algorithms and optimizations",
          problems: problems.filter(p => p.category === 'Array' && p.difficulty === 'Medium').slice(0, 4),
          concepts: ["Sliding window", "Prefix sums", "Two pointers advanced"],
          estimatedTime: "8-10 hours"
        },
        {
          week: 2,
          title: "Graph Algorithms - BFS/DFS",
          description: "Master graph traversal techniques",
          problems: problems.filter(p => p.category === 'Graph' && p.difficulty === 'Medium').slice(0, 4),
          concepts: ["Breadth-first search", "Depth-first search", "Cycle detection"],
          estimatedTime: "10-12 hours"
        },
        {
          week: 3,
          title: "Advanced Trees",
          description: "Binary search trees and balanced trees",
          problems: problems.filter(p => p.category === 'Tree' && p.difficulty === 'Medium').slice(0, 4),
          concepts: ["BST operations", "Tree balancing", "Tree construction"],
          estimatedTime: "9-11 hours"
        },
        {
          week: 4,
          title: "Dynamic Programming - Advanced",
          description: "Complex DP patterns and optimizations",
          problems: problems.filter(p => p.category === 'Dynamic Programming' && p.difficulty === 'Medium').slice(0, 4),
          concepts: ["2D DP", "State machine DP", "Space optimization"],
          estimatedTime: "10-12 hours"
        }
      ]
    }
  };

  const currentPlan = studyPlans[selectedPlan];
  const currentTopic = currentPlan.topics.find(topic => topic.week === currentWeek);

  const toggleTopicCompletion = (week) => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(week)) {
      newCompleted.delete(week);
    } else {
      newCompleted.add(week);
    }
    setCompletedTopics(newCompleted);
  };

  const getProgressPercentage = () => {
    return Math.round((completedTopics.size / currentPlan.topics.length) * 100);
  };

  const getWeekStatus = (week) => {
    if (completedTopics.has(week)) return 'completed';
    if (week === currentWeek) return 'current';
    if (week < currentWeek) return 'available';
    return 'locked';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-[#00b8a3]" />;
      case 'current':
        return <Play className="h-5 w-5 text-[#ffc01e]" />;
      case 'available':
        return <Circle className="h-5 w-5 text-[#666666]" />;
      case 'locked':
        return <Circle className="h-5 w-5 text-[#333333]" />;
      default:
        return <Circle className="h-5 w-5 text-[#666666]" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Plan Selection */}
      <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Choose Your Study Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(studyPlans).map(([key, plan]) => (
            <div
              key={key}
              onClick={() => setSelectedPlan(key)}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                selectedPlan === key
                  ? 'border-[#00b8a3] bg-[#00b8a3] bg-opacity-10'
                  : 'border-[#3a3a3a] hover:border-[#666666]'
              }`}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-[#b3b3b3] text-sm mb-2">{plan.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#00b8a3] font-medium">{plan.duration}</span>
                <span className="text-[#b3b3b3] text-sm">{plan.topics.length} weeks</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Progress Overview</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#00b8a3]">{getProgressPercentage()}%</div>
            <div className="text-sm text-[#b3b3b3]">Complete</div>
          </div>
        </div>
        
        <div className="w-full bg-[#2a2a2a] rounded-full h-3 mb-4">
          <div 
            className="bg-[#00b8a3] h-3 rounded-full transition-all duration-300"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-[#b3b3b3]">
          <span>{completedTopics.size} of {currentPlan.topics.length} weeks completed</span>
          <span>Week {currentWeek} of {currentPlan.topics.length}</span>
        </div>
      </div>

      {/* Weekly Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Topics List */}
        <div className="lg:col-span-1">
          <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Weekly Topics</h3>
            <div className="space-y-2">
              {currentPlan.topics.map((topic) => {
                const status = getWeekStatus(topic.week);
                return (
                  <div
                    key={topic.week}
                    onClick={() => status !== 'locked' && setCurrentWeek(topic.week)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      currentWeek === topic.week
                        ? 'bg-[#2a2a2a] border border-[#00b8a3]'
                        : status === 'completed'
                        ? 'bg-[#00b8a3] bg-opacity-10 border border-[#00b8a3]'
                        : status === 'available'
                        ? 'bg-[#2a2a2a] hover:bg-[#333333]'
                        : 'bg-[#1a1a1a] opacity-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(status)}
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">Week {topic.week}</div>
                        <div className="text-xs text-[#b3b3b3]">{topic.title}</div>
                      </div>
                      {status === 'completed' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTopicCompletion(topic.week);
                          }}
                          className="text-[#00b8a3] hover:text-[#00a693]"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current Topic Details */}
        <div className="lg:col-span-2">
          {currentTopic && (
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Week {currentTopic.week}: {currentTopic.title}
                  </h3>
                  <p className="text-[#b3b3b3]">{currentTopic.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-[#666666]" />
                  <span className="text-sm text-[#b3b3b3]">{currentTopic.estimatedTime}</span>
                </div>
              </div>

              {/* Concepts to Learn */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Concepts to Learn</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentTopic.concepts.map((concept, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-[#2a2a2a] rounded-md">
                      <Target className="h-4 w-4 text-[#00b8a3]" />
                      <span className="text-[#b3b3b3] text-sm">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practice Problems */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Practice Problems</h4>
                <div className="space-y-2">
                  {currentTopic.problems.map((problem) => (
                    <div key={problem.id} className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          problem.difficulty === 'Easy' ? 'bg-[#00b8a3]' :
                          problem.difficulty === 'Medium' ? 'bg-[#ffc01e]' : 'bg-[#ff375f]'
                        }`}></div>
                        <span className="text-white font-medium">{problem.title}</span>
                        <span className="text-[#b3b3b3] text-sm">{problem.difficulty}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {problem.status === 'solved' && <CheckCircle className="h-4 w-4 text-[#00b8a3]" />}
                        {problem.status === 'attempted' && <Circle className="h-4 w-4 text-[#ffc01e]" />}
                        {problem.status === 'not-attempted' && <Circle className="h-4 w-4 text-[#666666]" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => toggleTopicCompletion(currentTopic.week)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    completedTopics.has(currentTopic.week)
                      ? 'bg-[#ff375f] text-white hover:bg-[#e62e4a]'
                      : 'bg-[#00b8a3] text-white hover:bg-[#00a693]'
                  }`}
                >
                  {completedTopics.has(currentTopic.week) ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button className="px-4 py-2 bg-[#2a2a2a] text-white rounded-md hover:bg-[#333333] transition-colors">
                  Start Practice
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2" />
          Study Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00b8a3] rounded-full mt-2"></div>
              <div>
                <div className="text-white font-medium">Consistent Practice</div>
                <div className="text-[#b3b3b3] text-sm">Solve at least 2-3 problems daily</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00b8a3] rounded-full mt-2"></div>
              <div>
                <div className="text-white font-medium">Understand, Don't Memorize</div>
                <div className="text-[#b3b3b3] text-sm">Focus on understanding the underlying concepts</div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00b8a3] rounded-full mt-2"></div>
              <div>
                <div className="text-white font-medium">Time Management</div>
                <div className="text-[#b3b3b3] text-sm">Set time limits for each problem</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00b8a3] rounded-full mt-2"></div>
              <div>
                <div className="text-white font-medium">Review Regularly</div>
                <div className="text-[#b3b3b3] text-sm">Revisit solved problems to reinforce learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;

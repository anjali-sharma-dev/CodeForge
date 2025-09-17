import React from 'react';
import { 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Circle,
  BarChart3,
  Award,
  Zap
} from 'lucide-react';

const ProgressDashboard = ({ problems, userProgress }) => {
  // Calculate additional statistics
  const totalProblems = problems.length;
  const solvedProblems = problems.filter(p => p.status === 'solved').length;
  const attemptedProblems = problems.filter(p => p.status === 'attempted').length;
  const notAttemptedProblems = problems.filter(p => p.status === 'not-attempted').length;
  
  const easyProblems = problems.filter(p => p.difficulty === 'Easy');
  const mediumProblems = problems.filter(p => p.difficulty === 'Medium');
  const hardProblems = problems.filter(p => p.difficulty === 'Hard');
  
  const easySolved = easyProblems.filter(p => p.status === 'solved').length;
  const mediumSolved = mediumProblems.filter(p => p.status === 'solved').length;
  const hardSolved = hardProblems.filter(p => p.status === 'solved').length;
  
  const completionRate = totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;
  const easyCompletionRate = easyProblems.length > 0 ? Math.round((easySolved / easyProblems.length) * 100) : 0;
  const mediumCompletionRate = mediumProblems.length > 0 ? Math.round((mediumSolved / mediumProblems.length) * 100) : 0;
  const hardCompletionRate = hardProblems.length > 0 ? Math.round((hardSolved / hardProblems.length) * 100) : 0;
  
  // Calculate average time per problem
  const totalTimeSpent = problems.reduce((sum, p) => sum + p.timeSpent, 0);
  const averageTimePerProblem = solvedProblems > 0 ? Math.round(totalTimeSpent / solvedProblems) : 0;
  
  // Get category distribution
  const categoryStats = problems.reduce((acc, problem) => {
    const category = problem.category;
    if (!acc[category]) {
      acc[category] = { total: 0, solved: 0 };
    }
    acc[category].total++;
    if (problem.status === 'solved') {
      acc[category].solved++;
    }
    return acc;
  }, {});

  // Get recent activity (last 7 days - simulated)
  const recentActivity = [
    { date: '2024-01-15', problemsSolved: 2, timeSpent: 60 },
    { date: '2024-01-14', problemsSolved: 1, timeSpent: 45 },
    { date: '2024-01-13', problemsSolved: 3, timeSpent: 90 },
    { date: '2024-01-12', problemsSolved: 0, timeSpent: 0 },
    { date: '2024-01-11', problemsSolved: 1, timeSpent: 30 },
    { date: '2024-01-10', problemsSolved: 2, timeSpent: 75 },
    { date: '2024-01-09', problemsSolved: 1, timeSpent: 40 }
  ];

  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
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
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#b3b3b3] text-sm">Total Solved</p>
              <p className="text-2xl font-bold text-white">{solvedProblems}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-[#00b8a3]" />
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#b3b3b3] text-sm">Completion Rate</p>
              <p className="text-2xl font-bold text-white">{completionRate}%</p>
            </div>
            <Target className="h-8 w-8 text-[#00b8a3]" />
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#b3b3b3] text-sm">Current Streak</p>
              <p className="text-2xl font-bold text-white">{userProgress.currentStreak}</p>
            </div>
            <Zap className="h-8 w-8 text-[#ffc01e]" />
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#b3b3b3] text-sm">Total Time</p>
              <p className="text-2xl font-bold text-white">{formatTime(totalTimeSpent)}</p>
            </div>
            <Clock className="h-8 w-8 text-[#007acc]" />
          </div>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Difficulty Breakdown
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#00b8a3] font-medium">Easy</span>
                <span className="text-white">{easySolved}/{easyProblems.length}</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <div 
                  className="bg-[#00b8a3] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${easyCompletionRate}%` }}
                ></div>
              </div>
              <div className="text-xs text-[#b3b3b3] mt-1">{easyCompletionRate}% complete</div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#ffc01e] font-medium">Medium</span>
                <span className="text-white">{mediumSolved}/{mediumProblems.length}</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <div 
                  className="bg-[#ffc01e] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${mediumCompletionRate}%` }}
                ></div>
              </div>
              <div className="text-xs text-[#b3b3b3] mt-1">{mediumCompletionRate}% complete</div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#ff375f] font-medium">Hard</span>
                <span className="text-white">{hardSolved}/{hardProblems.length}</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <div 
                  className="bg-[#ff375f] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${hardCompletionRate}%` }}
                ></div>
              </div>
              <div className="text-xs text-[#b3b3b3] mt-1">{hardCompletionRate}% complete</div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Trophy className="h-5 w-5 mr-2" />
            Category Progress
          </h3>
          <div className="space-y-3">
            {Object.entries(categoryStats).map(([category, stats]) => {
              const completionRate = Math.round((stats.solved / stats.total) * 100);
              return (
                <div key={category}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#b3b3b3] text-sm">{category}</span>
                    <span className="text-white text-sm">{stats.solved}/{stats.total}</span>
                  </div>
                  <div className="w-full bg-[#2a2a2a] rounded-full h-1.5">
                    <div 
                      className="bg-[#00b8a3] h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${completionRate}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Recent Activity (Last 7 Days)
        </h3>
        <div className="space-y-3">
          {recentActivity.map((day, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-[#3a3a3a] last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${day.problemsSolved > 0 ? 'bg-[#00b8a3]' : 'bg-[#666666]'}`}></div>
                <span className="text-[#b3b3b3] text-sm">{day.date}</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-white">{day.problemsSolved} solved</span>
                <span className="text-[#b3b3b3]">{formatTime(day.timeSpent)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[#00b8a3] mb-1">{averageTimePerProblem}m</div>
          <div className="text-[#b3b3b3] text-sm">Avg Time per Problem</div>
        </div>
        
        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[#ffc01e] mb-1">{attemptedProblems}</div>
          <div className="text-[#b3b3b3] text-sm">Attempted Problems</div>
        </div>
        
        <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[#007acc] mb-1">{notAttemptedProblems}</div>
          <div className="text-[#b3b3b3] text-sm">Not Attempted</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;

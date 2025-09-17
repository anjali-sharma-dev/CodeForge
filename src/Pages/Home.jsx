import React, { useEffect, useState } from "react";
import { fetchLeaderboard, fetchProgress } from '../lib/api'
import { 
  Code, 
  Database, 
  Network, 
  Cpu, 
  GitBranch, 
  Layers, 
  Search, 
  Zap, 
  BookOpen, 
  Target, 
  Users, 
  TrendingUp,
  ChevronRight,
  Star,
  Clock,
  Award
} from "lucide-react";

const Home = () => {
  // Simple DSA topics data
  const dsaTopics = [
    {
      name: "Arrays & Strings",
      icon: <Layers className="w-8 h-8" />,
      description: "Master fundamental data structures",
      color: "bg-red-600",
      concepts: ["Array manipulation", "String algorithms", "Two pointers"]
    },
    {
      name: "Linked Lists",
      icon: <GitBranch className="w-8 h-8" />,
      description: "Dynamic data structures",
      color: "bg-gray-600",
      concepts: ["Singly/Doubly linked", "Circular lists", "Fast & slow pointers"]
    },
    {
      name: "Trees & Graphs",
      icon: <Network className="w-8 h-8" />,
      description: "Hierarchical structures",
      color: "bg-red-700",
      concepts: ["Binary trees", "Graph traversal", "Tree algorithms"]
    },
    {
      name: "Dynamic Programming",
      icon: <Zap className="w-8 h-8" />,
      description: "Optimization techniques",
      color: "bg-gray-700",
      concepts: ["Memoization", "Tabulation", "State optimization"]
    },
    {
      name: "Sorting & Searching",
      icon: <Search className="w-8 h-8" />,
      description: "Efficient algorithms",
      color: "bg-red-800",
      concepts: ["Quick sort", "Binary search", "Heap sort"]
    },
    {
      name: "Hash Tables",
      icon: <Database className="w-8 h-8" />,
      description: "Fast lookups",
      color: "bg-gray-800",
      concepts: ["Hash functions", "Collision handling", "Maps & Sets"]
    }
  ];

  // Simple core subjects data
  const coreSubjects = [
    {
      name: "Operating Systems",
      icon: <Cpu className="w-6 h-6" />,
      description: "Process management, memory, file systems",
      difficulty: "Advanced"
    },
    {
      name: "Database Systems",
      icon: <Database className="w-6 h-6" />,
      description: "SQL, normalization, indexing, transactions",
      difficulty: "Intermediate"
    },
    {
      name: "Computer Networks",
      icon: <Network className="w-6 h-6" />,
      description: "TCP/IP, protocols, network security",
      difficulty: "Advanced"
    },
    {
      name: "System Design",
      icon: <Layers className="w-6 h-6" />,
      description: "Scalable architecture, microservices",
      difficulty: "Expert"
    }
  ];

  // Simple companies data
  const companies = [
    { name: "Google", logo: "🔍", difficulty: "Hard" },
    { name: "Microsoft", logo: "🪟", difficulty: "Hard" },
    { name: "Amazon", logo: "📦", difficulty: "Hard" },
    { name: "Meta", logo: "📘", difficulty: "Hard" },
    { name: "Apple", logo: "🍎", difficulty: "Hard" },
    { name: "Netflix", logo: "🎬", difficulty: "Hard" }
  ];

  // Simple learning paths data
  const learningPaths = [
    {
      title: "Beginner Path",
      description: "Start your DSA journey",
      duration: "3 months",
      topics: ["Arrays", "Strings", "Basic Sorting"],
      color: "bg-red-100 border-red-200",
      icon: <BookOpen className="w-6 h-6 text-red-600" />
    },
    {
      title: "Intermediate Path",
      description: "Build on fundamentals",
      duration: "4 months",
      topics: ["Trees", "Graphs", "Dynamic Programming"],
      color: "bg-gray-100 border-gray-200",
      icon: <Target className="w-6 h-6 text-gray-600" />
    },
    {
      title: "Advanced Path",
      description: "Master complex algorithms",
      duration: "5 months",
      topics: ["Advanced DP", "Graph Algorithms", "System Design"],
      color: "bg-red-200 border-red-300",
      icon: <Award className="w-6 h-6 text-red-700" />
    }
  ];

  const [leaderboard, setLeaderboard] = useState([])
  const [progress, setProgress] = useState(null)

  useEffect(() => {
    fetchLeaderboard().then(setLeaderboard).catch(() => {})
    fetchProgress().then(setProgress).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section - Dark Theme */}
      <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Master Data Structures & Algorithms
            </h1>
            <p className="text-xl mb-8 text-[#b3b3b3] max-w-3xl mx-auto">
              Your comprehensive platform to learn, practice, and excel in computer science fundamentals. 
              From basic concepts to advanced algorithms, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#00b8a3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00a693] transition-colors" onClick={() => window.location.href = '/problems'}>
                Start Learning
              </button>
             
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
      
        {/* DSA Topics Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4"> Topics</h2>
            <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto">
              Master the essential data structures and algorithms that form the foundation of computer science
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dsaTopics.map((topic, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-[#3a3a3a] hover:border-[#00b8a3]">
                <div className={`${topic.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{topic.name}</h3>
                <p className="text-[#b3b3b3] mb-4">{topic.description}</p>
                <div className="space-y-2">
                  {topic.concepts.map((concept, idx) => (
                    <div key={idx} className="flex items-center text-sm text-[#666666]">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {concept}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Core Subjects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Core Computer Science Subjects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential subjects for software engineering interviews and career growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSubjects.map((subject, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-[#3a3a3a] hover:border-[#00b8a3]">
                <div className="flex items-center mb-4">
                  <div className=" p-3 rounded-lg mr-4">
                    {subject.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{subject.name}</h3>
                    <span className={`text-xs px-2 py-1  ${
                      subject.difficulty === 'Expert' ? ' text-yellow-700' :
                      subject.difficulty === 'Advanced' ? ' text-orange-700' :
                      'text-green-700'
                    }`}>
                      {subject.difficulty}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Preparation Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Company-Specific Preparation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored preparation for top tech companies and their interview patterns
            </p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-xl shadow-lg  p-6 border border-[#3a3a3a] ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
              {companies.map((company, index) => (
                <div key={index} className="text-center p-4  cursor-pointer hover:shadow-xl  transition-all duration-300 rounded-lg border border-transparent hover:border-[#00b8a3]  ">
                  <div className="text-4xl mb-2">{company.logo}</div>
                  <h3 className="font-semibold text-white mb-1">{company.name}</h3>
                 
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="bg-[#00b8a3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00b8a5] transition-colors">
                View Company Guides
              </button>
            </div>
          </div>
        </div>

        {/* Learning Paths Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Structured Learning Paths</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow our curated learning paths designed for different skill levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className={`$ rounded-xl p-6 border-2 hover:border-[#00b8a3] transition-all duration-300 bg-[#1a1a1a] border-transparent`}>
                <div className="flex items-center mb-4">
                  {path.icon}
                  <div className="ml-3 ">
                    <h3 className="text-lg font-semibold text-white">{path.title}</h3>
                    <p className="text-sm text-gray-600">{path.description}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration: {path.duration}
                  </div>
                  <div className="space-y-1">
                    {path.topics.map((topic, idx) => (
                      <div key={idx} className="text-sm text-gray-700">• {topic}</div>
                    ))}
                  </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section - Red Theme */}
        <div className="bg-[#00b8a3] to-red-800 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
            <p className="text-red-100">Thousands of students are already mastering DSA with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-red-200">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-red-200">Topics Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-red-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-red-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

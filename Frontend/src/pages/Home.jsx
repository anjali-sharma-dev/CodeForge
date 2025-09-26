import React, { useEffect, useState, useRef } from "react";
import {
  Database,
  Network,
  Cpu,
  GitBranch,
  Layers,
  Search,
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import CoreTopic from "../components/home_compo/CoreTopic";
import DsaTopic from "../components/home_compo/DsaTopic";
import CompanyWise from "../components/home_compo/CompanyWise";
import { Link } from "react-router-dom";


const Home = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const dsaTopics = [
    {
      name: "Arrays & Strings",
      icon: <Layers className="w-8 h-8" />,
      description: "Master fundamental data structures",
      color: "bg-red-600",
      concepts: ["Array manipulation", "String algorithms", "Two pointers"],
    },
    {
      name: "Linked Lists",
      icon: <GitBranch className="w-8 h-8" />,
      description: "Dynamic data structures",
      color: "bg-gray-600",
      concepts: ["Singly/Doubly linked", "Circular lists", "Fast & slow pointers"],
    },
    {
      name: "Trees & Graphs",
      icon: <Network className="w-8 h-8" />,
      description: "Hierarchical structures",
      color: "bg-red-700",
      concepts: ["Binary trees", "Graph traversal", "Tree algorithms"],
    },
    {
      name: "DP",
      icon: <Zap className="w-8 h-8" />,
      description: "Optimization techniques",
      color: "bg-gray-700",
      concepts: ["Memoization", "Tabulation", "State optimization"],
    },
    {
      name: "Sorting & Searching",
      icon: <Search className="w-8 h-8" />,
      description: "Efficient algorithms",
      color: "bg-red-800",
      concepts: ["Quick sort", "Binary search", "Heap sort"],
    },
    {
      name: "Hash Tables",
      icon: <Database className="w-8 h-8" />,
      description: "Fast lookups",
      color: "bg-gray-800",
      concepts: ["Hash functions", "Collision handling", "Maps & Sets"],
    },
  ];

  const coreSubjects = [
    {
      name: "Operating Systems",
      icon: <Cpu className="w-6 h-6" />,
      description: "Process management, memory, file systems",
      difficulty: "Advanced",
    },
    {
      name: "Database Systems",
      icon: <Database className="w-6 h-6" />,
      description: "SQL, normalization, indexing, transactions",
      difficulty: "Intermediate",
    },
    {
      name: "Computer Networks",
      icon: <Network className="w-6 h-6" />,
      description: "TCP/IP, protocols, network security",
      difficulty: "Advanced",
    },
    {
      name: "System Design",
      icon: <Layers className="w-6 h-6" />,
      description: "Scalable architecture, microservices",
      difficulty: "Expert",
    },
  ];

  const companies = [
    { name: "Google", logo: "🔍", difficulty: "Hard" },
    { name: "Microsoft", logo: "🪟", difficulty: "Hard" },
    { name: "Amazon", logo: "📦", difficulty: "Hard" },
    { name: "Meta", logo: "📘", difficulty: "Hard" },
    { name: "Apple", logo: "🍎", difficulty: "Hard" },
    { name: "Netflix", logo: "🎬", difficulty: "Hard" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className=" bg-gradient-to-r from-[#dbfff7] to-[#dbfff7] text-center py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-[#00b8a3] mb-6">
          Master Data Structures <br className="md:hidden" /> & Algorithms
        </h1>
         
         <p className="text-gray-600 text-lg mb-6 px-3">
            This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner.
            <span className="ml-2 inline-block text-[#00b8a3] hover:underline cursor-pointer">Know More</span>
          </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#00b8a3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00a693] transition-colors">
          <Link to="/login">

            Sign In to Start
          </Link>
          </button>
          <button className="bg-white border border-[#00b8a3] text-[#00b8a3] px-8 py-3 rounded-lg font-semibold hover:bg-[#e6fff9] transition-colors">
          <Link to="/register">
            Create Account
          </Link>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* dsa-topic Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#00b8a3] mb-4">Topics</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Master the essential data structures and algorithms that form the foundation of computer science
          </p>

          <div className="relative">
            <ArrowRight className="absolute top-1/2 right-2 transform -translate-y-1/2 text-green-600" />
            <div className="relative">
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
              >
                <ChevronLeft className="text-[#00b8a3]" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
              >
                <ChevronRight className="text-[#00b8a3]" />
              </button>
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto px-6 py-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-white"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
              >
                {dsaTopics.map((item, index) => (
                  <DsaTopic key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* core-subject Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#00b8a3] mb-4">Core Subjects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Master the essential data structures and algorithms that form the foundation of computer science
          </p>

          <div className="relative">
            <ArrowRight className="absolute top-1/2 right-2 transform -translate-y-1/2 text-green-600" />
            <div className="relative">
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
              >
                <ChevronLeft className="text-[#00b8a3]" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
              >
                <ChevronRight className="text-[#00b8a3]" />
              </button>
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto px-6 py-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-white"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
              >
                {coreSubjects.map((item, index) => (
                  <CoreTopic key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* company Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#00b8a3] mb-4">Core Subjects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Master the essential data structures and algorithms that form the foundation of computer science
          </p>

          <div className="relative">
            <ArrowRight className="absolute top-1/2 right-2 transform -translate-y-1/2 text-green-600" />
            <div className="relative">
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
              >
                <ChevronLeft className="text-[#00b8a3]" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
              >
                <ChevronRight className="text-[#00b8a3]" />
              </button>
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto px-6 py-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-white"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
              >
                {companies.map((item, index) => (
                  <CompanyWise key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats Section */}
       

      </div>

       <div className="bg-[#00b8a3] rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
          <p className="text-white mb-8">Thousands of students are already mastering DSA with us</p>
          <div className="flex  justify-between px-20">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-white">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white">Topics Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white">Support Available</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
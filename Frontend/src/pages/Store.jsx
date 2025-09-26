import React, { useState } from 'react'
import { 
  ShoppingCart, 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  Video, 
  Download, 
  Heart,
  Filter,
  Search,
  ChevronDown
} from 'lucide-react'

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Courses', count: 24 },
    { id: 'dsa', name: 'Data Structures', count: 8 },
    { id: 'algorithms', name: 'Algorithms', count: 6 },
    { id: 'system-design', name: 'System Design', count: 4 },
    { id: 'interview', name: 'Interview Prep', count: 6 }
  ]

  const courses = [
    {
      id: 1,
      title: "Complete DSA Masterclass",
      instructor: "Dr. Sarah Johnson",
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      students: 12500,
      duration: "40 hours",
      level: "Beginner to Advanced",
      category: "dsa",
      image: "📚",
      description: "Master all essential data structures and algorithms from scratch",
      features: ["Lifetime access", "Certificate", "Mobile app", "Community support"],
      isWishlisted: false,
      isBestSeller: true
    },
    {
      id: 2,
      title: "System Design Fundamentals",
      instructor: "Alex Chen",
      price: 149,
      originalPrice: 199,
      rating: 4.9,
      students: 8900,
      duration: "25 hours",
      level: "Intermediate",
      category: "system-design",
      image: "🏗️",
      description: "Learn to design scalable systems for tech interviews",
      features: ["Real-world projects", "Mock interviews", "Design patterns"],
      isWishlisted: true,
      isBestSeller: false
    },
    {
      id: 3,
      title: "Algorithm Patterns & Techniques",
      instructor: "Prof. Michael Davis",
      price: 179,
      originalPrice: 249,
      rating: 4.7,
      students: 15600,
      duration: "35 hours",
      level: "Intermediate to Advanced",
      category: "algorithms",
      image: "🧮",
      description: "Master common algorithm patterns used in coding interviews",
      features: ["Pattern recognition", "Practice problems", "Video solutions"],
      isWishlisted: false,
      isBestSeller: true
    },
    {
      id: 4,
      title: "Interview Success Bootcamp",
      instructor: "Emma Wilson",
      price: 99,
      originalPrice: 149,
      rating: 4.6,
      students: 22000,
      duration: "20 hours",
      level: "All Levels",
      category: "interview",
      image: "🎯",
      description: "Complete preparation for technical interviews at top companies",
      features: ["Mock interviews", "Company-specific prep", "Resume review"],
      isWishlisted: false,
      isBestSeller: false
    },
    {
      id: 5,
      title: "Advanced Graph Algorithms",
      instructor: "Dr. Robert Kim",
      price: 129,
      originalPrice: 179,
      rating: 4.8,
      students: 6800,
      duration: "18 hours",
      level: "Advanced",
      category: "algorithms",
      image: "🕸️",
      description: "Deep dive into complex graph algorithms and applications",
      features: ["Advanced concepts", "Complex problems", "Performance analysis"],
      isWishlisted: true,
      isBestSeller: false
    },
    {
      id: 6,
      title: "Dynamic Programming Mastery",
      instructor: "Lisa Zhang",
      price: 159,
      originalPrice: 219,
      rating: 4.9,
      students: 11200,
      duration: "22 hours",
      level: "Intermediate to Advanced",
      category: "dsa",
      image: "⚡",
      description: "Master dynamic programming from basic to advanced concepts",
      features: ["Step-by-step approach", "Common patterns", "Optimization techniques"],
      isWishlisted: false,
      isBestSeller: true
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleWishlist = (courseId) => {
   
    console.log('Toggle wishlist for course:', courseId)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="bg-[#1a1a1a] shadow-sm border-b border-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Course Store</h1>
              <p className="text-[#b3b3b3] mt-1">Discover and enroll in premium courses</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#3a3a3a] rounded-lg focus:ring-2 focus:ring-[#00b8a3] focus:border-transparent bg-[#2a2a2a] text-white placeholder-[#666666]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#00b8a3] bg-opacity-20 text-[#00b8a3]'
                        : 'text-[#b3b3b3] hover:bg-[#2a2a2a]'
                    }`}
                  >
                    <span className="font-medium text-white">{category.name}</span>
                    <span className="text-sm text-[#b3b3b3]">{category.count}</span>
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <div className="mt-8">
                <h4 className="text-sm font-medium text-white mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center text-[#b3b3b3]">
                    <input type="radio" name="price" className="mr-2" defaultChecked />
                    <span className="text-sm">All Prices</span>
                  </label>
                  <label className="flex items-center text-[#b3b3b3]">
                    <input type="radio" name="price" className="mr-2" />
                    <span className="text-sm">Under $100</span>
                  </label>
                  <label className="flex items-center text-[#b3b3b3]">
                    <input type="radio" name="price" className="mr-2" />
                    <span className="text-sm">$100 - $200</span>
                  </label>
                  <label className="flex items-center text-[#b3b3b3]">
                    <input type="radio" name="price" className="mr-2" />
                    <span className="text-sm">Over $200</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {filteredCourses.length} courses found
                </h2>
                <p className="text-[#b3b3b3]">Showing results for "{selectedCategory === 'all' ? 'All Courses' : categories.find(c => c.id === selectedCategory)?.name}"</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#b3b3b3]">Sort by:</span>
                <select className="bg-[#1a1a1a] border border-[#3a3a3a] text-white rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-[#00b8a3] focus:border-transparent">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-[#1a1a1a] rounded-xl border border-[#3a3a3a] hover:border-[#666666] transition-colors duration-300 overflow-hidden">
                  {/* Course Image */}
                  <div className="h-48 bg-gradient-to-br from-[#007acc] to-[#00b8a3] flex items-center justify-center text-6xl">
                    {course.image}
                  </div>
                  
                  <div className="p-6">
                    {/* Course Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-[#b3b3b3]">by {course.instructor}</p>
                      </div>
                      <button
                        onClick={() => toggleWishlist(course.id)}
                        className={`p-2 rounded-full transition-colors ${
                          course.isWishlisted 
                            ? 'text-[#ff375f]  bg-opacity-10' 
                            : 'text-[#b3b3b3] hover:text-[#ff375f] hover:bg-[#2a2a2a]'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${course.isWishlisted ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Course Description */}
                    <p className="text-sm text-[#b3b3b3] mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Course Stats */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-[#b3b3b3]">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-[#ffc01e] mr-1" />
                        {course.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>

                    {/* Course Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {course.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-[#2a2a2a] text-[#b3b3b3] px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {course.features.length > 2 && (
                          <span className="text-xs text-[#b3b3b3]">+{course.features.length - 2} more</span>
                        )}
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex items-center space-x-2 mb-4">
                      {course.isBestSeller && (
                        <span className="text-xs bg-opacity-20 text-[#ff8c00] px-2 py-1 rounded-full font-medium">
                          Best Seller
                        </span>
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        course.level === 'Beginner' ? 'bg-[#00b8a3] bg-opacity-20 text-[#00b8a3]' :
                        course.level === 'Intermediate' ? ' bg-opacity-20 text-[#ffc01e]' :
                        ' bg-opacity-20 text-[#ff375f]'
                      }`}>
                        {course.level}
                      </span>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">${course.price}</span>
                        {course.originalPrice > course.price && (
                          <span className="text-sm text-[#b3b3b3] line-through ml-2">
                            ${course.originalPrice}
                          </span>
                        )}
                      </div>
                      <button className="bg-[#00b8a3] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#00a693] transition-colors flex items-center">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {filteredCourses.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-[#2a2a2a] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#333333] transition-colors">
                  Load More Courses
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store;

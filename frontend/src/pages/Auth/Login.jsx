import React, { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData)
      setIsLoading(false)
      // In a real app, handle login logic here
    }, 2000)
  }

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
    // In a real app, implement social login
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-[#00b8a3] rounded-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-[#b3b3b3]">
            Sign in to your account to continue learning
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-[#1a1a1a] py-8 px-6 shadow-xl rounded-lg border border-[#3a3a3a]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#666666]" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-[#3a3a3a] placeholder-[#666666] text-white bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b8a3] focus:border-transparent focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#666666]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full pl-10 pr-12 py-3 border border-[#3a3a3a] placeholder-[#666666] text-white bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b8a3] focus:border-transparent focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-[#666666] hover:text-white" />
                  ) : (
                    <Eye className="h-5 w-5 text-[#666666] hover:text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-[#00b8a3] focus:ring-[#00b8a3] border-[#3a3a3a] rounded bg-[#2a2a2a]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#00b8a3] hover:text-[#00a693]">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#00b8a3] hover:bg-[#00a693] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00b8a3] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Sign in
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#3a3a3a]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1a1a1a] text-[#b3b3b3]">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="w-full inline-flex justify-center py-3 px-4 border border-[#3a3a3a] rounded-lg shadow-sm bg-[#2a2a2a] text-sm font-medium text-white hover:bg-[#3a3a3a] transition-colors"
              >
                <Chrome className="h-5 w-5 mr-2" />
                Google
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('GitHub')}
                className="w-full inline-flex justify-center py-3 px-4 border border-[#3a3a3a] rounded-lg shadow-sm bg-[#2a2a2a] text-sm font-medium text-white hover:bg-[#3a3a3a] transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#b3b3b3]">
              Don't have an account?{' '}
              <a href="/register" className="font-medium text-[#00b8a3] hover:text-[#00a693]">
                Sign up for free
              </a>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-xs text-[#666666]">
            By signing in, you agree to our{' '}
            <a href="#" className="text-[#00b8a3] hover:text-[#00a693]">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-[#00b8a3] hover:text-[#00a693]">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

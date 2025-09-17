# DSA Tracker Application

A comprehensive Data Structures and Algorithms tracking application built with React and Tailwind CSS, designed to help beginners learn and practice coding problems.

## Features

### 🎯 Problem Management
- **Problem List**: Browse and filter problems by difficulty, category, and status
- **Search Functionality**: Find problems by title, description, or tags
- **Status Tracking**: Mark problems as not attempted, attempted, or solved
- **Time Tracking**: Record time spent on each problem
- **Problem Details**: View detailed descriptions, hints, and tags

### 📊 Progress Dashboard
- **Statistics Overview**: Total solved problems, completion rate, current streak
- **Difficulty Breakdown**: Progress tracking for Easy, Medium, and Hard problems
- **Category Progress**: Track progress across different DSA categories
- **Recent Activity**: View daily progress over the last 7 days
- **Performance Metrics**: Average time per problem, attempt counts

### 📚 Study Plans
- **Beginner's Journey**: 8-week structured learning path
- **Intermediate Challenge**: 12-week advanced curriculum
- **Weekly Topics**: Organized learning with concepts and practice problems
- **Progress Tracking**: Mark completed topics and track overall progress
- **Study Tips**: Helpful guidance for effective learning

### 💻 Code Solver
- **Multi-language Support**: JavaScript, Python, Java, C++
- **Code Editor**: Syntax-highlighted editor with language selection
- **Test Execution**: Run code against test cases
- **Hints System**: Progressive hints to help when stuck
- **Timer**: Track time spent on each problem
- **Solution Submission**: Submit and track solution status

## Technical Features

### 🎨 UI/UX
- **Dark Theme**: Modern dark interface with consistent color scheme
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Accessibility**: Keyboard navigation and screen reader friendly

### 💾 Data Persistence
- **Local Storage**: All progress and data saved locally
- **State Management**: React hooks for efficient state management
- **Data Synchronization**: Real-time updates across components

### 🔧 Beginner-Friendly Code
- **Clear Comments**: Well-documented code with explanations
- **Modular Structure**: Separated components for easy maintenance
- **Consistent Naming**: Descriptive variable and function names
- **Error Handling**: Graceful error handling and user feedback

## File Structure

```
src/components/DSATracker/
├── ProblemList.jsx          # Problem browsing and filtering
├── ProgressDashboard.jsx    # Statistics and progress tracking
├── StudyPlan.jsx           # Structured learning paths
├── ProblemSolver.jsx       # Code editor and execution
└── README.md              # This documentation
```

## Usage

1. **Navigate to DSA Tracker**: Click "DSA Tracker" in the navigation menu
2. **Browse Problems**: Use the Problems tab to find and filter problems
3. **Track Progress**: View your progress in the Progress tab
4. **Follow Study Plan**: Use the Study Plan tab for structured learning
5. **Solve Problems**: Use the Code Solver tab to practice coding

## Sample Data

The application comes with pre-loaded sample problems covering:
- Arrays and basic operations
- String manipulation
- Stack and queue operations
- Binary tree traversal
- Dynamic programming basics
- Hash table operations

## Customization

### Adding New Problems
Add problems to the `initializeSampleProblems` function in `DSATracker.jsx`:

```javascript
{
  id: uniqueId,
  title: "Problem Title",
  difficulty: "Easy|Medium|Hard",
  category: "Array|String|Tree|...",
  description: "Problem description",
  status: "not-attempted",
  timeSpent: 0,
  attempts: 0,
  tags: ["tag1", "tag2"],
  hints: ["hint1", "hint2"]
}
```

### Adding New Study Plans
Extend the `studyPlans` object in `StudyPlan.jsx` with new learning paths.

### Customizing Themes
Modify the CSS variables in `index.css` to change colors and styling.

## Technologies Used

- **React 19**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **React Router**: Client-side routing
- **Local Storage**: Browser storage for data persistence

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Navigate to `/dsa-tracker` to access the application

## Future Enhancements

- Backend integration for real code execution
- User authentication and cloud sync
- Advanced analytics and insights
- Collaborative features and leaderboards
- Mobile app development
- Additional programming languages
- Video tutorials and explanations

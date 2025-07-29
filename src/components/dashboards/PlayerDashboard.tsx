import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Target, BarChart3, Clock, ArrowRight, Star } from 'lucide-react';

const PlayerDashboard: React.FC = () => {
  const assessments = [
    {
      id: 1,
      name: 'Speed & Agility Assessment',
      description: 'Comprehensive evaluation of your speed, agility, and quick-change direction abilities',
      duration: '45 mins',
      difficulty: 'Intermediate',
      category: 'Physical Performance'
    },
    {
      id: 2,
      name: 'Mental Resilience Assessment',
      description: 'Assess your mental toughness, focus, and ability to perform under pressure',
      duration: '30 mins',
      difficulty: 'Advanced',
      category: 'Mental Performance'
    },
    {
      id: 3,
      name: 'Technical Skills Assessment',
      description: 'Evaluate sport-specific technical skills and movement patterns',
      duration: '60 mins',
      difficulty: 'Beginner',
      category: 'Technical Skills'
    }
  ];

  const recentResults = [
    {
      assessment: 'Endurance Assessment',
      score: 85,
      date: '2024-01-15',
      category: 'Physical Performance'
    },
    {
      assessment: 'Coordination Assessment',
      score: 92,
      date: '2024-01-10',
      category: 'Motor Skills'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
            <p className="text-gray-600 mt-2">Track your progress and take new assessments to improve your performance</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="metric-card">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600">Overall Score</p>
                  <p className="text-2xl font-bold text-gray-900">88.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Assessments Completed</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900">86.2</p>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Improvement Rate</p>
              <p className="text-2xl font-bold text-gray-900">+12%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Assessments */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Available Assessments</h2>
          <span className="text-sm text-gray-500">Choose an assessment to get started</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {assessments.map((assessment) => (
            <div key={assessment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{assessment.name}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {assessment.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{assessment.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{assessment.duration}</span>
                </div>
                <span className="font-medium">{assessment.difficulty}</span>
              </div>
              
              <Link
                to="/player/assessment"
                className="flex items-center justify-center w-full btn-primary"
              >
                <span>Start Assessment</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Results */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Results</h2>
          <Link to="/player/results" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All Results
          </Link>
        </div>
        
        <div className="space-y-4">
          {recentResults.map((result, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">{result.assessment}</h3>
                <p className="text-sm text-gray-600">{result.category} • {result.date}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{result.score}</p>
                <p className="text-sm text-gray-500">Score</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard;
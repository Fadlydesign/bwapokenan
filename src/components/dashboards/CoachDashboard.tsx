import React, { useState } from 'react';
import { Calendar, Users, BarChart3, TrendingUp, Award, Clock } from 'lucide-react';

const CoachDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'book' | 'insights'>('overview');
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

  const teamPlayers = [
    { id: '1', name: 'Alex Rodriguez', position: 'Forward', lastAssessment: '2024-01-15', avgScore: 88 },
    { id: '2', name: 'Jordan Smith', position: 'Midfielder', lastAssessment: '2024-01-18', avgScore: 82 },
    { id: '3', name: 'Sam Johnson', position: 'Defender', lastAssessment: '2024-01-12', avgScore: 91 },
    { id: '4', name: 'Taylor Brown', position: 'Goalkeeper', lastAssessment: '2024-01-20', avgScore: 85 },
    { id: '5', name: 'Morgan Davis', position: 'Midfielder', lastAssessment: '2024-01-14', avgScore: 87 },
    { id: '6', name: 'Casey Wilson', position: 'Forward', lastAssessment: '2024-01-19', avgScore: 90 }
  ];

  const assessmentTypes = [
    { id: 'speed', name: 'Speed & Agility Assessment', duration: '45 mins', category: 'Physical' },
    { id: 'mental', name: 'Mental Resilience Assessment', duration: '30 mins', category: 'Mental' },
    { id: 'technical', name: 'Technical Skills Assessment', duration: '60 mins', category: 'Technical' },
    { id: 'endurance', name: 'Endurance Assessment', duration: '40 mins', category: 'Physical' }
  ];

  const teamInsights = {
    totalPlayers: 24,
    averageTeamScore: 86.8,
    improvementRate: 12,
    assessmentsThisMonth: 48,
    topPerformers: [
      { name: 'Sam Johnson', score: 91, improvement: '+5' },
      { name: 'Casey Wilson', score: 90, improvement: '+3' },
      { name: 'Alex Rodriguez', score: 88, improvement: '+8' }
    ],
    areasFocus: [
      { area: 'Speed Development', percentage: 68, players: 16 },
      { area: 'Mental Resilience', percentage: 45, players: 11 },
      { area: 'Technical Skills', percentage: 72, players: 17 }
    ]
  };

  const handlePlayerSelect = (playerId: string) => {
    setSelectedPlayers(prev => 
      prev.includes(playerId) 
        ? prev.filter(id => id !== playerId)
        : [...prev, playerId]
    );
  };

  const handleBookAssessment = () => {
    if (selectedPlayers.length > 0) {
      alert(`Assessment booked for ${selectedPlayers.length} player(s)`);
      setSelectedPlayers([]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Coach Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage team assessments and track performance insights</p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('book')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'book' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Book Assessments
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'insights' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Team Insights
            </button>
          </div>
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <>
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="dashboard-card">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Players</p>
                  <p className="text-2xl font-bold text-gray-900">{teamInsights.totalPlayers}</p>
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Team Average</p>
                  <p className="text-2xl font-bold text-gray-900">{teamInsights.averageTeamScore}</p>
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Improvement</p>
                  <p className="text-2xl font-bold text-gray-900">+{teamInsights.improvementRate}%</p>
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">{teamInsights.assessmentsThisMonth}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Team Activity */}
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Team Roster</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Player</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Position</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Last Assessment</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Avg Score</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teamPlayers.map((player) => (
                    <tr key={player.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600">
                              {player.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="font-medium text-gray-900">{player.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{player.position}</td>
                      <td className="py-3 px-4 text-gray-600">{player.lastAssessment}</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-gray-900">{player.avgScore}</span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Book Assessments Tab */}
      {activeTab === 'book' && (
        <div className="space-y-6">
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Book Team Assessments</h2>
            
            {/* Assessment Type Selection */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-4">Select Assessment Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {assessmentTypes.map((assessment) => (
                  <div key={assessment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{assessment.name}</h4>
                      <span className="text-sm text-gray-500">{assessment.duration}</span>
                    </div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {assessment.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Player Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">Select Players</h3>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setSelectedPlayers(teamPlayers.map(p => p.id))}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    Select All
                  </button>
                  <button 
                    onClick={() => setSelectedPlayers([])}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Clear All
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {teamPlayers.map((player) => (
                  <div 
                    key={player.id}
                    onClick={() => handlePlayerSelect(player.id)}
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      selectedPlayers.includes(player.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                        selectedPlayers.includes(player.id)
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedPlayers.includes(player.id) && (
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/>
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{player.name}</p>
                        <p className="text-sm text-gray-500">{player.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Options */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-4">Schedule Assessment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input 
                    type="time" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Training Ground A</option>
                    <option>Training Ground B</option>
                    <option>Indoor Facility</option>
                    <option>Gym</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                {selectedPlayers.length} player{selectedPlayers.length !== 1 ? 's' : ''} selected
              </p>
              <button
                onClick={handleBookAssessment}
                disabled={selectedPlayers.length === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedPlayers.length > 0
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Assessment</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Team Insights Tab */}
      {activeTab === 'insights' && (
        <div className="space-y-6">
          {/* Top Performers */}
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Performers</h2>
            <div className="space-y-4">
              {teamInsights.topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full">
                      <Award className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{performer.name}</p>
                      <p className="text-sm text-gray-600">Latest Score: {performer.score}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-green-600">{performer.improvement}</span>
                    <p className="text-xs text-gray-500">Improvement</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Focus */}
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Team Development Areas</h2>
            <div className="space-y-6">
              {teamInsights.areasFocus.map((area, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{area.area}</span>
                    <span className="text-sm text-gray-600">{area.players} players need focus</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${area.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{area.percentage}% of team needs improvement</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Progress Chart */}
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Team Progress Trends</h2>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Progress charts and analytics will be displayed here</p>
              <p className="text-sm text-gray-500 mt-2">Integration with data visualization library required</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachDashboard;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Share2, TrendingUp, TrendingDown, Minus, Eye, EyeOff } from 'lucide-react';

const PlayerResults: React.FC = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const assessmentResult = {
    name: 'Speed & Agility Assessment',
    completedDate: '2024-01-20',
    overallScore: 87,
    previousScore: 82,
    duration: '45 minutes',
    sections: [
      {
        title: 'Physical Preparation',
        score: 95,
        maxScore: 100,
        details: showFullContent ? 'Excellent warm-up execution with proper form' : '████████████████████████████',
        improvements: showFullContent ? ['Maintain dynamic stretching routine', 'Focus on joint mobility'] : ['████████████████████', '████████████████████']
      },
      {
        title: 'Speed Tests',
        score: 78,
        maxScore: 100,
        details: showFullContent ? 'Good acceleration but room for improvement in top speed' : '████████████████████████████████',
        improvements: showFullContent ? ['Work on stride frequency', 'Improve starting technique'] : ['███████████████████', '█████████████████████']
      },
      {
        title: 'Agility Drills',
        score: 89,
        maxScore: 100,
        details: showFullContent ? 'Strong performance in change of direction tests' : '████████████████████████████████',
        improvements: showFullContent ? ['Focus on deceleration control', 'Practice reactive movements'] : ['██████████████████████', '████████████████████']
      },
      {
        title: 'Endurance Evaluation',
        score: 91,
        maxScore: 100,
        details: showFullContent ? 'Excellent cardiovascular performance and recovery' : '███████████████████████████████',
        improvements: showFullContent ? ['Maintain current training intensity'] : ['████████████████████████']
      }
    ]
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 75) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getTrendIcon = (current: number, previous: number) => {
    if (current > previous) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (current < previous) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/player/dashboard"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Assessment Results</h1>
              <p className="text-gray-600">{assessmentResult.name} • {assessmentResult.completedDate}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowFullContent(!showFullContent)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              {showFullContent ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showFullContent ? 'Mask Content' : 'Show Full Content'}</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors">
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overall Score */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Overall Performance</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-gray-900">{assessmentResult.overallScore}</span>
                <span className="text-lg text-gray-500">/ 100</span>
              </div>
              <div className="flex items-center space-x-1">
                {getTrendIcon(assessmentResult.overallScore, assessmentResult.previousScore)}
                <span className="text-sm text-gray-600">
                  {assessmentResult.overallScore > assessmentResult.previousScore ? '+' : ''}
                  {assessmentResult.overallScore - assessmentResult.previousScore} from last assessment
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-600">Duration</p>
            <p className="text-lg font-semibold text-gray-900">{assessmentResult.duration}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-primary-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${assessmentResult.overallScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Section Results */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Section Breakdown</h2>
          {!showFullContent && (
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <EyeOff className="h-4 w-4" />
              <span>Content masked for privacy</span>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {assessmentResult.sections.map((section, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{section.title}</h3>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor(section.score)} ${getScoreColor(section.score)}`}>
                  {section.score}/{section.maxScore}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      section.score >= 90 ? 'bg-green-500' : 
                      section.score >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${(section.score / section.maxScore) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Performance Summary</p>
                  <p className={`text-sm ${showFullContent ? 'text-gray-600' : 'text-gray-400 font-mono bg-gray-100 p-2 rounded'}`}>
                    {section.details}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Improvement Areas</p>
                  <ul className="space-y-1">
                    {section.improvements.map((improvement, idx) => (
                      <li key={idx} className={`text-sm flex items-start space-x-2 ${showFullContent ? 'text-gray-600' : 'text-gray-400'}`}>
                        <span className="text-primary-500 mt-0.5">•</span>
                        <span className={showFullContent ? '' : 'font-mono bg-gray-100 p-1 rounded flex-1'}>
                          {improvement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">Recommended Training Focus</h3>
            <p className={`text-sm ${showFullContent ? 'text-blue-800' : 'text-gray-400 font-mono bg-gray-100 p-2 rounded'}`}>
              {showFullContent ? 'Focus on speed development through interval training and technical drills' : '████████████████████████████████████████████████'}
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-medium text-green-900 mb-2">Strengths to Maintain</h3>
            <p className={`text-sm ${showFullContent ? 'text-green-800' : 'text-gray-400 font-mono bg-gray-100 p-2 rounded'}`}>
              {showFullContent ? 'Excellent endurance and agility performance - maintain current training' : '███████████████████████████████████████████████'}
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <Link
            to="/player/dashboard"
            className="btn-primary"
          >
            Take Another Assessment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerResults;
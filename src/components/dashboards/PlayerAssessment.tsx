import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, Circle, Play, Pause, RotateCcw } from 'lucide-react';

const PlayerAssessment: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const assessmentSections = [
    {
      id: 1,
      title: 'Physical Preparation',
      description: 'Warm-up exercises and initial physical readiness tests',
      duration: 10,
      completed: true
    },
    {
      id: 2,
      title: 'Speed Tests',
      description: 'Sprint timing and acceleration measurements',
      duration: 15,
      completed: true
    },
    {
      id: 3,
      title: 'Agility Drills',
      description: 'Change of direction and reactive agility tests',
      duration: 12,
      completed: false,
      active: true
    },
    {
      id: 4,
      title: 'Endurance Evaluation',
      description: 'Cardiovascular endurance and recovery tests',
      duration: 8,
      completed: false
    }
  ];

  const currentSectionData = assessmentSections[currentSection];

  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive) {
      interval = setInterval(() => {
        setTimeElapsed(timeElapsed + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeElapsed]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextSection = () => {
    if (currentSection < assessmentSections.length - 1) {
      setCurrentSection(currentSection + 1);
      setTimeElapsed(0);
      setIsActive(false);
    }
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
              <h1 className="text-2xl font-bold text-gray-900">Speed & Agility Assessment</h1>
              <p className="text-gray-600">Section {currentSection + 1} of {assessmentSections.length}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="metric-card">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">Time Elapsed</p>
                  <p className="text-xl font-bold text-gray-900">{formatTime(timeElapsed)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Assessment Progress</h2>
          <span className="text-sm text-gray-500">
            {assessmentSections.filter(s => s.completed).length} of {assessmentSections.length} sections completed
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          {assessmentSections.map((section, index) => (
            <div key={section.id} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                section.completed 
                  ? 'bg-green-500 border-green-500 text-white' 
                  : section.active 
                  ? 'border-blue-500 text-blue-500 bg-blue-50'
                  : 'border-gray-300 text-gray-400'
              }`}>
                {section.completed ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              
              {index < assessmentSections.length - 1 && (
                <div className={`w-12 h-0.5 mx-2 ${
                  section.completed ? 'bg-green-500' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Current Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Section Details */}
        <div className="lg:col-span-2 dashboard-card">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {currentSectionData.title}
            </h3>
            <p className="text-gray-600">{currentSectionData.description}</p>
          </div>

          {/* Assessment Content */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Play className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">Ready to Begin?</h4>
                <p className="text-gray-600 mt-2">
                  Follow the on-screen instructions and perform the required movements. 
                  Your performance will be automatically recorded.
                </p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    isActive 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isActive ? (
                    <>
                      <Pause className="h-5 w-5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>Start</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => {
                    setTimeElapsed(0);
                    setIsActive(false);
                  }}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                >
                  <RotateCcw className="h-5 w-5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentSection === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              Previous Section
            </button>
            
            <button
              onClick={handleNextSection}
              disabled={currentSection === assessmentSections.length - 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentSection === assessmentSections.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'btn-primary'
              }`}
            >
              {currentSection === assessmentSections.length - 1 ? 'Complete Assessment' : 'Next Section'}
            </button>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Section Overview */}
          <div className="dashboard-card">
            <h4 className="font-semibold text-gray-900 mb-4">Assessment Sections</h4>
            <div className="space-y-3">
              {assessmentSections.map((section, index) => (
                <div key={section.id} className={`p-3 rounded-lg border ${
                  index === currentSection 
                    ? 'border-blue-200 bg-blue-50' 
                    : 'border-gray-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {section.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : section.active ? (
                        <Circle className="h-4 w-4 text-blue-500 fill-current" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-400" />
                      )}
                      <span className="text-sm font-medium text-gray-900">{section.title}</span>
                    </div>
                    <span className="text-xs text-gray-500">{section.duration} min</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="dashboard-card">
            <h4 className="font-semibold text-gray-900 mb-4">Instructions</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Follow all safety guidelines</p>
              <p>• Perform movements as demonstrated</p>
              <p>• Take breaks when needed</p>
              <p>• Ensure proper form over speed</p>
              <p>• Contact support if you experience issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerAssessment;
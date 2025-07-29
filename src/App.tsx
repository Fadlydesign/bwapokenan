import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import PlayerDashboard from './components/dashboards/PlayerDashboard';
import PlayerAssessment from './components/dashboards/PlayerAssessment';
import PlayerResults from './components/dashboards/PlayerResults';
import CoachDashboard from './components/dashboards/CoachDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/player/dashboard" replace />} />
            <Route path="/player/dashboard" element={<PlayerDashboard />} />
            <Route path="/player/assessment" element={<PlayerAssessment />} />
            <Route path="/player/results" element={<PlayerResults />} />
            <Route path="/coach/dashboard" element={<CoachDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
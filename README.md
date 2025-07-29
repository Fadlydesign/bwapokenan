# Sports Assessment Platform

A modern React-based sports assessment platform with separate dashboards for players and coaches.

## Features

### Player Dashboard (01)
- ✅ Clean interface without price indicators 
- ✅ Assessment listings without TM references
- ✅ Progress tracking and performance metrics
- ✅ Available assessments with difficulty levels and categories

### Player Assessment Module (02)
- ✅ Interactive assessment interface for paid/started assessments
- ✅ Section-based progress tracking
- ✅ Timer functionality with start/pause/reset controls
- ✅ Step-by-step assessment workflow

### Player Assessment Results (03)
- ✅ Comprehensive results display with section breakdown
- ✅ Content masking feature for privacy (toggle on/off)
- ✅ Performance trends and improvement suggestions
- ✅ Export and sharing capabilities

### Coach Dashboard (04)
- ✅ Team overview with performance metrics
- ✅ Assessment booking system for players/teams
- ✅ Team insights and analytics
- ✅ Player selection and scheduling tools

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── dashboards/
│   │   ├── PlayerDashboard.tsx      # Main player dashboard
│   │   ├── PlayerAssessment.tsx     # Assessment interface
│   │   ├── PlayerResults.tsx        # Results with masking
│   │   └── CoachDashboard.tsx       # Coach management interface
│   └── common/
│       └── Navigation.tsx           # App navigation
├── styles/
│   └── index.css                    # Global styles and Tailwind
├── App.tsx                          # Main app component
└── main.tsx                         # App entry point
```

## Key Features Implemented

- **No Price Indicators**: All pricing references removed from player interfaces
- **No TM References**: Assessment names cleaned of trademark symbols
- **Content Masking**: Privacy-focused results display with toggle functionality
- **Assessment Booking**: Complete coach workflow for team management
- **Team Insights**: Performance analytics and development tracking
- **Responsive Design**: Mobile-friendly interface with modern UX
- **Type Safety**: Full TypeScript implementation for reliability

## Development Notes

The application is built with modern React patterns including:
- Functional components with hooks
- TypeScript for type safety
- Tailwind CSS for utility-first styling
- Component-based architecture
- Responsive design principles

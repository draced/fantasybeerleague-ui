import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Dashboard from './component/Dashboard';
import MyTeams from './component/MyTeams';
import TeamDetail from './component/TeamDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="container mt-5 text-center">
                <h1>Fantasy Beer League</h1>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/my-teams" element={<MyTeams />} />
                    <Route path="/team-detail/:teamId" element={<TeamDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
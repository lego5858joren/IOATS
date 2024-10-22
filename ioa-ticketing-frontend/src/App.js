import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import TicketPurchase from './components/TicketPurchase';
import RideSelection from './components/RideSelection';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/ticket-purchase" element={<TicketPurchase />} />
                    <Route path="/ride-selection" element={<RideSelection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
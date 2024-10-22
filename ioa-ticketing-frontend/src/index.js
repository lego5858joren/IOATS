// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import TicketPurchase from './components/TicketPurchase';
import RideSelection from './components/RideSelection'; // Import RideSelection component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/ticket-purchase" element={<TicketPurchase />} />
                <Route path="/ride-selection" element={<RideSelection />} /> {/* Add this line */}
            </Routes>
        </Router>
    </React.StrictMode>
);



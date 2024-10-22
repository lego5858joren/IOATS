// src/components/TicketPurchase.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicketPurchase.css';

const TicketPurchase = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('');
    const [expressPass, setExpressPass] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleExpressPassChange = (e) => {
        setExpressPass(e.target.checked);
    };

    const handlePurchase = () => {
        if (selectedDate) {
            const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
            const selected = selectedDate; // Selected date from input in YYYY-MM-DD format

            console.log('Today:', today);
            console.log('Selected Date:', selected);

            if (selected < today) {
                // Show error message if the selected date is in the past
                setErrorMessage('Please select a valid date to proceed.');
            } else {
                // Clear the error message
                setErrorMessage('');
                // Navigate to next step
                navigate('/ride-selection', { state: { date: selectedDate, expressPass } });
            }
        } else {
            setErrorMessage('Please select a valid date to proceed.');
        }
    };






    return (
        <div className="ticket-purchase-container">
            <h1>Purchase Your Ticket</h1>
            <div className="form-group">
                <label htmlFor="date">Select Date:</label>
                <input type="date" id="date" value={selectedDate} onChange={handleDateChange}/>
            </div>
            <div className="form-group">
                <label>
                    <input type="checkbox" checked={expressPass} onChange={handleExpressPassChange}/>
                    Add Express Pass
                </label>
            </div>
            <div className="error-message" style={{display: errorMessage ? 'block' : 'none'}}>{errorMessage}</div>
            <button className="purchase-button" onClick={handlePurchase}>Purchase Ticket</button>
        </div>
    );
};

export default TicketPurchase;





const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example endpoint to interact with Java backend
app.get('/api/rides', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8080/api/rides');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching rides');
    }
});

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'ioa-ticketing-frontend', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'ioa-ticketing-frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Node server running on http://localhost:${PORT}`);
});

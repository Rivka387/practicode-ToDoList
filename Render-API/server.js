const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// הכנס כאן את ה-API Key שלך
const API_KEY = process.env.RENDER_API_KEY;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                // 'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving services');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

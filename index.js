require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Weather Information Service');
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).send({ error: 'Please a city Name' });
    }

    try {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${city}`);
        const weatherData = response.data;

        if (weatherData.error) {
            return res.status(400).send({ error: weatherData.error.info });
        }

        res.send({
            location: weatherData.location.name,
            temperature: weatherData.current.temperature,
            weather_descriptions: weatherData.current.weather_descriptions[0],
            wind_speed: weatherData.current.wind_speed,
            humidity: weatherData.current.humidity,
        });
    } catch (error) {
        res.status(500).send({ error: 'Unable to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

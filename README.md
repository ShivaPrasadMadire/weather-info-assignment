
# Weather Information Service

## Description

A Node.js service that fetches and displays current weather information based on user input (city). It uses the Weatherstack API to retrieve weather data.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the Repository and Navigate to Project Directory**

2. **Install Dependencies**

  ```bash
  npm install
  ```

3. **Set Up Environment Variables**

  - Create a `.env` file in the root directory.
  - Add your Weatherstack API key:
    ```
    WEATHER_API_KEY=your_weatherstack_api_key
    ```

4. **Start the Server**

  ```bash
  node index.js
  ```

  The server will run on [http://localhost:3000](http://localhost:3000).

### Usage

- **Get Weather Information**

 Send a GET request to the `/weather` endpoint with a city name:

 ```
 http://localhost:3000/weather?city=CityName
 ```

 Replace `CityName` with the city you want to query.

### Example

For Hyderabad:

```
http://localhost:3000/weather?city=Hyderabad
```

### Response

The response includes:

- `location`: Location name.
- `temperature`: Current temperature in Celsius.
- `weather_descriptions`: Weather description.
- `wind_speed`: Wind speed in km/h.
- `humidity`: Humidity percentage.

import axios from "axios";

const apiUrl = 'https://api.openweathermap.org/data/2.5/';

export const getWeatherByCity = async (city) => {
    // const apiKey = 95ee4a834483c3e2d1eb284c154019bc
    const apiKey = process.env.WEATHER_API_KEY;
    const endpoint = `${apiUrl}forecast?q=${city}&appid=${apiKey}`;
    const response = await axios.get(endpoint);
    return response.data;
}

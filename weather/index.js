import { getWeatherByCity } from "./src/api/weatherApi.js";
import { groupWeatherByDay } from "./src/services/weatherService.js";
import dotenv from "dotenv";

dotenv.config();

getWeatherByCity('jakarta').then((res) => {
    console.log('Weather Forecast:');
    const groupedData = groupWeatherByDay(res);
    for (const day in groupedData) {
        console.log(`${day}: Temperature: ${groupedData[day][0].main.temp}°C`);
    }
});

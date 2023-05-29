import { formatDate } from "../utils/dateUtils.js";


export const groupWeatherByDay = (weatherData) => {
    const groupedData = {};

    weatherData.list.forEach((item) => {
        const date = new Date(item.dt_txt);
        const day = formatDate(date);
        if (groupedData.hasOwnProperty(day)) {
            groupedData[day].push(item);
        } else {
            groupedData[day] = [item];
        }
    });

    return groupedData;
}
import axios from "axios";

const apiConfig = {
  baseUrl: 'https://api.openweathermap.org/data/2.5/',
  apiKey: '34e29c21e43d5599c2d0f4a3ac49d0cd'
}

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
      'Content-type': 'application/json'
  },
});

export const weatherApi = {
  getCurrentWeather: (lat, lon) => {
    const url = `onecall?lat=${lat}&lon=${lon}&appid=${apiConfig.apiKey}&units=metric&exclude=minutely`;
    return axiosClient.get(url);
  },
  

}
import axios from 'axios';
const keys = require('../keys/index')

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+ keys.API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = ROOT_URL+'&q='+ city +',ie';
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
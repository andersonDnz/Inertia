import axios from 'axios';

const api = axios.create({
  baseURL: 'https://movies-tv-shows-database.p.rapidapi.com/',
});

export default api;
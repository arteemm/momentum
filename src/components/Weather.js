import { getWeather } from '../api';
import { viewWeather } from '../View';

class Weather {
  constructor() {
    this.data = {};
    this.city = () => document.querySelector('.city');
    this.city().value = localStorage.getItem('city') || 'Минск';
    this.city().addEventListener('change', this.getWeatherData.bind(this));
  }

  async getWeatherData() {
    this.data = await getWeather(this.city().value);
    viewWeather(this.data)
    localStorage.setItem('city', this.city().value);
  }

  render() {
    this.getWeatherData();
  }
}

export default Weather;
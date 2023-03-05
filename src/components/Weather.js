import { getWeather } from '../api';
import { viewWeather } from '../View';

class Weather {
  constructor() {
    this.language = 'ru';
    this.data = {};
    this.city = () => document.querySelector('.city');
    this.city().value = localStorage.getItem('city') || 'Минск';
    this.city().addEventListener('change', this.getWeatherData.bind(this));
  }

  setLanguage(language) {
    this.language = language;
  }

  async getWeatherData() {
    this.data = await getWeather(this.city().value, this.language);
    viewWeather(this.data, this.language);
    localStorage.setItem('city', this.city().value);
  }

  render() {
    this.getWeatherData();
  }
}

export default Weather;
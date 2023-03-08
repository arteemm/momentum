import { getWeather } from '../api';
import { viewWeather } from '../View';

class Weather {
  constructor() {
    this.language = 'ru';
    this.data = {};
    this.city = localStorage.getItem('city') || 'Минск';
    this.cityElem = () => document.querySelector('.city');
    this.cityElem().value = this.city;
    this.cityElem().addEventListener('change', this.getWeatherData.bind(this));
  }

  setLanguage(language) {
    this.language = language;
  }

  async getWeatherData() {
    try {
      const data = await getWeather(this.cityElem().value, this.language);
      this.data = data;
      this.city = this.cityElem().value;
      viewWeather(this.data, this.language);
    } catch(err) {
      console.error(err.message);
    }
  }

  render() {
    this.getWeatherData();
  }
}

export default Weather;
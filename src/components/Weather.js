import { getWeather } from '../api';
import { ViewWeather } from '../View';
import Container from './Container';

class Weather {
  constructor() {
    this.city = localStorage.getItem('city') || 'Минск';
    this.viewWeather = new ViewWeather({
      city: this.city,
      getWeatherData: this.getWeatherData.bind(this),
    });
    this.data = {};
    // window.addEventListener('DOMContentLoaded', this.getWeatherData.bind(this));
  }

  async getWeatherData(event) {
    const inputValue = event?.target.value || this.city;
    try {
      const data = await getWeather(inputValue, this.viewWeather.language);
      this.data = data;
      this.city = inputValue;
      this.viewWeather.showWeather(this.data);
    } catch(err) {
      console.error(err.message);
      this.viewWeather.changeErrorHidden(true);
    }
  }

  render() {
    return new Container(
      'weather',
      this.viewWeather.searchCityInput,
      this.viewWeather.weatherIcon,
      this.viewWeather.error,
      this.viewWeather.createDescriptionContainer(),
      this.viewWeather.wind,
      this.viewWeather.humidity,
    ).render();
  }
}

export default Weather;
import { ru, eng } from '../locales';
import { Container, Input } from '../components';

class ViewWeather {
  constructor(props) {
    this.language = 'ru'

    this.getWeatherData = props.getWeatherData;
    this.city = props.city;
    this.searchCityInput = new Input(this.createSearchCityInput()).render();

    this.wind = document.createElement('div');
    this.wind.className = 'weather__wind';
    this.humidity = document.createElement('div');
    this.humidity.className = 'weather__humidity';
    this.temperature = document.createElement('span');
    this.temperature.className = 'weather__temperature';
    this.weatherDescription = document.createElement('span');
    this.weatherDescription.className = 'weather__description';
    this.error = document.createElement('div');
    this.error.className ='weather__error hidden';
    this.weatherIcon = document.createElement('i');
    this.weatherIcon.className ='weather__icon owf';
  }

  setTextItems(language) {
    this.language = language;
  }

  createSearchCityInput() {
    return {
      type: 'text',
      className: 'weather__city',
      value: this.city,
      onChange: this.getWeatherData,
    }
  }

  createDescriptionContainer() {
    return new Container(
      'weather__container',
      this.temperature,
      this.weatherDescription,
    ).render();
  }

  changeErrorHidden(isTrue = false) {
    if (isTrue) {
      this.error.classList.remove('hidden');
      this.weatherIcon.classList.add('hidden');
      this.temperature.classList.add('hidden');
      this.weatherDescription.classList.add('hidden');
      this.wind.classList.add('hidden');
      this.humidity.classList.add('hidden');
    } else {
      this.error.classList.add('hidden');
      this.weatherIcon.classList.remove('hidden');
      this.temperature.classList.remove('hidden');
      this.weatherDescription.classList.remove('hidden');
      this.wind.classList.remove('hidden');
      this.humidity.classList.remove('hidden');
    }
  }

  showWeather(data) {
    const path = this.language === 'ru' ? ru.translation.weather : eng.translation.weather;
    this.error.textContent = path.error;
  
    if (!data.weather && !data.main && !data.wind) {
      this.changeErrorHidden(true);
    }
  
    this.changeErrorHidden(false);
    this.weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    this.temperature.textContent = `${data.main.temp}°C`;
    this.weatherDescription.textContent = data.weather[0].description;
    this.wind.textContent = `${path.speed}: ${data.wind.speed} ${path.unit}`;
    this.humidity.textContent = `${path.humidity}: ${data.main.humidity}%`;
    this.searchCityInput.placeholder =path.placeholder;
  }
}

export default ViewWeather;
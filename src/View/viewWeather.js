import { ru, eng } from '../locales';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');


const viewWeather = (data, language) => {
  const sourceLang = language === 'ru' ? ru.translation.weather : eng.translation.weather;

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `${sourceLang.speed} ${data.wind.speed}${sourceLang.unit}`;
  humidity.textContent = `${sourceLang.humidity} ${data.main.humidity}%`; 
}

export default viewWeather;
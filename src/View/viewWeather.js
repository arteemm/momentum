import { ru, eng } from '../locales';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');

const changeErrorHidden = (isTrue = false) => {
  if (isTrue) {
    error.classList.remove('hidden');
    weatherIcon.classList.add('hidden');
    temperature.classList.add('hidden');
    weatherDescription.classList.add('hidden');
    wind.classList.add('hidden');
    humidity.classList.add('hidden');
  } else {
    error.classList.add('hidden');
    weatherIcon.classList.remove('hidden');
    temperature.classList.remove('hidden');
    weatherDescription.classList.remove('hidden');
    wind.classList.remove('hidden');
    humidity.classList.remove('hidden');
  }
};

const viewWeather = (data, language) => {
  const sourceLang = language === 'ru' ? ru.translation.weather : eng.translation.weather;
  error.textContent = sourceLang.error;

  if (data.weather && data.main && data.wind) {
    changeErrorHidden(false);
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${sourceLang.speed} ${data.wind.speed}${sourceLang.unit}`;
    humidity.textContent = `${sourceLang.humidity} ${data.main.humidity}%`; 
  } else {
    changeErrorHidden(true);
  }
};

export default viewWeather;
import {eng, ru} from '../locales';

export default class Clock {
  constructor() {
    this.language = 'ru';
    this.date = new Date();
    this.time = () => document.querySelector('.time');
    this.pageDate = () => document.querySelector('.date');
    this.greeting = () => document.querySelector('.greeting');
    this.name = () => document.querySelector('.name');
  }

  getFormat() {
    return this.language === 'ru' ? 'ru-GB' : 'en-US';
  }

  showPlaceholder() {
    const placeholder = this.language === 'ru' ? '[Введите ваше имя]' : '[Enter your name]';

    this.name().placeholder = placeholder;
  }

  showDate() {
    const options = {weekday: 'long',month: 'long', day: 'numeric'};
    const format = this.getFormat();

    const currentDate = this.date.toLocaleDateString(format, options);
    this.pageDate().textContent = currentDate;
  }

  showTime() {
    const date = new Date();
    const format = this.getFormat();
    const currentTime = date.toLocaleTimeString(format);
    this.time().textContent = currentTime;
    setTimeout(this.showTime.bind(this), 1000);
  }

  getTimeOfDay() {
    const hours = this.date.getHours();
    let timesOfDay = 'morning';
    if ( (hours / 6) >= 2 && (hours / 6) < 3 ) {
      timesOfDay =  'afternoon';
    } else if ( (hours / 6) >= 3 && (hours / 6) < 4 ) {
      timesOfDay =  'evening';
    } else if ( (hours / 6) >= 0 && (hours / 6) < 1 ) {
      timesOfDay =  'night';
    }
  
    return timesOfDay;
  }
  
  showGreeting() {
    const timeOfDay = this.getTimeOfDay();
    this.greeting().textContent = this.language === 'ru' ?
    ru.translation.time[timeOfDay] :
    eng.translation.time[timeOfDay];
  }

  setLanguage(language) {
    this.language = language;
  }
  
  
  render() {
    this.showDate();
    this.showTime();
    this.showGreeting();
    this.showPlaceholder();
  }
}

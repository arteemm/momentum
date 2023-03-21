import {eng, ru} from '../locales';
import { ViewClock } from '../View';

export default class Clock {
  constructor() {
    this.viewClock = new ViewClock();
    this.date = new Date();
    this.format = 'ru-GB';
  }

  showDate() {
    const options = {weekday: 'long',month: 'long', day: 'numeric'};

    const currentDate = this.date.toLocaleDateString(this.format, options);
    this.viewClock.dateElem.textContent = currentDate;
  }

  showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString(this.format);
    this.viewClock.timeElem.textContent = currentTime;
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
  
  setTextItems(language) {
    const timeOfDay = this.getTimeOfDay();
    const path = language === 'ru' ? ru.translation.time : eng.translation.time;
    this.viewClock.greetingElem.textContent = path[timeOfDay];
    this.viewClock.nameElem.placeholder = path.placeholder;
    this.format = path.format;
    this.showDate();
    this.showTime();
  }
}
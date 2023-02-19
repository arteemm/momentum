export default class Clock {
  constructor() {
    this.date = new Date();
    this.time = () => document.querySelector('.time');
    this.pageDate = () => document.querySelector('.date');
    this.greeting = () => document.querySelector('.greeting');
  }

  showDate() {
    const options = {weekday: 'long',month: 'long', day: 'numeric'};
    const currentDate = this.date.toLocaleDateString('en-US', options);
    this.pageDate().textContent = currentDate;
  }

  showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString(); 
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
    this.greeting().textContent = `Good ${timeOfDay}`;
  }
  
  
  render() {
    this.showDate();
    this.showTime();
    this.showGreeting();
  }
}

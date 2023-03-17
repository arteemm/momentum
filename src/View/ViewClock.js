import { Container, Input } from '../components';

class ViewClock {
  constructor() {
    this.timeElem = document.createElement('time');
    this.timeElem.className = 'time';
    this.dateElem = document.createElement('date');
    this.dateElem.className = 'date';
    this.greetingElem = document.createElement('span');
    this.greetingElem.className = 'greeting';

    this.nameElem = new Input(this.createNameInput()).render();
  }

  createNameInput() {
    const name = localStorage.getItem('name') || '';
    return {
      type: 'text',
      className: 'name',
      value: name,
    }
  }

  createGreetingContainer() {
    return new Container(
      'greeting-container',
      this.greetingElem,
      this.nameElem,
    ).render();
  }
}

export default ViewClock;
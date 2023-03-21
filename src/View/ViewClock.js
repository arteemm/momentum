import { Container, Input } from '../components';

class ViewClock {
  constructor() {
    this.timeElem = document.createElement('time');
    this.timeElem.className = 'main__time';
    this.dateElem = document.createElement('date');
    this.dateElem.className = 'main__date';
    this.greetingElem = document.createElement('span');
    this.greetingElem.className = 'main__greeting';

    this.nameElem = new Input(this.createNameInput()).render();
  }

  createNameInput() {
    const name = localStorage.getItem('name') || '';
    return {
      type: 'text',
      className: 'main__name',
      value: name,
    }
  }

  createGreetingContainer() {
    return new Container(
      'main__container',
      this.greetingElem,
      this.nameElem,
    ).render();
  }
}

export default ViewClock;
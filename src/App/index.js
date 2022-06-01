import { Clock, Weather, Background, Quotes, AudioPlayer } from '../components';

class App {
  constructor() {
    this.clock = new Clock();
    this.weather = new Weather();
    this.background = new Background(this.clock.getTimeOfDay());
    this.quote = new Quotes();
    this.audioPlayer = new AudioPlayer();
    this.name = () => document.querySelector('.name');
    this.name().value = localStorage.getItem('name') || '';
    this.name().addEventListener('change', (e) => localStorage.setItem('name', e.target.value));
  }

  render() {
    this.clock.render();
    this.weather.render();
    this.background.render();
    this.quote.render();
  }
}

export default App;
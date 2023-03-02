import { Clock, Weather, Background, Quotes, AudioPlayer, Settings } from '../components';

class App {
  constructor() {
    this.clock = new Clock();
    this.weather = new Weather();
    this.background = new Background(this.clock.getTimeOfDay());
    this.quote = new Quotes();
    this.audioPlayer = new AudioPlayer();
    this.settings = new Settings({
      changeToGit: this.background.getImageLocal.bind(this.background),
      changeToUnsplash: this.background.getImageUnsplash.bind(this.background),
      setToUnsplash: this.background.setImageUnsplash.bind(this.background),
      changeToFlickr: this.background.getImageFlickr.bind(this.background),
      setToFlickr: this.background.setImageFlickr.bind(this.background),
      setTimeOfday: this.background.setTimeOfDay.bind(this.background),
      currentSource: this.background.currentSource.bind(this.background),
    });
    this.name = () => document.querySelector('.name');
    this.name().value = localStorage.getItem('name') || '';
    this.name().addEventListener('change', (e) => localStorage.setItem('name', e.target.value));
    this.settingsElem = () => document.querySelector('.settings__button');
    this.settingsElem().addEventListener('click', () => this.settings.show());
  }

  render() {
    this.clock.render();
    this.weather.render();
    this.background.render();
    this.quote.render();
  }
}

export default App;
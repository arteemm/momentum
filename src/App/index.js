import { Clock, Weather, Background, Footer, Header } from '../components';

class App {
  constructor() {
    this.clock = new Clock();
    // this.weather = new Weather();
    this.background = new Background({
      timeOfDay: this.clock.getTimeOfDay(),
      checkResponse: this.getCheckResponse.bind(this),
    });
    this.header = new Header();
    this.footer = new Footer({
      changeToGit: this.background.getImageLocal.bind(this.background),
      changeToUnsplash: this.background.getImageUnsplash.bind(this.background),
      setToUnsplash: this.background.setImageUnsplash.bind(this.background),
      changeToFlickr: this.background.getImageFlickr.bind(this.background),
      setToFlickr: this.background.setImageFlickr.bind(this.background),
      currentSource: this.background.getCurrentSource.bind(this.background),
      changeLanguage: this.changeLanguageApp.bind(this),
    });
    this.name = () => document.querySelector('.name');
    this.name().value = localStorage.getItem('name') || '';
    this.name().addEventListener('change', (e) => localStorage.setItem('name', e.target.value));

    window.addEventListener('beforeunload', this.saveSettings.bind(this));
  }

  getCheckResponse() {
    return this.footer.settings.viewSettings.tagsSubmenu.checkResponse.bind(this.footer.settings.viewSettings.tagsSubmenu);
  }

  render() {
    this.clock.render();
    // this.weather.render();
    this.background.render();

    const body = document.querySelector('body');

    body.append(
      this.header.render(),
      this.footer.render(),
    );

    this.changeLanguageApp('ru');
  }

  saveSettings() {
    localStorage.setItem('city', this.weather.city);
    const appSettings = {
      // language: this.footer.settings.viewSettings.language,
      source: this.background.currentSource.toString(),
    };
    localStorage.setItem('settings', JSON.stringify(appSettings));
  }

  changeLanguageApp(language) {
    this.footer.quote.getTypeQuote(language)();
    this.footer.settings.viewSettings.setTextItems(language);
    this.footer.settings.viewSettings.hiddenSubmenu.setTextItems(language);
    this.footer.settings.viewSettings.tagsSubmenu.setTextItems(language);
  }
}

export default App;
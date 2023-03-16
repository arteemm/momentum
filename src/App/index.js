import { Background, Footer, Header, MainSection } from '../components';

class App {
  constructor() {
    this.mainSection = new MainSection({
      getSlidePrev: this.getSlidePrev.bind(this),
      getSlideNext: this.getSlideNext.bind(this),
    });
    this.background = new Background({
      timeOfDay: this.mainSection.clock.getTimeOfDay(),
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

    window.addEventListener('beforeunload', this.saveSettings.bind(this));
  }

  getSlidePrev() {
    return this.background.getSlidePrev.bind(this.background);
  }

  getSlideNext() {
    return this.background.getSlideNext.bind(this.background);
  }


  getCheckResponse() {
    return this.footer.settings.viewSettings.tagsSubmenu.checkResponse.bind(this.footer.settings.viewSettings.tagsSubmenu);
  }

  render() {
    this.background.render();

    const root = document.querySelector('.root');

    root.append(
      this.header.render(),
      this.mainSection.render(),
      this.footer.render(),
    );

    this.changeLanguageApp('ru');
  }

  saveSettings() {
    // this.name = () => document.querySelector('.name');
    // this.name().value = localStorage.getItem('name') || '';
    // this.name().addEventListener('change', (e) => localStorage.setItem('name', e.target.value));
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
    this.header.weather.viewWeather.setTextItems(language);
    this.header.weather.getWeatherData();
  }
}

export default App;
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
      currentSourceName: this.background.currentSourceName,
      changeLanguage: this.changeLanguageApp.bind(this),
    });

    window.addEventListener('beforeunload', this.saveSettings.bind(this));
  }

  getSlidePrev() {
    this.background.getSlidePrev();
  }

  getSlideNext() {
    this.background.getSlideNext()
  }

  getCheckResponse() {
    return this.footer.settings.viewSettings.tagsSubmenu.checkResponse.bind(this.footer.settings.viewSettings.tagsSubmenu);
  }

  render() {
    this.background.setOriginallySource();

    const root = document.querySelector('.root');

    root.append(
      this.header.render(),
      this.mainSection.render(),
      this.footer.render(),
    );
    
    const language = JSON.parse(localStorage.getItem('settings'))?.language || 'ru';
    this.changeLanguageApp(language);
  }

  saveSettings() {
    const name = this.mainSection.clock.viewClock.nameElem.value;
    const cityWeather = this.header.weather.city

    const appSettings = {
      language: this.footer.settings.viewSettings.languageSubmenu.language,
      source: this.background.currentSourceName,
      hiddenElements: this.footer.settings.viewSettings.hiddenSubmenu.hiddenElements,
    };
    const todoList = this.footer.todoList.todoArr;
    localStorage.setItem('name', name);
    localStorage.setItem('city', cityWeather);
    localStorage.setItem('settings', JSON.stringify(appSettings));
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  changeLanguageApp(language) {
    this.footer.quote.getTypeQuote(language)();
    this.footer.settings.viewSettings.setTextItems(language);
    this.footer.settings.viewSettings.hiddenSubmenu.setTextItems(language);
    this.footer.settings.viewSettings.tagsSubmenu.setTextItems(language);
    this.header.weather.viewWeather.setTextItems(language);
    this.header.weather.getWeatherData();
    this.mainSection.clock.setTextItems(language);
    this.footer.todoList.setTextItems(language);
  }
}

export default App;
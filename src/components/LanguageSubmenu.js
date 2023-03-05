import ItemList from './ItemList';

class LanguageSubmenu {
  constructor(props) {
    this.changeLanguageClock = props.changeLanguageClock;
    this.renderClock = props.renderClock;
    this.changeLanguageWeather = props.changeLanguageWeather;
    this.renderWeather = props.renderWeather;
    this.changeLanguageQuote = props.changeLanguageQuote;
    this.renderQuote = props.renderQuote;
    this.changeLanguageSettings = props.changeLanguageSettings;
    this.renderSettings = props.renderSettings;
  }



  changeLanguage(language) {
    this.changeLanguageClock(language);
    this.changeLanguageWeather(language);
    this.changeLanguageQuote(language);
    this.changeLanguageSettings(language);
    this.renderClock();
    this.renderWeather();
    this.renderQuote();
    this.renderSettings();
  }

  createSwitchRussianItem() {
    const item = new ItemList({
      label: 'русский(RU)',
      class: 'settings__subitem',
      onClick: () => {
        this.changeLanguage('ru');
      },
    }).render();

    return item;
  }

  createSwitchEnglishItem() {
    const item = new ItemList({
      label: 'English(ENG)',
      class: 'settings__subitem',
      onClick: () => {
        this.changeLanguage('en');
      },
    }).render();

    return item;
  }

  render() {
    const container = document.createElement('ul');

    container.append(this.createSwitchRussianItem(), this.createSwitchEnglishItem());

    return container;
  }
}

export default LanguageSubmenu;